# User Management Application  
(Spring Boot + React Native)

---

## 🚀 Project Overview

The **User Management Application** is a full-stack project developed as part of an assignment to demonstrate seamless interaction between a **Spring Boot REST API** and a **React Native mobile application**.

The application allows users to:
- Register new users
- View a list of registered users
- Delete users

It showcases end-to-end communication between a backend server and a mobile frontend, following clean architecture and RESTful principles.

---

## 🛠 Technology Stack

### Backend
- Java
- Spring Boot
- Hibernate / JPA
- MySQL (or H2 for testing)

### Frontend
- React Native (Expo)
- TypeScript / JavaScript
- Axios (API communication)

### Tools
- Postman (API testing)
- Expo Go (Mobile app testing)

---

## ✨ Features

### Backend (Spring Boot)
- **Add User**  
  `POST /api/users` – Saves a new user to the database.

- **Get All Users**  
  `GET /api/users` – Fetches all registered users.

- **Delete User**  
  `DELETE /api/users/{id}` – Deletes a user by ID.
  
---

### Frontend (React Native)
- **Add User Screen**  
  Form to input Name and Email with validation and API integration.

- **User List Screen**  
  Displays all users in a scrollable list using `FlatList`.

- **Delete Functionality**  
  Users can be deleted directly from the list with a confirmation alert.

- **Navigation**  
  Tab-based navigation using Expo Router.

---

## ⚙️ Setup Instructions

### 1. Backend Setup

1. Navigate to the `backend` directory.
2. Update `application.properties` with your database credentials:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/your_db
   spring.datasource.username=root
   spring.datasource.password=your_password
   ```
3. Run the application:
   ```bash
   ./mvnw spring-boot:run
   ```
4. Backend will start at:
   ```
   http://localhost:8080
   ```

---

### 2. Frontend Setup

1. Navigate to the `frontend` (or `UserManagementApp`) directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Update the `API_URL` in:
   - `src/screens/UserListScreen.tsx`
   - `src/screens/AddUserScreen.tsx`

   Example:
   ```ts
   const API_URL = "http://192.168.1.X:8080/api/users";
   ```
4. Start the Expo server:
   ```bash
   npx expo start
   ```
5. Scan the QR code using the **Expo Go** app on your mobile device.

---

## 📡 API Documentation

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/api/users` | Create a new user |
| GET | `/api/users` | Fetch all users |
| DELETE | `/api/users/{id}` | Delete user by ID |

---

## 🧱 Project Structure

### Backend
```
controller/
service/
repository/
entity/
```

### Frontend
```
tabs/
components/
```

- Backend follows **Controller → Service → Repository** architecture.
- Frontend uses **functional components** with React Hooks (`useState`, `useEffect`).

---

## 👨‍💻 Author

**Devansh Prakash Dhopte**  
Email: devanshdhopte@gmail.com

---
