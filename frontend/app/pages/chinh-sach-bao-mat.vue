<template>
  <div class="min-h-screen bg-bg">
    <!-- Header -->
    <header class="relative pt-32 pb-16 overflow-hidden bg-bg text-center">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-primary/10 blur-[100px] rounded-full"></div>
      <div class="container mx-auto px-4 relative z-10 reveal-on-scroll">
        <h1 class="text-3xl md:text-5xl font-bold text-text leading-tight mb-4 uppercase">Chính Sách Bảo Mật</h1>
        <p class="text-text-secondary max-w-2xl mx-auto text-lg">Chúng tôi cam kết bảo vệ thông tin cá nhân và quyền riêng tư của Quý khách hàng.</p>
      </div>
    </header>

    <!-- Content -->
    <section class="py-16">
      <div class="container mx-auto px-4 max-w-4xl reveal-on-scroll delay-100">
        <div class="bg-surface p-8 md:p-12 rounded-2xl shadow-corporate prose dark:prose-invert prose-lg max-w-none prose-headings:text-text prose-p:text-text-secondary prose-li:text-text-secondary prose-a:text-primary">
          
          <h2>1. Mục đích thu thập thông tin</h2>
          <p>MHD Valuation thu thập thông tin cá nhân của Quý khách hàng chủ yếu nhằm mục đích:</p>
          <ul>
            <li>Hỗ trợ khách hàng trong quá trình tư vấn dịch vụ thẩm định giá.</li>
            <li>Giải đáp thắc mắc khách hàng.</li>
            <li>Cung cấp cho Quý khách thông tin mới nhất về dịch vụ, bản tin thị trường.</li>
            <li>Thực hiện các khảo sát khách hàng nhằm cải thiện chất lượng dịch vụ.</li>
          </ul>

          <h2>2. Phạm vi sử dụng thông tin</h2>
          <p>MHD Valuation cam kết sử dụng thông tin cá nhân của khách hàng đúng mục đích và phạm vi đã thông báo. Chúng tôi không mua bán, chia sẻ hay trao đổi thông tin cá nhân của khách hàng cho bất kỳ bên thứ ba nào khác, ngoại trừ:</p>
          <ul>
            <li>Theo yêu cầu hợp pháp từ cơ quan pháp luật, cơ quan nhà nước có thẩm quyền.</li>
            <li>Trong trường hợp cần thiết để bảo vệ quyền lợi chính đáng của MHD Valuation trước pháp luật.</li>
          </ul>

          <h2>3. Thời gian lưu trữ thông tin</h2>
          <p>Dữ liệu cá nhân của khách hàng sẽ được lưu trữ cho đến khi có yêu cầu hủy bỏ từ phía khách hàng. Trong mọi trường hợp, thông tin cá nhân của khách hàng sẽ được bảo mật trên máy chủ hệ thống của MHD Valuation.</p>

          <h2>4. Cam kết bảo mật thông tin</h2>
          <p>Bảo vệ thông tin cá nhân của Quý khách là ưu tiên hàng đầu của chúng tôi. MHD Valuation sử dụng các công nghệ bảo mật tiên tiến và các biện pháp quản lý nghiêm ngặt nhằm ngăn chặn truy cập trái phép, sử dụng sai mục đích hoặc tiết lộ dữ liệu cá nhân.</p>
          <p>Mọi thắc mắc liên quan đến chính sách bảo mật, Quý khách vui lòng liên hệ trực tiếp qua email: <strong>info@mhd.com.vn</strong> hoặc Hotline: <strong>0989 294 636</strong>.</p>
          
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useScrollReveal } from '~/composables/useScrollReveal'

useScrollReveal()

useHead({
  title: 'Chính Sách Bảo Mật - MHD Valuation'
})
</script>
