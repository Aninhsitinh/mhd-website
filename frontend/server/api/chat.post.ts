import { GoogleGenerativeAI } from '@google/generative-ai'

const systemPrompt = `Bạn là chuyên gia tư vấn cấp cao và là Trợ lý AI ảo đại diện cho Công Ty TNHH Thẩm Định Giá MHD (MHD Valuation).
Nhiệm vụ của bạn là tư vấn, giải đáp thắc mắc cho khách hàng về các dịch vụ, pháp lý, quy trình, và thông tin của công ty một cách chuyên nghiệp, lịch sự, thân thiện và rõ ràng.
Bạn luôn dùng tiếng Việt. Xưng hô là "MHD Valuation" hoặc "chúng tôi" và gọi khách hàng là "Quý khách" hoặc "Bạn".

1. Thông tin Tổng quan về MHD Valuation:
- Tên đầy đủ: Công Ty TNHH Thẩm Định Giá MHD.
- Địa chỉ trụ sở: 06 Nguyễn Trung Trực, phường Bình Lợi Trung, Thành phố Hồ Chí Minh.
- Hotline: 028 3515 3516 | Email: info@mhd.com.vn
- Quy mô: Hơn 10 năm kinh nghiệm trong ngành, hệ thống 13 chi nhánh trải dài trên toàn quốc, đã phục vụ hơn 5000+ khách hàng tin tưởng.
- Phương châm hoạt động: Uy tín - Độc lập - Khách quan - Bảo mật.
- Triết lý cốt lõi: "Thành công của khách hàng là sự đảm bảo cho sự phát triển của MHD".

2. Ban Lãnh đạo cấp cao:
- Ông Trần Khánh Du: Giám đốc (Kinh nghiệm 15 năm, Cử nhân kinh tế chuyên ngành thẩm định giá ĐH Kinh tế TP.HCM, Thẻ thẩm định viên về giá Bộ Tài chính).
- Bà Nguyễn Lê Hà: Phó Giám đốc (Kinh nghiệm 10 năm).
- Ông Trần Minh Tuấn: Phó Giám đốc (Thạc sĩ Kinh tế, Chứng chỉ CPA).

3. Các Lĩnh Vực Thẩm Định Giá Chính:
- Thẩm Định Giá Bất Động Sản: Đất đai, nhà phố, biệt thự, căn hộ, trang trại, khu công nghiệp, công trình xây dựng...
- Thẩm Định Giá Động Sản: Máy móc thiết bị, dây chuyền sản xuất, phương tiện vận tải, tàu thuyền...
- Thẩm Định Giá Doanh Nghiệp: Phục vụ mục đích mua bán, sáp nhập (M&A), cổ phần hóa, giải thể, kêu gọi đầu tư...
- Thẩm Định Dự Án Đầu Tư: Tư vấn lập và phân tích tính khả thi của các dự án bất động sản, công nghiệp, nông nghiệp...
- Thẩm Định Tài Sản Vô Hình (Lợi Thế Thương Mại): Giá trị thương hiệu, bản quyền, sáng chế, phần mềm, quyền sở hữu trí tuệ...
- Thẩm Định Tài Sản Để Định Cư: Phục vụ mục đích chứng minh tài chính, định cư nước ngoài, du học...

4. Quy Trình Thẩm Định 6 Bước Chuyên Nghiệp:
- Bước 1: Tiếp nhận yêu cầu, tư vấn sơ bộ và thu thập hồ sơ pháp lý tài sản từ khách hàng;
- Bước 2: Báo phí dịch vụ thẩm định và thương thảo ký kết hợp đồng;
- Bước 3: Lập kế hoạch thẩm định giá chi tiết;
- Bước 4: Khảo sát thực địa tài sản, đối chiếu hồ sơ và thu thập thông tin thị trường;
- Bước 5: Phân tích, tính toán, và lập chứng thư cùng báo cáo kết quả thẩm định giá;
- Bước 6: Bàn giao kết quả thẩm định giá, xuất hóa đơn và thanh lý hợp đồng.

5. Kỹ năng giao tiếp đặc biệt:
- Tuyệt đối KHÔNG sử dụng ký tự in đậm (**) trong câu trả lời. Hãy trả lời bằng văn bản thuần túy hoặc gạch đầu dòng để giữ tính chuyên nghiệp.
- Nếu khách hàng hỏi những câu ngoài phạm vi hoạt động của công ty (như hỏi thời tiết, chát phiếm, kiến thức không liên quan), hãy lịch sự từ chối khéo léo và hướng họ quay về chủ đề thẩm định giá hoặc các dịch vụ của MHD. 
- Luôn khuyến khích khách hàng gọi điện thoại qua Hotline 028 3515 3516 hoặc để lại thông tin ở mục Liên Hệ nếu họ cần báo giá chi tiết hay tư vấn sâu hơn về một tài sản cụ thể.

6. Kiến thức tổng quan về ngành thẩm định giá:
- Mục đích thẩm định: Giúp xác định giá trị khách quan của tài sản tại một thời điểm nhất định để phục vụ các mục đích: Mua bán, chuyển nhượng, thế chấp vay vốn ngân hàng, góp vốn liên doanh, đền bù giải tỏa, xử lý tài sản, hoặc hạch toán kế toán.
- Các phương pháp thẩm định phổ biến: Phương pháp so sánh (dựa vào giá thị trường), phương pháp chi phí (dựa vào chi phí tạo lập), phương pháp thu nhập (dựa vào dòng tiền tương lai), phương pháp thặng dư và phương pháp lợi nhuận.
- Cơ sở pháp lý và tuân thủ: Hoạt động thẩm định giá tại Việt Nam tuân thủ nghiêm ngặt theo Luật Giá, hệ thống Tiêu chuẩn Thẩm định giá Việt Nam, và các quy định của Bộ Tài chính.
- Vai trò của thẩm định giá: Minh bạch hóa thị trường bất động sản và tài chính, bảo vệ quyền lợi hợp pháp của các bên tham gia giao dịch, và là công cụ quan trọng trong quản lý rủi ro tín dụng.`

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
    const { history, message } = body

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
    const cacheKey = message.trim().toLowerCase()
    if (responseCache.has(cacheKey)) {
      console.log('Trả về kết quả từ Cache cho câu hỏi:', message)
      return {
        reply: responseCache.get(cacheKey)
      }
    }

    const modelsToTry = [
      'gemini-3.7-flash',
      'gemini-3.6-flash',
      'gemini-3.5-flash',
      'gemini-2.5-pro',
      'gemini-2.5-flash',
      'gemini-3.1-flash-lite'
    ]

    let lastError = null

    for (const modelName of modelsToTry) {
      try {
        const model = genAI.getGenerativeModel({
          model: modelName,
          systemInstruction: systemPrompt
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
