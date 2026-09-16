<template>
  <div class="min-h-screen bg-bg">
    <!-- Header -->
    <header class="relative pt-32 pb-16 overflow-hidden bg-bg text-center">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/10 blur-[100px] rounded-full"></div>
      <div class="container mx-auto px-4 relative z-10 reveal-on-scroll">
        <h1 class="text-3xl md:text-5xl font-bold text-text leading-tight mb-4 uppercase">Điều Khoản Sử Dụng</h1>
        <p class="text-text-secondary max-w-2xl mx-auto text-lg">Các quy định và điều kiện khi sử dụng website và dịch vụ của MHD Valuation.</p>
      </div>
    </header>

    <!-- Content -->
    <section class="py-16">
      <div class="container mx-auto px-4 max-w-4xl reveal-on-scroll delay-100">
        <div class="bg-surface p-8 md:p-12 rounded-2xl shadow-corporate prose dark:prose-invert prose-lg max-w-none prose-headings:text-text prose-p:text-text-secondary prose-li:text-text-secondary prose-a:text-primary">
          
          <h2>1. Chấp nhận các điều khoản</h2>
          <p>Khi truy cập và sử dụng website <strong>mhd.com.vn</strong>, Quý khách được xem là đã đọc, hiểu và đồng ý bị ràng buộc bởi các Điều khoản sử dụng này. Nếu Quý khách không đồng ý với bất kỳ điều khoản nào, vui lòng ngừng sử dụng website của chúng tôi.</p>

          <h2>2. Quyền sở hữu trí tuệ</h2>
          <p>Tất cả các nội dung trên website bao gồm văn bản, hình ảnh, đồ họa, logo, biểu tượng, video, bản ghi âm và phần mềm đều thuộc bản quyền của MHD Valuation hoặc các bên cấp phép hợp pháp. Quý khách không được phép sao chép, chỉnh sửa, phân phối, xuất bản hoặc sử dụng cho mục đích thương mại khi chưa có sự đồng ý bằng văn bản từ MHD Valuation.</p>

          <h2>3. Trách nhiệm người dùng</h2>
          <ul>
            <li>Không sử dụng website vào mục đích bất hợp pháp, gian lận hoặc gây tổn hại cho hệ thống.</li>
            <li>Không phát tán virus, mã độc hoặc bất kỳ công cụ nào nhằm phá hoại, đánh cắp dữ liệu của website.</li>
            <li>Thông tin Quý khách cung cấp qua các biểu mẫu liên hệ, đăng ký phải đảm bảo tính trung thực và chính xác.</li>
          </ul>

          <h2>4. Miễn trừ trách nhiệm</h2>
          <p>MHD Valuation nỗ lực đảm bảo mọi thông tin trên website đều chính xác và được cập nhật. Tuy nhiên, chúng tôi không đảm bảo tính hoàn thiện tuyệt đối và không chịu trách nhiệm pháp lý cho bất kỳ thiệt hại trực tiếp, gián tiếp nào phát sinh từ việc sử dụng hoặc không thể sử dụng thông tin trên website này.</p>
          <p>Các nội dung bài viết, tin tức chuyên ngành chỉ mang tính chất tham khảo. Khách hàng nên liên hệ trực tiếp với chuyên gia của MHD để được tư vấn chính xác cho từng trường hợp cụ thể.</p>

          <h2>5. Thay đổi điều khoản</h2>
          <p>MHD Valuation có quyền sửa đổi, bổ sung hoặc thay thế các điều khoản sử dụng này bất cứ lúc nào mà không cần thông báo trước. Việc Quý khách tiếp tục sử dụng website sau khi có sự thay đổi đồng nghĩa với việc chấp nhận các điều khoản mới.</p>
          
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

useScrollReveal()

useHead({
  title: 'Điều Khoản Sử Dụng - MHD Valuation'
})
</script>
