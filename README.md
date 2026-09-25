# React + TypeScript + Vite + Java Sprint Boot + MySQL
# Employee Management App 🧑‍💻

A full-stack demo project built to practice integrating a **React** frontend with a **Spring Boot** backend and a **MySQL** database — a simple CRUD app for managing employees.

This is a personal/pet project, not intended for production use. The goal is to demonstrate a complete full-stack workflow: REST API design, database persistence, and a connected frontend consuming the API.

---

## 🛠 Tech Stack

**Frontend**
- React
- Tailwind CSS
- Axios / Fetch (API calls)

**Backend**
- Java 25+
- Spring Boot
- Spring Data JPA
- Spring Web (REST Controllers)

**Database**
- MySQL

---

## ✨ Features

- View a list of employees (ID, first name, last name, email)
- Add a new employee
- Edit an existing employee
- Delete an employee
- REST API consumed by the React frontend
- Data persisted in MySQL via JPA/Hibernate

---

## 📁 Project Structure

```
employee-management-app/
├── backend/                # Spring Boot application
│   ├── src/main/java/...   # Controllers, Services, Repositories, Entities
│   ├── src/main/resources/
│   │   └── application.properties
│   └── pom.xml
│
├── frontend/                # React application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.jsx
│   └── package.json
│
└── README.md
```

---

## ✅ Prerequisites

Make sure you have installed:

- [Java JDK 17+](https://www.oracle.com/java/technologies/downloads/)
- [Node.js](https://nodejs.org/) (v18+ recommended) and npm
- [MySQL](https://dev.mysql.com/downloads/) (v8+ recommended)
- Maven (or use the included `mvnw` wrapper)

---

## 🗄️ Database Setup

1. Start your MySQL server.
2. Create the database:

```sql
CREATE DATABASE employee_management;
```

3. Update the backend's `src/main/resources/application.properties` with your MySQL credentials:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/employee_management
spring.datasource.username=root
spring.datasource.password=your_password

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect
```

> With `ddl-auto=update`, Hibernate will automatically create/update the `employee` table on startup.

---

## 🚀 Running the Backend (Spring Boot)

```bash
cd backend

# Using Maven wrapper
./mvnw spring-boot:run

# Or with a global Maven install
mvn spring-boot:run
```

By default, the API will run on:

```
http://localhost:8080
```

### Sample REST Endpoints

| Method | Endpoint                  | Description            |
|--------|----------------------------|-------------------------|
| GET    | `/api/employees`          | Get all employees      |
| GET    | `/api/employees/{id}`     | Get employee by ID     |
| POST   | `/api/employees`          | Create a new employee  |
| PUT    | `/api/employees/{id}`     | Update an employee     |
| DELETE | `/api/employees/{id}`     | Delete an employee     |

---

## 💻 Running the Frontend (React)

```bash
cd frontend
npm install
npm start
```

By default, the app will run on:

```
http://localhost:3000
```

Make sure the frontend's API base URL points to your backend, e.g. in a `.env` file:

```
REACT_APP_API_URL=http://localhost:8080/api
```

---

## 🧪 Example Employee JSON

```json
{
  "id": 1,
  "firstName": "Houston",
  "lastName": "Salgado",
  "email": "houston@test.com"
}
```

---

## 📌 Notes

- This project was built as a learning exercise to connect the full stack: React ↔ Spring Boot ↔ MySQL.
- Feel free to fork and extend it — some ideas: authentication, pagination, search/filter, form validation, Docker Compose setup.

---

## 📄 License

This project is for educational/demo purposes and is free to use and modify.