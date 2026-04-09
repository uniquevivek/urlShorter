# 🔗 URL Shortener (MERN Stack)

A full-stack URL Shortener application built using the MERN stack (MongoDB, Express, React, Node.js).
Users can convert long URLs into short links and get redirected seamlessly.

---

## 🚀 Features

* 🔗 Shorten long URLs
* 🔁 Redirect to original URL
* 📊 Track number of clicks
* ⚡ Fast and responsive UI (React + Vite)
* 🌐 REST API with Express
* ☁️ MongoDB Atlas cloud database

---

## 🧱 Tech Stack

### Frontend

* React (Vite)
* Axios
* CSS / (Optional: Tailwind CSS)

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* ShortID

---

## 📁 Project Structure

```
url-shortener/
│
├── client/                # React Frontend (Vite)
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── .env
│
├── server/                # Node Backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── .env
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/uniquevivek/urlShorter.git
cd urlShorter
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
BASE_URL=http://localhost:5000
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend (Vite)

```bash
cd client
npm install
npm run dev
```

Create `.env` file:

```
VITE_API_URL=http://localhost:5000/api
```

---

## 🔗 API Endpoints

### 📌 Shorten URL

```
POST /api/shorten
```

**Request Body:**

```json
{
  "originalUrl": "https://example.com"
}
```

**Response:**

```json
{
  "shortUrl": "http://localhost:5000/abc123"
}
```

---

### 📌 Redirect URL

```
GET /:code
```

👉 Redirects to original URL

---

## 🧪 Testing

Use Postman or browser:

* Create short URL → POST `/api/shorten`
* Open short URL → redirects

---

## 🌐 Deployment

### Frontend:

* Vercel / Netlify

### Backend:

* Render / Railway / Cyclic

### Database:

* MongoDB Atlas

---

## 🔐 Environment Variables

### Backend `.env`

```
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
BASE_URL=http://localhost:5000
```

### Frontend `.env`

```
VITE_API_URL=http://localhost:5000/api
```

---

## 🚀 Future Improvements

* 🔐 User Authentication (JWT)
* 📊 Analytics Dashboard
* 📝 Custom Short URLs
* ⏳ URL Expiry Feature
* 📋 Copy to Clipboard Button
* 📱 Mobile Responsive UI

---

## 🧠 Learnings

* REST API design with Express
* MongoDB Atlas integration
* React + Vite frontend setup
* Full-stack project structuring
* Handling redirects and routing

---

## 👨‍💻 Author

**Vivek Kumar Sharma**

* Full‑Stack Developer — MERN • Django • REST APIs

---

## ⭐ Show Your Support

If you like this project:

⭐ Star the repo
🍴 Fork it
📢 Share it

---

## 📬 Contact

* LinkedIn: https://www.linkedin.com/in/vivek-vsharma/
* Email: v.k.26012004@gmail.com
* Insta: @uniqueviveksharma


---

## 📌 License

This project is open-source and free to use.
