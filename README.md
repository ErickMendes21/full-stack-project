# 🔐 Authentication System

Full-stack authentication project with separate frontend and backend, developed using React + TypeScript on the frontend and Node.js with Fastify on the backend.

Currently, the project includes both **login** and **registration screens**, but new features will be implemented in the future.

## 🚀 Technologies Used

### Frontend
- React + TypeScript
- Responsiveness with Responsively

### Backend
- Node.js
- Fastify
- Nodemon
- JWT (JSON Web Token)
- Bcrypt
- CORS

### Database & Deployment
- PostgreSQL
- NeonDB
- Render (Backend hosting)

---

## 📂 Project Structure

```txt
music-player/
│
├── frontend/    # React + TypeScript application
│
└── backend/     # API with Fastify + PostgreSQL
```

---

## ⚙️ How to Run the Project

### 1. Clone the repository

```bash
git clone <repository-url>
```

Go to the project folder:

```bash
cd music-player
```

---

### 2. Create a NeonDB Database

Before running the project, you must create a PostgreSQL database in NeonDB.

1. Create an account on NeonDB  
2. Create a new PostgreSQL project/database  
3. Copy your database connection string

Example:

```env
DATABASE_URL=postgresql://username:password@host/database?sslmode=require
```

Add the connection string to a `.env` file inside the backend folder.

Example:

```env
DATABASE_URL=your_neondb_connection_string
JWT_SECRET=your_secret_key
```

---

## 💻 Running the Frontend

Go to the frontend folder:

```bash
cd frontend
```

Install the dependencies:

```bash
npm install
```

Run the project:

```bash
npm run dev
```

The frontend will start locally.

---

## 🌐 Backend

The backend is hosted on Render and is consumed by the frontend.

### Backend Technologies

- Node.js
- Fastify
- JWT for authentication
- Bcrypt for password hashing
- PostgreSQL with NeonDB

---

## 🔒 Current Features

- Login screen
- Registration screen
- Frontend ↔ backend integration
- JWT-based authentication
- Password hashing with Bcrypt

---

## 👨‍💻 Author

**Erick Mendes Rocha**  
Computer Engineering Student passionate about software development, algorithms, and technology.

---

## 📄 License

This project is being developed for study and portfolio purposes.

---

⭐ If you find this repository useful, feel free to star it!
