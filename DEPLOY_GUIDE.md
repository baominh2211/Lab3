# Hướng Dẫn Deploy React App Lên Vercel

## 📋 Yêu Cầu Trước Khi Deploy

- Tài khoản GitHub (miễn phí)
- Tài khoản Vercel (miễn phí) - đăng ký tại [vercel.com](https://vercel.com)
- Code đã hoàn thành và test trên local

## 🚀 Cách 1: Deploy Qua GitHub (Khuyến Nghị)

### Bước 1: Push Code Lên GitHub

1. Tạo repository mới trên GitHub:
   - Vào https://github.com/new
   - Đặt tên: `react-basics-exercise`
   - Chọn Public hoặc Private
   - Không tích "Initialize with README" (vì đã có rồi)
   - Click "Create repository"

2. Khởi tạo Git và push code:
```bash
cd react-basics-exercise
git init
git add .
git commit -m "Initial commit - Lab 3 React Exercises"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/react-basics-exercise.git
git push -u origin main
```

### Bước 2: Deploy Trên Vercel

1. Đăng nhập Vercel:
   - Vào https://vercel.com
   - Click "Sign Up" nếu chưa có tài khoản
   - Chọn "Continue with GitHub"

2. Import Project:
   - Click nút "Add New..." → "Project"
   - Chọn repository `react-basics-exercise`
   - Click "Import"

3. Configure Project:
   - **Framework Preset**: Vercel tự động detect "Vite"
   - **Root Directory**: `./` (mặc định)
   - **Build Command**: `npm run build` (tự động)
   - **Output Directory**: `dist` (tự động)
   - Click "Deploy"

4. Chờ Deploy:
   - Vercel sẽ build và deploy tự động
   - Thời gian: ~1-2 phút
   - Sau khi hoàn thành, bạn sẽ nhận được URL

### Bước 3: Xem Kết Quả

- URL sẽ có dạng: `https://react-basics-exercise-xxx.vercel.app`
- Click vào URL để xem website
- Chia sẻ link này cho giảng viên

## 🔧 Cách 2: Deploy Qua Vercel CLI (Nâng Cao)

### Cài Đặt Vercel CLI

```bash
npm install -g vercel
```

### Deploy

```bash
cd react-basics-exercise
vercel
```

Làm theo hướng dẫn:
1. "Set up and deploy...?" → Yes
2. "Which scope?" → Chọn account của bạn
3. "Link to existing project?" → No
4. "What's your project's name?" → react-basics-exercise
5. "In which directory is your code located?" → ./
6. Vercel tự detect Vite settings → Yes

### Deploy Production

```bash
vercel --prod
```

## 📝 Update Code Sau Khi Deploy

### Với GitHub (Tự Động)

Mỗi khi push code mới lên GitHub, Vercel sẽ tự động build và deploy:

```bash
git add .
git commit -m "Update: Added new features"
git push
```

### Với Vercel CLI

```bash
vercel --prod
```

## 🔍 Kiểm Tra Deploy

### 1. Kiểm Tra Build Logs

Trên Vercel Dashboard:
- Click vào project
- Click vào deployment mới nhất
- Xem tab "Building" để check logs

### 2. Kiểm Tra Preview

- Mỗi branch/commit sẽ có preview URL riêng
- Main branch sẽ có production URL

### 3. Test Các Tính Năng

Sau khi deploy, test các exercise:
- ✅ User Profile hiển thị đúng
- ✅ Counter hoạt động
- ✅ Login form nhập liệu được
- ✅ Accordion toggle được
- ✅ Todo List add/delete/complete được

## 🛠️ Troubleshooting

### Lỗi: Build Failed

**Nguyên nhân**: Thiếu dependencies hoặc lỗi code

**Giải pháp**:
1. Check build logs trên Vercel
2. Test build local: `npm run build`
3. Fix lỗi và push lại

### Lỗi: Blank Page

**Nguyên nhân**: Router configuration hoặc base URL

**Giải pháp**:
- Check console trong browser DevTools
- Đảm bảo `vercel.json` có rewrites đúng

### Lỗi: 404 Not Found

**Nguyên nhân**: SPA routing

**Giải pháp**:
- File `vercel.json` đã được config sẵn
- Nếu vẫn lỗi, check lại content của file

## 🎯 Checklist Trước Khi Submit

- [ ] Code build thành công trên local: `npm run build`
- [ ] Code chạy đúng trên local: `npm run dev`
- [ ] Đã push lên GitHub
- [ ] Deploy thành công trên Vercel
- [ ] Đã test tất cả features trên production URL
- [ ] URL production hoạt động tốt
- [ ] Đã copy production URL để submit

## 📌 Tips

1. **Custom Domain**: Có thể thêm custom domain miễn phí trên Vercel
2. **Environment Variables**: Thêm trong Settings → Environment Variables
3. **Analytics**: Vercel cung cấp analytics miễn phí
4. **Preview Deployments**: Mỗi branch đều có preview URL riêng

## 🔗 Links Hữu Ích

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

## 📧 Submit Lab

Khi submit lab, cung cấp:
1. ✅ Production URL từ Vercel
2. ✅ GitHub repository link (nếu public)
3. ✅ Screenshot các exercises hoạt động

---

**Chúc bạn deploy thành công! 🎉**

Nếu gặp vấn đề, liên hệ giảng viên hoặc check Vercel documentation.
