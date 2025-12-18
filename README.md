# React Basics Exercise - Lab 3

Complete implementation of Lab 3: Introduction to React by MSc. Tran Vinh Khiem

## 🎯 Project Overview

This project contains all exercises from Lab 3, demonstrating:
- React functional components
- JSX syntax and expressions
- Props and PropTypes
- State management with useState
- Event handling
- Controlled components
- Component composition
- Lifting state up
- Complete Todo List application

## 📋 Exercises Completed

### Part II: Building with Components
- ✅ **Exercise 3**: Functional Components and JSX (UserProfile)
- ✅ **Exercise 4**: Props and PropTypes validation

### Part III: State and Interactivity
- ✅ **Exercise 5**: useState Hook (Counter)
- ✅ **Exercise 6**: Controlled Inputs (Login Form)

### Part IV: Advanced Composition
- ✅ **Exercise 7**: Component Composition (Card, Accordion with Lifted State)

### Part VI: Capstone Project
- ✅ **Todo List Application**: Complete CRUD functionality with state management

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
react-basics-exercise/
├── public/
├── src/
│   ├── components/
│   │   ├── UserProfile.jsx    # Exercise 3 & 4
│   │   ├── Counter.jsx         # Exercise 5
│   │   ├── Login.jsx           # Exercise 6
│   │   ├── Card.jsx            # Exercise 7
│   │   ├── Panel.jsx           # Exercise 7
│   │   ├── Accordion.jsx       # Exercise 7
│   │   ├── TodoApp.jsx         # Capstone Project
│   │   ├── TodoForm.jsx        # Capstone Project
│   │   ├── TodoList.jsx        # Capstone Project
│   │   └── TodoItem.jsx        # Capstone Project
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Features

### 1. User Profile Component
- Dynamic data rendering with props
- PropTypes validation
- Theme support (light/dark)
- Avatar images with custom sizing

### 2. Counter Component
- State management with useState
- Increment/Decrement/Reset functionality

### 3. Login Form
- Controlled inputs
- Multi-field form management
- Form submission handling

### 4. Card Component
- Reusable wrapper with children prop
- Title and content slots

### 5. Accordion Component
- Lifted state pattern
- Multiple panels with toggle functionality
- Only one panel open at a time

### 6. Todo List Application
- Add new todos
- Mark todos as complete/incomplete
- Delete todos
- Task completion counter
- Persistent state management
- Empty state handling

## 📦 Build and Deploy

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🌐 Deploy to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite configuration
6. Click "Deploy"

### Vercel Configuration

The project is pre-configured for Vercel deployment. No additional configuration needed!

Vercel will automatically:
- Detect Vite as the framework
- Run `npm run build`
- Serve the `dist` folder

## 🛠️ Technologies Used

- **React 18.3** - UI library
- **Vite 5.4** - Build tool and dev server
- **PropTypes** - Runtime type checking
- **CSS3** - Styling

## 📚 Key Concepts Demonstrated

1. **Declarative UI**: React's component-based approach
2. **Component Composition**: Building complex UIs from simple components
3. **Unidirectional Data Flow**: Props down, events up
4. **State Management**: Local component state with useState
5. **Controlled Components**: Form inputs controlled by React state
6. **Lifting State Up**: Sharing state between components
7. **Props Validation**: Type-checking with PropTypes

## 🎓 Learning Outcomes

After completing this lab, you will understand:
- How to create functional components
- How to use JSX effectively
- How to manage component state
- How to handle user interactions
- How to compose components
- How to lift state up for shared data
- How to build a complete React application

## 🐛 Debugging

The application is configured to work with React Developer Tools:
- Install the browser extension
- Open DevTools > Components tab
- Inspect component hierarchy and state
- Enable "Highlight updates when components render"

## 📝 Notes

- All exercises from Lab 3 are implemented
- Components use modern React hooks (functional components)
- PropTypes validation is included for type safety
- CSS styling follows the lab requirements
- Code is production-ready and follows best practices

## 👨‍💻 Author

Lab exercises by MSc. Tran Vinh Khiem
Implementation for educational purposes

## 📄 License

This project is for educational purposes as part of Lab 3 coursework.

---

**Happy Coding! 🚀**
