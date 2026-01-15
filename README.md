# Node.js CRUD Backend

A robust REST API built with Node.js, Express, and Prisma, featuring user management with validation and error handling.

## 🚀 Technologies

- **Node.js** & **Express**: Web server framework.
- **Prisma**: ORM for PostgreSQL.
- **Zod**: Schema validation.
- **Bcrypt**: Password hashing.
- **PostgreSQL**: Database.

## 🛠️ Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL database
- npm

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd Crud-node-backend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Configuration:**
    Create a `.env` file in the root directory:
    ```env
    PORT=3005
    DATABASE_URL="postgresql://user:password@localhost:5432/your_db_name?schema=public"
    ```

4.  **Database Setup:**
    Sync the Prisma schema with your database:
    ```bash
    npx prisma generate
    npx prisma db push
    ```

## 🏃‍♂️ Usage

**Start the development server:**
```bash
npm run dev
```
The server will start at `http://localhost:3005`.

## 🔌 API Endpoints

### Users (`/api/users`)

| Method | Endpoint | Description | Body Example |
| :--- | :--- | :--- | :--- |
| **GET** | `/` | List all users | N/A |
| **POST** | `/` | Create a user | `{ "email": "user@example.com", "password": "password123", "name": "John" }` |
| **GET** | `/:id` | Get user by ID | N/A |
| **PUT/PATCH** | `/:id` | Update user | `{ "email": "new@example.com" }` |
| **DELETE** | `/:id` | Delete user | N/A |

### Root
- **GET** `/`: check API status and welcome message.

## 📁 Project Structure

```
src/
├── config/         # Database and env config
├── middlewares/    # Error handling and validation
├── modules/
│   └── users/      # User controller, routes, service, validation
├── prisma/         # Prisma schema
└── database.js     # Prisma client instance
```
