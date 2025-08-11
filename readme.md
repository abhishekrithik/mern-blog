# MERN Blog Website

A fully functional **MERN Stack Blog Website** built with **MongoDB, Express.js, React (Vite), and Node.js**.  
This application allows users to create, read, update, and delete blog posts with authentication, image uploads, and a user-friendly dashboard.

---

## 🚀 Live Demo

---

## 📌 Features

- **User Authentication**

  - Sign Up, Sign In, and Sign Out
  - JWT-based authentication
  - Role-based access (Admin/User)

- **Blog Management**

  - Create, edit, and delete posts
  - Rich text editor with image upload (Cloudinary)
  - Display posts with categories and timestamps

- **Comment System**

  - Add and delete comments
  - Comment count per post

- **User Dashboard**

  - View and manage personal posts
  - Update profile with image upload
  - Change username, email, or password

- **Responsive Design**

  - Mobile, tablet, and desktop friendly
  - Built with **Tailwind CSS** and **Flowbite**

- **Deployment Ready**
  - Frontend built with **Vite** for fast performance
  - Backend API with Express.js
  - Ready for deployment on **Render**

---

## 🛠 Tech Stack

### **Frontend**

- React (Vite)
- Tailwind CSS + Flowbite
- Redux Toolkit
- React Router DOM

### **Backend**

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Bcrypt Password Hashing

### **Others**

- Cloudinary for image uploads
- dotenv for environment variables

---

## 📂 Project Structure

```bash
project/
│
├── client/                # React (Vite) Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── api/                   # Backend API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
│
├── .env                   # Environment Variables
├── README.md
└── package.json
⚙️ Installation & Setup
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/abhishekrithik/mern-blog.git
cd mern-blog
2️⃣ Setup Backend
bash
Copy
Edit
cd api
npm install
Create a .env file in the api folder and add:

env
Copy
Edit
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_UPLOAD_PRESET=your_cloudinary_upload_preset
PORT=5000
Run the backend:

bash
Copy
Edit
npm start
3️⃣ Setup Frontend
bash
Copy
Edit
cd ../client
npm install
Create a .env file in the client folder and add:

env
Copy
Edit
VITE_API_URL=http://localhost:5000
VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_cloudinary_upload_preset
Run the frontend:

bash
Copy
Edit
npm run dev
🚀 Deployment on Render
Deploy backend as Web Service on Render.

Deploy frontend as Static Site on Render, and set the API URL to your backend Render URL.

Make sure to set environment variables in Render's dashboard.

📸 Screenshots
(Add screenshots of your homepage, dashboard, and post creation page here)

📬 Contact
Abhishek Gnanasekar
📧 abhishekgsts25@gmail.com
🔗 GitHub
🔗 LinkedIn

⭐ If you like this project, don't forget to star the repo on GitHub!
```
