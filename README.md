# 🚀 Blog Project

This **blog site** is a **dynamic application** designed for **sharing and exploring content**, developed using `TypeScript`, `Node.js`, `Express.js`, and `MongoDB` with `Mongoose`. It includes **user roles** (`Admin` and `User`), **secure login**, and a **public API** with options for **search**, **sorting**, and **filtering**.

### 🌐 Live Deployment & 🎥 Explanation Video Link

- **Live Site**: [Visit the Deployment](https://blogs-wheat-six.vercel.app)
- **Video Explanation**: [Watch the Video](https://your-video-link.com)

## 🔑 Key Features

- **User Roles**:

  - `Admin`: Can delete any blog and block specific users.
  - `User`: Can create, update, and delete only their own blogs.

- **Authentication & Authorization**:

  - Secure login using **Bearer Token** for accessing protected routes and performing actions based on roles.

- **Blog Management**:

  - Users can efficiently manage their own blogs (create, update, delete).
  - Admins have the authority to manage blogs globally.

- **User Management**:

  - Admin can block users to restrict their access.
  - Users maintain access to their blogs as long as they are not blocked.

- **Search, Filter & Sort**:
  - Search blogs by `title` and `content`.
  - Filter blogs by `author ID`.
  - Sort blogs based on specific criteria for better data organization.

## 🛠️ Installation and Setup

To get started with the project locally, follow these steps:

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Emam-Bokhari/Blog-Server
```

### 2. Navigate to the Project Folder

Go to the project directory:

```bash
cd Blog-Server
```

### 3. Install Dependencies

Install the required dependencies using npm or yarn:

```bash
npm install
# or
yarn install
```

### 4. Setup Environment Variables

Create a `.env` file in the root of the project and add the following environment variables:

```bash
NODE_ENV=development
PORT=3000
DATABASE_URL=mongodb+srv://blog:ESdHhAZ5qz9jep06@cluster0.kndeci6.mongodb.net/blog-DB?retryWrites=true&w=majority&appName=Cluster0
BCRYPT_SALT_ROUNDS=12
ACCESS_TOKEN_SECRET=519c5d4a4bcca5ae7ad5e9879d1da60579b991d9c553a128db0e19f97c4853eb7b16295ddce66bf0b45d29e73d81c8bedf381dda5122997e18eeb04f1d0e11c8
ACCESS_TOKEN_EXPIRES_IN=30d
```

### 5. Admin Login Credentials

To access the admin panel, use the following credentials:

- **Email:** `admin@gmail.com`
- **Password:** `admin123`

### 6. Run the Application

Start the development server:

```bash
npm run start:dev
```

Your application should now be running at `http://localhost:3000`.

### 7. Access the Application

- Visit the site in your browser at `http://localhost:3000`.
- You can now use the application to create, update, delete, and manage blogs based on the user roles.

### 8. Additional Notes

- To access protected routes, use Bearer Tokens for authentication.

## ⚙️ Technologies Used

This project is built using technologies that ensure smooth performance and easy development:

### Backend

- **Node.js**: Runtime environment for executing JavaScript server-side.
- **Express.js**: Web framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **TypeScript**: Typed superset of JavaScript for maintaining type safety.

### Authentication & Authorization

- **JWT (JSON Web Tokens)**: Secure authentication and user verification.
- **Bearer Token**: A method of transmitting the JWT in the `Authorization` header to protect routes and ensure only authorized access to APIs.

### Validation

- **Zod**: Schema-based data validation.

### Testing & Development Tools

- **Postman**: API testing and debugging.
- **Nodemon**: Auto-restarting for development.
- **ESLint**: Code linting to enforce consistent coding standards.
- **Prettier**: Code formatter to maintain clean and readable code.

### Deployment

- **Vercel**: For seamless deployment and hosting.
- **dotenv**: Environment variable management.

### Other Tools

- **bcryptjs**: For hashing passwords securely.
- **CORS**: Middleware to enable cross-origin resource sharing.

These technologies work together to create a secure, scalable, and user-friendly blogging platform.

## 📁 Folder Structure

Below is the folder structure for the project:

```bash
├── dist/                                             # Compiled Code
│   ├── app/
│   ├── app.js
│   └── server.js
├── node_modules/                                     # Project dependencies
├── src/                                              # Source code
│   ├── app/                                          # Main application logic
│   │   ├── builder/
│   │   ├── config/                                   # Configuration files (e.g., database, JWT, etc.)
│   │   ├── errors/                                   # Custom error handling classes and utilities
│   │   ├── interface/                                # TypeScript interfaces and types
│   │   ├── middleware/                               # Express middleware functions
│   │   ├── modules/                                  # Feature-specific modules
│   │   │   ├── blog/                                 # Blog-related logic and components
│   │   │   └── user/                                 # User-related logic and components
│   │   ├── routes/                                   # Express routes (API endpoints)
│   │   ├── utils/
│   ├── app.ts                                        # Application entry point
│   └── server.ts                                     # Main server file
├── .env                                              # Environment variables
├── .gitignore                                        # Specifies which files should not be tracked by Git
├── .prettierignore                                   # Prettier configuration to ignore specific files
├── .prettierrc                                       # Prettier configuration file
├── .eslint.config.mjs                                # ESLint configuration file
└── etc                                               # Other files (e.g., documentation, package-lock.json etc.)
```
