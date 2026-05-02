# 📝 Task Management App

[![MIT License](https://img.shields.io/github/license/404notDeeksha/Task-Management-App?style=flat-square)](https://github.com/404notDeeksha/Task-Management-App/blob/main/LICENSE)

Welcome to the **Task Management App** — a sleek and responsive task management interface built using **React + Vite**, styled with **TailwindCSS**, and powered by a secure **authenticated Node.js/Express backend**.

<br />

## 🔗 Live Demo

| Frontend | Backend |
|----------|---------|
| [https://plan-live-techwithdeekksha.vercel.app](https://plan-live-techwithdeekksha.vercel.app) | [https://plan-dep-techwithdeekksha.vercel.app](https://plan-dep-techwithdeekksha.vercel.app) |

## 🎬 Quick Demo

[![Task Manager Demo](./screenshots/demo.gif)](https://www.youtube.com/watch?v=nOcQAmmzf9o)

## 📂 Backend Repository

[![Task-Management-App-Backend](https://img.shields.io/badge/Task--Management--App--Backend-808080?style=for-the-badge&logo=github&logoColor=white)](https://github.com/404notDeeksha/Task-Management-App-Backend)

<br />

## 🚀 Tech Stack

| Frontend | Backend & Deployment |
|----------|---------------------|
| ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) React 18 | ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node-dot-js&logoColor=white) Node.js |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=FFD62E) Vite 6 | ![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white) Express |
| ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) TailwindCSS 4 | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white) Vercel |
| ![Redux](https://img.shields.io/badge/Redux_Toolkit-593D88?style=flat&logo=redux&logoColor=white) Redux Toolkit | |

<br />

## ✨ Features

### 🔐 Authentication
- User registration and login
- JWT-based secure authentication
- Protected routes with automatic redirect
- Session persistence via Redux Persist

### 📝 Task Management
- Create, edit, and delete tasks
- Set task priority (High, Medium, Low)
- Due date assignment with date picker
- Mark tasks as complete/incomplete

### 📂 Task Views
- **Inbox** — All tasks
- **Today** — Tasks due today
- **Pending** — Upcoming tasks
- **Priority** — Tasks sorted by priority

### 🔍 Search & Sort
- Real-time task search
- Sort by date, priority, or progress
- Filter tasks by status

### 🎨 UI/UX
- Fully responsive design
- Loading states with spinners
- Error boundaries for graceful failures
- Modal-based task creation/editing
- Toast notifications (via form validation)

### 🧪 Testing
- Unit tests with Vitest
- Component testing with React Testing Library

<br />

## 📸 Screenshots

| Login | Signup |
|-------|--------|
| ![Login](screenshots/login.png) | ![Signup](screenshots/signup.png) |

| Inbox | New Task |
|-------|----------|
| ![Inbox](screenshots/inbox.png) | ![New Task](screenshots/newtaskportal.png) |

| Priority | Today |
|----------|-------|
| ![Priority](screenshots/priority.png) | ![Today](screenshots/today.png) |

<br />

## 🏗️ Project Structure

```
src/
├── api/               # API integration (axios, auth, tasks)
├── components/        # Reusable UI components
│   ├── ErrorBoundary.jsx
│   ├── Modal.jsx
│   ├── NewTask.jsx
│   ├── Portal.js
│   ├── ProtectedRoute.jsx
│   ├── SideNavbar.jsx
│   ├── TaskForm.jsx
│   ├── TaskList.jsx
│   └── TaskSorter.jsx
├── pages/             # Route pages (Login, Signup, Inbox, etc.)
├── redux/             # Redux state management
│   └── slices/        # Auth, tasks, loading, search, modal slices
├── routes/            # React Router configuration
└── utils/             # Helper functions and utilities
```

<br />

## 🧪 Installation

```bash
# 1. Clone the repository
git clone https://github.com/404notDeeksha/Task-Management-App
cd Task-Management-App

# 2. Install dependencies
npm install

# 3. Set up environment variables
# Create .env file and add:
VITE_API_URL=your_backend_api_url

# 4. Start development server
npm run dev

# 5. Run tests (optional)
npm test
```

> ⚠️ **Note:** Ensure your backend server is running before starting the frontend.

<br />

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm test` | Run tests with watch mode |
| `npm run test:run` | Run tests once |
| `npm run test:coverage` | Run tests with coverage |

<br />

## 🎓 What I Learned

- **State Management** — Redux Toolkit with slices, async thunks, and persistence
- **Authentication** — JWT-based auth with protected routes
- **API Integration** — Axios with interceptors for requests/responses
- **Form Handling** — React Hook Form for validation
- **Error Handling** — React Error Boundary for graceful fallbacks
- **Testing** — Vitest + React Testing Library
- **Routing** — React Router v7 with nested routes
- **Deployment** — Full-stack deployment on Vercel

<br />

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](/LICENSE.md) file for details.

<br />

## 👋 Connect With Me

[![Email](https://img.shields.io/badge/Email-deeksha.developer@proton.me-lightgrey?style=flat&logo=protonmail)](mailto:deeksha.developer@proton.me)
[![GitHub](https://img.shields.io/badge/GitHub-404notDeeksha-lightgrey?style=flat&logo=github)](https://github.com/404notDeeksha)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-deek1995-lightgrey?style=flat&logo=linkedin)](https://www.linkedin.com/in/deek1995)