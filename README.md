# User Management Application (Spring Boot + React Native)

## Project Overview
[cite_start]This is a full-stack User Management application developed as part of an assignment[cite: 2]. It consists of a **Spring Boot backend** for RESTful API services and a **React Native frontend** (using Expo) for the mobile user interface.

[cite_start]The application allows users to register, view a list of users, and delete users, demonstrating full interaction between a mobile app and a backend server[cite: 8, 28].

## [cite_start]Technology Stack [cite: 3]
* **Backend:** Java, Spring Boot, Hibernate/JPA, MySQL
* **Frontend:** React Native (Expo), TypeScript/JavaScript, Axios
* **Database:** MySQL (or H2)
* **Tools:** Postman (for API testing), Expo Go (for mobile testing)

---

## Features

### [cite_start]Backend (Spring Boot) [cite: 14, 38]
* **Add User:** `POST /api/users` - Saves a new user to the database.
* **Get All Users:** `GET /api/users` - Fetches the list of all registered users.
* **Delete User:** `DELETE /api/users/{id}` - Removes a user by ID.
* **Login:** `POST /api/users/login` - Basic authentication by verifying email existence.

### [cite_start]Frontend (React Native) [cite: 29]
* [cite_start]**Add User Screen:** A form to input Name and Email with validation and API integration[cite: 31].
* [cite_start]**User List Screen:** Displays all users in a scrollable list (`FlatList`)[cite: 37].
* [cite_start]**Delete Functionality:** Users can be deleted directly from the list with a confirmation alert[cite: 38].
* **Navigation:** Tab-based navigation using Expo Router.

---

## Setup Instructions

### 1. Backend Setup
1.  Navigate to the `backend` folder.
2.  Update `application.properties` with your database credentials.
3.  Run the application using your IDE or:
    ```bash
    ./mvnw spring-boot:run
    ```
4.  The server will start on `http://localhost:8080`.

### 2. Frontend Setup
1.  Navigate to the `frontend` (or `UserManagementApp`) folder.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  **Important:** Open `src/screens/UserListScreen.tsx` and `AddUserScreen.tsx` and update the `API_URL` to your machine's local IP address (e.g., `192.168.1.X`).
4.  Start the Expo server:
    ```bash
    npx expo start
    ```
5.  Scan the QR code with the **Expo Go** app on your mobile device.

---

## API Documentation

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/users` | Creates a new user. Body: `{ "name": "...", "email": "..." }` |
| `GET` | `/api/users` | Returns a list of all users. |
| `DELETE` | `/api/users/{id}` | Deletes the user with the specified ID. |
| `POST` | `/api/users/login` | Checks if a user email exists. |

---

## [cite_start]Project Structure [cite: 24, 40]
The project follows standard architectural patterns:
* **Backend:** Controller -> Service -> Repository layers.
* **Frontend:** Functional components with Hooks (`useState`, `useEffect`).
