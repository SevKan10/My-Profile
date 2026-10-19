# SevKan - Personal Portfolio

Website portfolio cá nhân của **Khưu Triều Minh Khang (SevKan)**, tập trung vào hệ thống nhúng, thiết kế mạch, thiết kế 3D và các dự án công nghệ thực tế.

## Giới thiệu

Portfolio được xây dựng dưới dạng website tĩnh, có thể triển khai trực tiếp trên GitHub Pages. Website hỗ trợ tiếng Việt và tiếng Anh, đồng thời sử dụng giao diện xanh dương nhạt làm màu chủ đạo.

## Tính năng

- Giao diện responsive cho desktop, tablet và mobile.
- Chuyển đổi ngôn ngữ Việt/Anh.
- Dark mode và lưu lựa chọn bằng `localStorage`.
- Thanh điều hướng sticky với liên kết đến từng khu vực.
- Giới thiệu cá nhân và liên kết mạng xã hội.
- Thông tin học vấn tại Đại học Cần Thơ.
- Thanh tiến trình học tập tự động theo thời gian dự kiến của khóa học.
- Timeline hành trình học tập và làm việc.
- Mục thành tựu theo từng năm, kèm hình ảnh và tài liệu minh chứng.
- Danh sách kỹ năng và công cụ.
- Bộ lọc dự án theo nhóm:
  - Hệ thống nhúng
  - Web
  - Thiết kế
- Modal xem chi tiết dự án.
- Danh sách chứng chỉ.
- Danh sách bài viết.
- Form liên hệ qua `mailto`.
- SEO metadata và Open Graph metadata.
- Khu vực GitHub đã được chuẩn bị sẵn và hiện đang ẩn.

## Công nghệ sử dụng

- HTML5
- CSS3
- JavaScript
- Font Awesome
- Google Fonts
- GitHub Pages

## Cấu trúc thư mục

```text
My-Profile/
├── index.html              # Nội dung chính của website
├── style.css               # Giao diện và responsive layout
├── script.js               # Ngôn ngữ, dark mode, filter, modal và tiến trình học tập
├── CNAME                   # Tên miền tùy chỉnh nếu sử dụng GitHub Pages
├── images/                 # Avatar, ảnh dự án và ảnh bài viết
└── docs/                   # Ảnh thành tựu, PDF minh chứng và thông tin bổ sung
```

## Chạy dự án local

Vì đây là website tĩnh, có thể mở trực tiếp file `index.html` trên trình duyệt. Để có trải nghiệm ổn định hơn, nên chạy bằng một local server.

### VS Code Live Server

1. Mở thư mục dự án bằng VS Code.
2. Cài extension **Live Server**.
3. Nhấp chuột phải vào `index.html`.
4. Chọn **Open with Live Server**.

### Python HTTP server

Nếu đã cài Python, chạy lệnh sau tại thư mục dự án:

```bash
python -m http.server 8000
```

Sau đó mở:

```text
http://localhost:8000
```

## Cập nhật nội dung

### Cập nhật thông tin cá nhân

Chỉnh sửa các nội dung trong `index.html`. Những phần có thuộc tính `data-vi` và `data-en` sẽ được hiển thị theo ngôn ngữ đang chọn.

Ví dụ:

```html
<span data-vi="Nội dung tiếng Việt" data-en="English content">
  Nội dung tiếng Việt
</span>
```

### Thêm thành tựu

1. Đặt ảnh hoặc tài liệu minh chứng vào thư mục `docs/`.
2. Thêm một `achievement-card` trong section `#achievements`.
3. Cập nhật cả nội dung `data-vi` và `data-en`.
4. Kiểm tra đường dẫn ảnh/PDF tương ứng.

### Thêm dự án

Mỗi dự án nằm trong `.projects` và sử dụng thuộc tính `data-category`:

```html
<div class="project-card" data-category="embedded">
  ...
</div>
```

Các giá trị bộ lọc hiện có là `embedded`, `web` và `design`.

### Cập nhật avatar

Đặt ảnh mới trong thư mục `images/`, sau đó cập nhật đường dẫn trong:

- Ảnh avatar trong phần profile.
- `og:image` trong phần `<head>` nếu muốn thay đổi ảnh preview khi chia sẻ.

## Triển khai GitHub Pages

1. Push toàn bộ mã nguồn lên repository GitHub.
2. Mở **Settings → Pages**.
3. Chọn branch chứa website, thường là `main`.
4. Chọn thư mục `/root`.
5. Lưu cấu hình và chờ GitHub Pages triển khai.

Nếu sử dụng tên miền riêng, cập nhật file `CNAME` và cấu hình DNS tương ứng.

## Ghi chú

- Form liên hệ sử dụng `mailto`, vì vậy trình duyệt sẽ mở ứng dụng email mặc định của người dùng.
- Phần GitHub activity hiện đang được ẩn nhưng code vẫn được giữ lại để có thể bật lại sau này.
- Thanh tiến trình học tập là ước tính theo thời gian từ 09/2025 đến 06/2030, không đại diện cho số tín chỉ đã hoàn thành.

## Tác giả

**Khưu Triều Minh Khang (SevKan)**

- GitHub: [SevKan10](https://github.com/SevKan10)
- Email: [khangkhu10727@gmail.com](mailto:khangkhu10727@gmail.com)
