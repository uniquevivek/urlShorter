# 🔗 URL Shortener (MERN Stack)

## 📌 Project Overview

This is a full-stack URL Shortener application built using the MERN
stack (MongoDB, Express, React with Vite, Node.js). The application
allows users to convert long URLs into short, manageable links and
redirect seamlessly.

------------------------------------------------------------------------

## 🚀 Features

-   Shorten long URLs
-   Redirect to original URLs
-   Click tracking
-   REST API integration
-   MongoDB Atlas cloud storage
-   Fast frontend using Vite

------------------------------------------------------------------------

## 🧱 Tech Stack

### Frontend

-   React (Vite)
-   Axios
-   CSS / Tailwind (optional)

### Backend

-   Node.js
-   Express.js
-   MongoDB Atlas
-   Mongoose
-   ShortID

------------------------------------------------------------------------

## 📁 Folder Structure

url-shortener/ 
├── client/ 
│ ├── src/ 
│ │ ├── api/ 
│ │ ├── components/ 
│ │ ├── pages/ 
│ │ ├── App.jsx 
│ │ └── main.jsx 
│ └── .env 
│ ├── server/ 
│ ├── config/ 
│ ├── controllers/ 
│ ├── models/ 
│ ├── routes/ 
│ ├── utils/
│ ├── server.js 
│ └── .env 
│ └── README.md

------------------------------------------------------------------------

## ⚙️ Installation Guide

### Backend Setup

1.  Navigate to server folder: cd server
2.  Install dependencies: npm install
3.  Create .env file: PORT=5000 MONGO_URI=your_mongodb_uri
    BASE_URL=http://localhost:5000
4.  Run server: npm run dev

### Frontend Setup

1.  Navigate to client folder: cd client
2.  Install dependencies: npm install
3.  Create .env file: VITE_API_URL=http://localhost:5000/api
4.  Run frontend: npm run dev

------------------------------------------------------------------------

## 🔗 API Endpoints

POST /api/shorten\
Creates a short URL

GET /:code\
Redirects to original URL

------------------------------------------------------------------------

## 🔐 Environment Variables

Backend: PORT=5000\
MONGO_URI=your_mongodb_uri\
BASE_URL=http://localhost:5000

Frontend: VITE_API_URL=http://localhost:5000/api

------------------------------------------------------------------------

## 🧪 Testing

-   Use Postman to test API
-   Use browser to test redirect

------------------------------------------------------------------------

## 🌐 Deployment

Frontend: Vercel / Netlify\
Backend: Render / Railway\
Database: MongoDB Atlas

------------------------------------------------------------------------

## 🚀 Future Enhancements

-   Authentication (JWT)
-   Dashboard
-   Analytics
-   Custom URLs
-   Expiry links

------------------------------------------------------------------------

## 👨‍💻 Author

Vivek Kumar Sharma
