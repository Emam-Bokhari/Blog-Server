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
