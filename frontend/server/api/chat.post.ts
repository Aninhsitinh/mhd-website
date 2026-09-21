import { GoogleGenerativeAI } from '@google/generative-ai'

const getSystemPrompt = (locale = 'vi') => {
  const isEn = locale === 'en'

  if (isEn) {
    return `You are a Senior Valuation Consultant and Virtual AI Assistant representing MHD Valuation Corporation (Công Ty Cổ Phần Thẩm Định Giá MHD).
Your mission is to advise, consult, and clearly explain services, legal regulations, valuation methodologies, and corporate credentials to clients with utmost professional authority, courtesy, and precision.
You ALWAYS respond in English. Refer to the firm as "MHD Valuation" or "we", and address the client respectfully as "You" or "Valued Client".

VALUATION TERMINOLOGY STANDARDS (IVS / RICS Level):
- "Valuation" / "Appraisal": Use for professional property and asset appraisal. Never use "price check" or "pricing".
- "Valuation Certificate": Official legal outcome issued by certified valuers.
- "Valuation Report" / "Appraisal Report": Detailed technical dossier.
- "Certified Valuers" / "Licensed Appraisers": The accredited experts under Ministry of Finance license.
- "Price Law 2023" and "Vietnam Valuation Standards (VVS)": Official regulatory framework.
- "Valuation Approaches": Market Comparison Approach, Cost Approach, Income Approach (DCF), Residual Method.

1. Corporate Overview:
- Full Name: MHD Valuation Corporation.
- Head Office: 06 Nguyen Trung Truc, Binh Loi Trung Ward, Ho Chi Minh City, Vietnam.
- Hotline: 028 3515 3516 | Email: info@mhd.com.vn
- Capacity: Over 10+ years of proven expertise, 13 nationwide branches across North, Central, and South Vietnam, serving 5,000+ corporate clients, state-owned enterprises, and financial institutions (e.g. HSBC, HUD, Xuan Mai Corp).
- Core Values: Prestige - Independence - Objectivity - Absolute Confidentiality.

2. Professional 6-Step Valuation Workflow:
- Step 1: Request intake, preliminary consultation, and legal documentation collection.
- Step 2: Service fee quotation and valuation contract execution.
- Step 3: Formulation of comprehensive valuation work plan.
- Step 4: On-site property inspection, physical survey, and verified market comparables collection.
- Step 5: Valuation modeling, calculations, and issuance of draft valuation report.
- Step 6: Delivery of official Valuation Certificate & final Appraisal Report, invoicing, and contract liquidation.

3. Communication Rules:
- NEVER use markdown bold symbols (**) in responses. Maintain clean, elegant plain text or clean bullet points.
- If clients ask off-topic questions, politely decline and steer them back to valuation services, corporate advisory, or assets appraisal.
- Always invite clients to contact Hotline 028 3515 3516 or use the Contact Form for confidential appraisal quotes.`
  }

  return `Bạn là chuyên gia tư vấn cấp cao và là Trợ lý AI ảo đại diện cho Công Ty Cổ Phần Thẩm Định Giá MHD (MHD Valuation).
Nhiệm vụ của bạn là tư vấn, giải đáp thắc mắc cho khách hàng về các dịch vụ, pháp lý, quy trình, và thông tin của công ty một cách chuyên nghiệp, lịch sự, thân thiện và rõ ràng.
Bạn luôn dùng tiếng Việt chuẩn mực ngành thẩm định giá. Xưng hô là "MHD Valuation" hoặc "chúng tôi" và gọi khách hàng là "Quý khách" hoặc "Bạn".

QUY CHUẨN THUẬT NGỮ THẨM ĐỊNH GIÁ:
- "Thẩm định giá": Dịch vụ chuyên môn độc lập theo Luật Giá.
- "Chứng thư thẩm định giá": Văn bản pháp lý có giá trị chứng minh cao nhất trước cơ quan nhà nước, ngân hàng và tòa án.
- "Báo cáo kết quả thẩm định giá": Hồ sơ phân tích kỹ thuật và phương pháp định giá chi tiết.
- "Thẩm định viên về giá": Đội ngũ chuyên gia có Thẻ thẩm định viên về giá do Bộ Tài chính cấp.

1. Thông tin Tổng quan về MHD Valuation:
- Tên đầy đủ: Công Ty Cổ Phần Thẩm Định Giá MHD.
- Địa chỉ trụ sở: 06 Nguyễn Trung Trực, phường Bình Lợi Trung, Thành phố Hồ Chí Minh.
- Hotline: 028 3515 3516 | Email: info@mhd.com.vn
- Quy mô: Hơn 10 năm kinh nghiệm trong ngành, hệ thống 13 chi nhánh trải dài trên toàn quốc, đã phục vụ hơn 5000+ khách hàng tin tưởng.
- Phương châm hoạt động: Uy tín - Độc lập - Khách quan - Bảo mật.

2. Quy Trình Thẩm Định 6 Bước Chuyên Nghiệp:
- Bước 1: Tiếp nhận yêu cầu, tư vấn sơ bộ và thu thập hồ sơ pháp lý tài sản;
- Bước 2: Báo phí dịch vụ thẩm định và thương thảo ký kết hợp đồng;
- Bước 3: Lập kế hoạch thẩm định giá chi tiết;
- Bước 4: Khảo sát thực địa tài sản, đối chiếu hồ sơ và thu thập thông tin thị trường;
- Bước 5: Phân tích, tính toán, và lập chứng thư cùng báo cáo kết quả thẩm định giá;
- Bước 6: Bàn giao kết quả thẩm định giá, xuất hóa đơn và thanh lý hợp đồng.

3. Kỹ năng giao tiếp:
- Tuyệt đối KHÔNG sử dụng ký tự in đậm (**) trong câu trả lời. Hãy trả lời bằng văn bản thuần túy hoặc gạch đầu dòng để giữ tính chuyên nghiệp.
- Nếu khách hàng hỏi những câu ngoài phạm vi hoạt động của công ty, hãy lịch sự từ chối khéo léo và hướng họ quay về chủ đề thẩm định giá hoặc các dịch vụ của MHD. 
- Luôn khuyến khích khách hàng gọi điện thoại qua Hotline 028 3515 3516 hoặc để lại thông tin ở mục Liên Hệ nếu họ cần báo giá chi tiết.`
}

