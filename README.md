# 📚 Multilingual FAQ API (Node.js + Express + Redis + MongoDB)

🚀 A fast and efficient REST API for managing FAQs with **multilingual support**, **Redis caching**, and **Google Translate integration**.

## ✨ Features

👉 **REST API** for FAQs  
👉 **Multilingual support** (`?lang=hi`, `?lang=bn`)  
👉 **WYSIWYG editor** (Rich text support)  
👉 **Redis caching** for faster responses  
👉 **Google Translate API** for auto-translations  
👉 **Dockerized setup** for easy deployment

---

## 🛠️ Installation & Setup

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/Beast-Hunter/FAQ-Backend.git
cd faqs-app
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Set Up Environment Variables**

Create a `.env` file in the root directory:

```ini
PORT=3000
MONGO_URI=mongodb://localhost:27017/faqs
REDIS_HOST=localhost
REDIS_PORT=6379
GOOGLE_TRANSLATE_API_KEY=your_api_key_here
DEFAULT_LANGUAGE=en
```

### **4️⃣ Start the Application**

```sh
npm start
```

---

## 🔥 API Endpoints

### **1️⃣ Fetch FAQs**

Fetch FAQs in **default language (English)**

```sh
GET /api/faqs
```

Fetch FAQs in **Hindi**

```sh
GET /api/faqs?lang=hi
```

Fetch FAQs in **Bengali**

```sh
GET /api/faqs?lang=bn
```

📍 **Example Response**

```json
[
  {
    "question": "What is this API?",
    "answer": "This API provides multilingual FAQs."
  }
]
```

---

## 🚀 Docker Setup

### **1️⃣ Build & Run Using Docker Compose**

```sh
docker-compose up -d
```

### **2️⃣ Verify Running Containers**

```sh
docker ps
```

### **3️⃣ Stop Containers**

```sh
docker-compose down
```

---

## 🧪 Testing

### **Run Unit Tests**

```sh
npm test
```

### **Example Test (`tests/faqTest.js`)**

```js
const request = require("supertest");
const app = require("");

describe("GET /api/faqs", () => {
  it("should return FAQs in default language", async () => {
    const res = await request(app).get("/api/faqs");
    expect(res.statusCode).toBe(200);
  });
});
```
