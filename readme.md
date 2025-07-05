````
# 📚 Library RESTful API

ระบบจัดการผู้ใช้และหนังสือด้วย Node.js + Express พร้อมระบบยืมหนังสือ

---

## 🚀 วิธีใช้งาน

### 1. ติดตั้งแพ็กเกจ
```bash
npm install
````

### **2. รันเซิร์ฟเวอร์**

```
node index.js
```

เซิร์ฟเวอร์จะทำงานที่:

> http://localhost:5001

---

## **📦 API Endpoints**

### **👤 Users**

| **Method** | **URI**                | **Description**                 |
| ---------- | ---------------------- | ------------------------------- |
| GET        | /users                 | ดูผู้ใช้ทั้งหมด                 |
| GET        | /users/:userId         | ดูข้อมูลผู้ใช้ตาม ID            |
| POST       | /users                 | เพิ่มผู้ใช้ใหม่                 |
| PATCH      | /users/:userId         | แก้ไขข้อมูลผู้ใช้               |
| DELETE     | /users/:userId         | ลบผู้ใช้                        |
| GET        | /users/:userId/borrows | ดูรายการหนังสือที่ผู้ใช้ยืม     |
| POST       | /users/:userId/borrows | ยืมหนังสือ (ส่ง bookId ใน body) |

---

### **📘 Books**

| **Method** | **URI**                | **Description**                               |
| ---------- | ---------------------- | --------------------------------------------- |
| GET        | /books                 | ดูหนังสือทั้งหมด                              |
| GET        | /books/:bookId         | ดูหนังสือตาม ID                               |
| POST       | /books                 | เพิ่มหนังสือใหม่                              |
| PATCH      | /books/:bookId         | แก้ไขข้อมูลหนังสือ                            |
| DELETE     | /books/:bookId         | ลบหนังสือ                                     |
| GET        | /books/:bookId/borrows | ดูประวัติว่าหนังสือเล่มนี้เคยถูกยืมโดยใครบ้าง |

---

## **📥 POST: ยืมหนังสือ**

### **Endpoint:**

```
POST /users/:userId/borrows
```

### **Request Body:**

```
{
  "bookId": 2
}
```

### **Response:**

```
{
  "message": "User borrowed book successfully",
  "userId": 1,
  "bookId": 2,
  "date": "2025-07-05"
}
```

---

## **📮 Postman Collection**

> 🔗
>
> [เปิดใน Postman](https://rust-rest-api.postman.co/workspace/Supachai-Share-Workspace~03181e18-588b-4480-ba9d-8d8502b6cf6e/collection/30438740-6ccb16b9-4619-4a62-9ac0-ce91a68e8b07?action=share&source=copy-link&creator=30438740)

---

## **🛠 Tech Stack**

- Node.js
- Express.js
- Body-Parser
- CORS

---

## **📌 หมายเหตุ**

- ไม่มีฐานข้อมูล ข้อมูลทั้งหมดอยู่ในหน่วยความจำ (mockup)
- ใช้สำหรับการทดลองและฝึกเขียน REST API เท่านั้น
