# Quick Start Guide - Lab 3 React Exercise

## 🚀 Chạy Project Nhanh (5 phút)

### Bước 1: Cài Đặt Dependencies
```bash
cd react-basics-exercise
npm install
```

### Bước 2: Chạy Development Server
```bash
npm run dev
```

### Bước 3: Mở Trình Duyệt
Truy cập: `http://localhost:5173`

## ✅ Các Exercise Có Trong Project

### Part II: Components (Exercise 3-4)
- **UserProfile Component**: Component hiển thị thông tin user với avatar
- **Props & PropTypes**: Validation và truyền data giữa components
- **Theme Support**: Light/Dark theme switching

### Part III: State & Interactivity (Exercise 5-6)
- **Counter Component**: useState hook với increment/decrement
- **Login Form**: Controlled components với multi-field form

### Part IV: Advanced Patterns (Exercise 7)
- **Card Component**: Wrapper component với children prop
- **Accordion**: Lifted state pattern - chỉ 1 panel mở tại 1 thời điểm

### Part VI: Todo List (Capstone)
- **TodoApp**: Complete CRUD application
- **Add**: Thêm todo mới
- **Toggle**: Đánh dấu hoàn thành/chưa hoàn thành
- **Delete**: Xóa todo
- **Counter**: Hiển thị số task đã hoàn thành

## 📦 Scripts Có Sẵn

```bash
# Development server với hot reload
npm run dev

# Build production
npm run build

# Preview production build locally
npm run preview
```

## 🎯 Test Từng Exercise

1. **UserProfile** (Cuộn xuống đầu tiên)
   - Thấy 2 user cards với theme khác nhau
   - Có avatar, tên, email

2. **Counter** (Cuộn tiếp)
   - Click "Increment" → số tăng
   - Click "Decrement" → số giảm
   - Click "Reset" → về 0

3. **Login** (Cuộn tiếp)
   - Gõ username → hiển thị real-time
   - Gõ password → hiển thị dots
   - Click "Login" → hiện alert

4. **Accordion** (Cuộn tiếp)
   - Click "Show" → panel mở
   - Mở panel khác → panel cũ tự đóng
   - Chỉ 1 panel mở tại 1 thời điểm

5. **Todo List** (Cuối cùng)
   - Nhập text → Click "Add Todo"
   - Check checkbox → task có gạch ngang
   - Click "Delete" → task biến mất
   - Counter hiển thị "X of Y tasks completed"

## 🐛 Debug với React DevTools

1. Cài extension: React Developer Tools (Chrome/Firefox)
2. Mở DevTools → Tab "Components"
3. Click component để xem props & state
4. Thử thay đổi state trực tiếp
5. Enable "Highlight updates" để thấy re-renders

## 📝 File Structure Chính

```
src/
├── App.jsx          → Main component tổng hợp tất cả
├── UserProfile.jsx  → Exercise 3-4
├── Counter.jsx      → Exercise 5
├── Login.jsx        → Exercise 6
├── Card.jsx         → Exercise 7 (wrapper)
├── Accordion.jsx    → Exercise 7 (parent)
├── Panel.jsx        → Exercise 7 (child)
├── TodoApp.jsx      → Capstone (main)
├── TodoForm.jsx     → Capstone (input)
├── TodoList.jsx     → Capstone (list)
├── TodoItem.jsx     → Capstone (item)
└── index.css        → Global styles
```

## 🎨 Customization Ideas

Sau khi hiểu code, bạn có thể:
- Thêm animations cho todo items
- Thêm filter (All/Active/Completed) cho todo
- Thêm edit functionality cho todo
- Thêm localStorage để lưu todos
- Thêm dark mode toggle cho toàn app
- Thêm form validation cho login

## ❓ Common Issues

**Port 5173 already in use?**
```bash
# Kill process trên port 5173
# MacOS/Linux:
lsof -ti:5173 | xargs kill -9
# Windows:
netstat -ano | findstr :5173
taskkill /PID [PID_NUMBER] /F
```

**npm install lỗi?**
```bash
# Xóa node_modules và install lại
rm -rf node_modules package-lock.json
npm install
```

**Blank page sau khi build?**
```bash
# Check console trong browser
# Thường là import path hoặc asset path sai
```

## 🎓 Learning Path

1. Đọc code từng component theo thứ tự
2. Thử modify props/state trong React DevTools
3. Thêm console.log để hiểu data flow
4. Tự implement thêm features
5. Deploy lên Vercel (xem DEPLOY_GUIDE.md)

## 📚 Tài Liệu Tham Khảo

- React Docs: https://react.dev
- Vite Docs: https://vitejs.dev
- PropTypes: https://www.npmjs.com/package/prop-types

---

**Happy Learning! 🎉**

Nếu có câu hỏi về code, check comments trong source code hoặc hỏi giảng viên.
