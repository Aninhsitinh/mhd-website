# Tổng Quan Hệ Thống Website MHD Valuation

Dưới đây là tài liệu tổng hợp chi tiết về kiến trúc, công nghệ và các tính năng cốt lõi của hệ thống website MHD Valuation ở trạng thái hiện tại. Tài liệu này đóng vai trò như một bản thiết kế (blueprint) giúp bạn dễ dàng nắm bắt, bàn giao hoặc mở rộng hệ thống trong tương lai.

## 1. Ngăn Xếp Công Nghệ (Tech Stack)

Hệ thống được xây dựng theo mô hình **Headless CMS** hiện đại, phân tách hoàn toàn giữa Frontend và Backend nhằm tối ưu hóa hiệu suất và bảo mật.

- **Frontend Framework:** Nuxt 3 (dựa trên Vue 3) - Cung cấp khả năng render phía máy chủ (SSR), định tuyến mạnh mẽ và tối ưu SEO.
- **Styling:** Tailwind CSS - CSS Framework dạng tiện ích, cho phép xây dựng giao diện nhanh chóng, đồng bộ và có tính đáp ứng (responsive) hoàn hảo.
- **Backend/CMS:** WordPress (thông qua WP REST API) - Đóng vai trò làm kho lưu trữ và quản lý nội dung (Tin tức, Dự án, Tài liệu).
- **Ngôn ngữ:** TypeScript & JavaScript.

## 2. Kiến Trúc Thư Mục Cốt Lõi

Cấu trúc dự án tuân thủ chặt chẽ theo chuẩn của Nuxt 3:

- `/app/pages/`: Hệ thống định tuyến tự động (File-based Routing). Các thư mục như `tin-tuc`, `du-an`, `tai-lieu` chứa các trang tĩnh và trang động (VD: `[slug].vue` để hiển thị chi tiết bài viết dựa trên đường dẫn).
- `/app/components/`: Chứa các thành phần UI dùng chung (AppHeader, AppFooter, PostCard, ProjectCard, ScrollToTop, ThemeToggle, v.v.).
- `/app/composables/`: Chứa các logic tái sử dụng. Quan trọng nhất là `useWordPress.js` - "Trái tim" kết nối Frontend với API của WordPress để kéo dữ liệu.
- `/assets/`: Chứa CSS toàn cục (`tailwind.css`) và hình ảnh tĩnh (logo).
- `nuxt.config.ts`: File cấu hình tổng của hệ thống, thiết lập môi trường, module (i18n, tailwind) và các thẻ Meta SEO cơ bản.

## 3. Các Tính Năng & Điểm Nhấn Đã Triển Khai

> [!TIP]
> Giao diện được tinh chỉnh đặc biệt để tạo cảm giác "Premium" (cao cấp) phù hợp với lĩnh vực Tài chính - Thẩm định giá.

### Giao Diện & UX (Trải nghiệm người dùng)
- **Thiết kế Glassmorphism:** Thanh điều hướng (Header) sử dụng hiệu ứng kính mờ (blur), tự động thu nhỏ và đổi màu khi cuộn trang.
- **Hiệu ứng Động (Animations):** 
  - Tích hợp thư viện `AOS` cho hiệu ứng trượt/hiện ra khi cuộn trang.
  - Sử dụng `vue3-autocounter` tạo hiệu ứng số đếm tự động bắt mắt ở phần Thống kê.
  - Hiệu ứng chuyển trang êm ái (Page Transitions) được cấu hình sâu trong `app.vue`.
  - Hiệu ứng hover cao cấp cho thẻ bài viết (từ từ phóng to ảnh `scale-110`, chuyển màu chữ).
- **Tính năng Hỗ trợ:** 
  - Nút *Cuộn lên đầu trang (Scroll to Top)*.
  - Chế độ Sáng/Tối (Dark/Light Mode) với khả năng nhớ tùy chọn của người dùng.
  - Trang lỗi 404 (Not Found) được thiết kế đồng bộ, chuyên nghiệp.

### Đa Ngôn Ngữ (i18n)
- Chuyển đổi nhanh chóng giữa **Tiếng Việt (VN)** và **Tiếng Anh (EN)** không cần tải lại trang.
- Được quản lý tập trung thông qua file `i18n.config.ts`.
- *Lưu ý:* Hệ thống hiện tại áp dụng dịch tự động đối với các thành phần tĩnh của giao diện (Menu, Nút bấm, Footer). 

### Kết Nối Dữ Liệu
- Logic kéo dữ liệu API độc lập thông qua composable `useWordPress()`.
- Tự động thay thế hình ảnh dự phòng (Fallback Images) tuyệt đẹp nếu bài viết trên WordPress bị thiếu ảnh bìa.
- Có cơ chế chặn Dịch (thuộc tính `notranslate`) để bảo vệ các Văn bản Pháp lý (Thông tư, Nghị định) khỏi việc bị dịch tự động sai lệch.

## 4. Những Giới Hạn Hiện Tại Cần Lưu Ý

> [!WARNING]
> Những điểm sau đây không phải là lỗi, mà là các thiết lập dựa trên giới hạn của môi trường Backend hiện tại. Khi nâng cấp Backend, bạn có thể dễ dàng giải quyết chúng.

1. **Nội dung Động & Tiếng Anh:** Vì Backend WordPress hiện tại chưa cài đặt Plugin đa ngôn ngữ (như WPML hoặc Polylang), nên nội dung của Tin tức, Dự án kéo từ API vẫn hiển thị bằng Tiếng Việt dù UI đã chuyển sang Tiếng Anh.
2. **Quản lý Hình ảnh:** Thư viện `@nuxt/image` hiện đang không tương thích tốt với cấu trúc URL trả về từ WordPress, do đó hệ thống đang sử dụng thẻ `<img>` gốc kết hợp thuộc tính `loading="lazy"`. Tốc độ vẫn rất tốt, nhưng chưa được nén định dạng tự động (như WebP).

## 5. Hướng Phát Triển Tiếp Theo (Nếu Có)
- **Cài đặt WPML/Polylang trên WordPress:** Để đồng bộ hoàn toàn ngôn ngữ động (bài viết) và tĩnh (UI).
- **Tối ưu hóa Lighthouse:** Khai báo cụ thể kích thước (width/height) cho ảnh lấy từ API để tránh rung lắc bố cục (CLS) trên thiết bị di động cũ.
- **Tích hợp tính năng Tìm kiếm:** Thêm bộ search ở Header sử dụng Endpoint Search của WP REST API để tìm văn bản tài liệu nhanh chóng.
