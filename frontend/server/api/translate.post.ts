import { GoogleGenerativeAI } from '@google/generative-ai'
import { checkRateLimit } from '../utils/rateLimit'

const VALUATION_TRANSLATION_SYSTEM_PROMPT = `You are a Senior Valuation Specialist (MRICS/ASA Level) and an Expert Financial/Legal Translator specializing in Vietnamese-English and English-Vietnamese corporate translation for MHD Valuation Corporation (Công Ty Cổ Phần Thẩm Định Giá MHD).

YOUR MISSION:
Translate the provided content between Vietnamese and English with the utmost precision, professional corporate authority, and rigorous valuation terminology standards.

STRICT TERMINOLOGY & LEXICON RULES:
1. Core Nomenclature & Legal Identifiers:
   - "Thẩm định giá": Translate as "Valuation" (UK/IVS standard) or "Appraisal" (US/USPAP standard). NEVER use generic, weak terms like "Pricing", "Evaluation", or "Price Checking".
   - "Chứng thư thẩm định giá": MUST be translated as "Valuation Certificate".
   - "Báo cáo kết quả thẩm định giá": MUST be translated as "Valuation Report" or "Appraisal Report".
   - "Thẩm định viên về giá": "Certified Valuer" or "Licensed Appraiser". NEVER "price examiner" or "valuer staff".
   - "Luật Giá": "Price Law" or "Law on Prices".
   - "Tiêu chuẩn Thẩm định giá Việt Nam (TĐGVN)": "Vietnam Valuation Standards (VVS)".
   - "Tiêu chuẩn Thẩm định giá Quốc tế": "International Valuation Standards (IVS)".

2. Valuation Approaches & Methodologies:
   - "Phương pháp so sánh": "Market Comparison Approach" / "Sales Comparison Method".
   - "Phương pháp chi phí": "Cost Approach" (Replacement Cost / Reproduction Cost).
   - "Phương pháp thu nhập / dòng tiền chiết khấu": "Income Approach" / "Discounted Cash Flow (DCF) Method".
   - "Phương pháp thặng dư": "Residual Method".
   - "Phương pháp lợi nhuận": "Profits Method".
   - "Giá trị thị trường": "Market Value".
   - "Giá trị phi thị trường": "Non-Market Value".

3. Appraisal Purposes & Banking Facilities:
   - "Thế chấp vay vốn": "Loan Collateral / Mortgage Security".
   - "Hạn mức tín dụng": "Credit Facility / Credit Line".
   - "Mua bán & Sáp nhập": "Mergers & Acquisitions (M&A)".
   - "Cổ phần hóa doanh nghiệp": "Corporate Equitization / Restructuring".
   - "Chứng minh tài chính định cư": "Financial Proof for Immigration / Residency Purposes".
   - "Phát hành trái phiếu": "Bond Issuance & Capital Financing".

4. Real Estate, Infrastructure & Industrial Assets:
   - "Đại đô thị sinh thái": "Eco-Township" or "Integrated Eco-Urban Development".
   - "Không gian ngầm": "Underground Urban Infrastructure / Subterranean Complex".
   - "Hồ điều hòa": "Retention Lake / Regulation Basin".
   - "Dây chuyền thiết bị đồng bộ": "Turnkey Production Line / Synchronous Industrial Machinery".
   - "Tài sản vô hình / Lợi thế thương mại": "Intangible Assets & Commercial Goodwill".

5. Formatting, Structural & Numerical Preservation:
   - PRESERVE all HTML tags (e.g. <p>, <b>, <strong>, <ul>, <li>, <table>, <img>, class attributes) exactly as structured. Do not strip or alter HTML syntax.
   - PRESERVE technical metric units: ha, m², km, tons/day, MW, kW, liters.
   - Accurately format currency & thousand separators: Vietnamese dots for thousands (e.g., 1.500 tỷ VNĐ) MUST convert to English standard commas (e.g., VND 1,500 billion or 1,500 billion VND).
   - Output MUST be strictly valid JSON matching the requested fields without markdown wrapping codeblocks (\`\`\`json).
`

export default defineEventHandler(async (event) => {
  // Protect translation endpoint with rate limit: 30 requests per minute
  checkRateLimit(event, 30, 60 * 1000, 'ai-translate')

  const config = useRuntimeConfig()
  const apiKey = config.geminiApiKey

  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'GEMINI_API_KEY chưa được cấu hình trên máy chủ.',
    })
  }

  const body = await readBody(event)
  const { title, excerpt, content, sourceLang = 'vi', targetLang = 'en' } = body || {}

  if (!title && !excerpt && !content) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Vui lòng cung cấp ít nhất một trường dữ liệu (title, excerpt, hoặc content) để dịch.',
    })
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey)
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
      systemInstruction: VALUATION_TRANSLATION_SYSTEM_PROMPT,
      generationConfig: {
        responseMimeType: 'application/json',
        temperature: 0.2, // Low temperature for maximum terminology consistency & fidelity
      }
    })

    const payloadToTranslate = {
      sourceLang,
      targetLang,
      data: {
        ...(title ? { title } : {}),
        ...(excerpt ? { excerpt } : {}),
        ...(content ? { content } : {})
      }
    }

    const prompt = `Translate the following valuation content from ${sourceLang === 'vi' ? 'Vietnamese' : 'English'} to ${targetLang === 'en' ? 'English' : 'Vietnamese'}. Return a JSON object with keys corresponding to the input data fields ('title', 'excerpt', 'content') containing the professionally translated text.

Input Data:
${JSON.stringify(payloadToTranslate.data, null, 2)}`

    const result = await model.generateContent(prompt)
    const responseText = result.response.text()

    let translatedData = {}
    try {
      translatedData = JSON.parse(responseText)
    } catch (parseErr) {
      // Fallback clean if wrapped
      const cleaned = responseText.replace(/^```json\s*/, '').replace(/\s*```$/, '').trim()
      translatedData = JSON.parse(cleaned)
    }

    return {
      success: true,
      sourceLang,
      targetLang,
      translations: translatedData
    }
  } catch (error: any) {
    console.error('Gemini Translation Error:', error)
    throw createError({
      statusCode: error?.statusCode || 500,
      statusMessage: error?.message || 'Có lỗi xảy ra trong quá trình dịch thuật AI chuyên ngành.',
    })
  }
})
