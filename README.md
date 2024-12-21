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

### 5. Run the Application

Start the development server:

```bash
npm run start:dev
```

Your application should now be running at `http://localhost:3000`.

### 6. Access the Application

- Visit the site in your browser at `http://localhost:3000`.
- You can now use the application to create, update, delete, and manage blogs based on the user roles.

### 7. Additional Notes

- To access protected routes, use Bearer Tokens for authentication.
