# 🌸 Hanakaze Photobooth - pptt booth (TypeScript Version)

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## 🌐 Demo Trực Tuyến

👉 **Link:** [https://photo-ts.vercel.app/](https://photo-ts.vercel.app/)

---

### ✨ Các cải tiến chính (Key Improvements)

* **Kiến trúc Clean Architecture:**
    * Tách biệt rõ ràng giữa **Giao diện (Views)**, **Logic (Hooks/Store)** và **Dữ liệu (Types/Configs)**.
    * Dễ dàng bảo trì và mở rộng tính năng mới mà không ảnh hưởng đến code cũ.

* **Quản lý State hiện đại với Zustand:**
    * Thay thế việc truyền Props chồng chéo (Prop Drilling) bằng Store tập trung.
    * Quản lý luồng dữ liệu (Flow): `Home` -> `Mode` -> `Camera` -> `Frame` -> `Decor`.

* **Tối ưu hóa UI/UX:**
    * Sử dụng **TailwindCSS** với bảng màu (Theme) được cấu hình tập trung.
    * Tối ưu hóa tài nguyên hình ảnh (Assets) và hiệu ứng động.

---

## 🛠️ Công nghệ sử dụng

* **Core:** React (Vite Build Tool)
* **Language:** TypeScript (ESNext)
* **Styling:** TailwindCSS
* **State Management:** Zustand
* **Camera Handling:** React-Webcam
* **Export Image:** Html2Canvas

---

## 📂 Cấu trúc dự án (Project Structure)

Dự án được tổ chức theo cấu trúc Clean Code, giúp dễ dàng điều hướng và quản lý:

```text
src/
├── 📂 assets/                  # Tài nguyên tĩnh
│   ├── logo.png                # Logo dự án
│   ├── 📂 backgrounds/
│   └── 📂 stickers/            
├── 📂 components/              # UI Components nhỏ
│   ├── Button.tsx              # Nút bấm dùng chung (Primary, Danger...)
│   ├── Layout.tsx              # Layout chính bọc ngoài ứng dụng
│   ├── StickerItem.tsx         # Component hiển thị sticker có thể kéo thả
│   └── StripLayout.tsx         # Component hiển thị dải ảnh (Strip 4 ảnh)
├── 📂 configs/                 # Cấu hình
│   └── app.constants.ts        # Chứa đường dẫn ảnh, list stickers, hằng số
├── 📂 hooks/                   # Custom Hooks (Logic)
│   ├── useCountdown.ts         # Logic đếm ngược khi chụp
│   └── useSticker.ts           # Logic thêm/xóa/di chuyển sticker
├── 📂 services/                # Giả lập API
│   └── photo.service.ts        # Mock API upload ảnh 
├── 📂 store/                   # State Management
│   └── usePhotoStore.ts        # Store chính quản lý Step, Photos, FrameStyle (Zustand)
├── 📂 types/                   # Định nghĩa TypeScript
│   └── index.ts                # Interfaces: IPhoto, ISticker, AppStep...
├── 📂 utils/                   # Hàm hỗ trợ
│   └── canvaHelper.ts          # Logic tải ảnh xuống (dùng html2canvas)
├── 📂 views/                   # Màn hình chính (Pages)
│   ├── HomeView.tsx            # Màn hình chờ (Intro)
│   ├── ModeView.tsx            # Màn hình chọn chế độ
│   ├── CameraView.tsx          # Màn hình chụp ảnh (Webcam)
│   ├── FrameView.tsx           # Màn hình chọn khung (Strip/Grid)
│   └── DecorView.tsx           # Màn hình trang trí & Download
├── App.tsx                     # Điều hướng luồng ứng dụng (Router logic)
├── main.tsx                    # Điểm khởi chạy React
├── index.css                   # Tailwind directives & Global styles
├── vite-env.d.ts               # Định nghĩa kiểu cho Vite
└── declarations.d.ts           # Fix lỗi thư viện thiếu type (react-draggable)

```
## 🚀 Hướng dẫn cài đặt (Installation)
Để chạy dự án này trên máy cục bộ (Localhost), hãy làm theo các bước sau:

**Bước 1: Clone dự án về máy**

Mở Terminal và chạy lệnh sau để tải source code về:

```bash
git clone https://github.com/ppttthu/Photo-TS.git
cd Photo-TS
```

**Bước 2: Cài đặt thư viện**
```bash
npm install
```

**Bước 3: Chạy môi trường**
```bash
npm run dev
```