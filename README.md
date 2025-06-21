# 🩸 DonorXpress – Blood Donor Finder

A small-scale MERN stack project to register blood donors, filter by blood group, and mark availability.

---

## 📁 Project Structure

DonorXpress/
├── DonorXpress-frontend/ # Vite + React app
├── DonorXpress-backend/ # Express + MongoDB API

---

## ⚙️ Backend Setup (`DonorXpress-backend`)

1. **Install dependencies**
    ```bash
    cd DonorXpress-backend
    npm install
    ```
2. **Create .env file**
   MONGO_URI=mongodb://localhost:27017/donors

3. **Start the server**
    ```bash
    node server.js
    ```

## 💻 Frontend Setup (DonorXpress-frontend)

1. **Install dependencies**

```bash
cd DonorXpress-frontend
npm install
```

2. **Start the React app**

```bash
npm run dev
```

🚀 Features
✅ Register blood donors (name, blood group, location, availability)

🔍 Filter donors by blood group

🔄 Toggle donor availability

⚡ Fast and lightweight (Vite, Express)

📦 API Endpoints
Add a new donor:
POST /api/donors
Filter donors by blood group:
GET /api/donors?group=A+
Update availability status:
PATCH /api/donors/:id

owner :
Sudheesh 
varadaraj
yajnesh
Sohan