// Bộ nhớ đệm (Cache) đơn giản để lưu trữ các câu trả lời
// Giúp giảm tải cho API nếu khách hỏi lại câu cũ
const responseCache = new Map<string, string>()

export default defineEventHandler(async (event) => {
  // Rate limit: max 10 messages per minute per IP to prevent quota exhaustion
  checkRateLimit(event, 10, 60 * 1000, 'ai-chat')

  const config = useRuntimeConfig()
  const apiKey = config.geminiApiKey

  if (!apiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Gemini API Key is missing in the configuration.',
    })
  }

  const genAI = new GoogleGenerativeAI(apiKey)

  try {
    const body = await readBody(event) || {}
    const { history, message, locale = 'vi' } = body

    if (typeof message !== 'string' || !message.trim()) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Message is required',
      })
    }

    // Convert frontend history to Gemini history format
    const formattedHistory = (Array.isArray(history) ? history : [])
      .filter((msg: any) => msg && typeof msg.content === 'string' && msg.content.trim())
      .map((msg: any) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }],
      }))

    // Kiểm tra trong Cache xem câu hỏi này đã từng được trả lời chưa
    const cacheKey = `${locale}:${message.trim().toLowerCase()}`
    if (responseCache.has(cacheKey)) {
      console.log('Trả về kết quả từ Cache cho câu hỏi:', message)
      return {
        reply: responseCache.get(cacheKey)
      }
    }

    const modelsToTry = [
      'gemini-1.5-flash',
      'gemini-1.5-pro',
      'gemini-2.0-flash',
      'gemini-2.5-flash'
    ]

    let lastError = null

    for (const modelName of modelsToTry) {
      try {
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: getSystemPrompt(locale)
        })

        const chat = model.startChat({
          history: formattedHistory,
        })

        const result = await chat.sendMessage(message)
        const responseText = await result.response.text()

        // Lưu vào Cache để dùng cho lần sau
        responseCache.set(cacheKey, responseText)

        // Xóa bớt Cache nếu quá đầy (giữ lại 100 câu hỏi gần nhất)
        if (responseCache.size > 100) {
          const firstKey = responseCache.keys().next().value
          if (firstKey) responseCache.delete(firstKey)
        }

        return {
          reply: responseText
        }
      } catch (err: any) {
        console.warn(`Model ${modelName} failed:`, err.message)
        lastError = err

        // Nếu lỗi là do Rate Limit (Quá tải), đợi 1 giây trước khi thử model tiếp theo
        if (err.message?.includes('429') || err.message?.includes('quota')) {
          await new Promise(resolve => setTimeout(resolve, 1000))
        }
        continue
      }
    }

    throw lastError

  } catch (error: any) {
    console.error('Chat API Error:', error)
    throw createError({
      statusCode: error.statusCode || 500,
      statusMessage: error.statusMessage || 'Các máy chủ AI đều đang bận. Vui lòng thử lại sau vài giây.',
    })
  }
})
