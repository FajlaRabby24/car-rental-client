# 🚗 Car Rental System - Client

A **feature-rich, user-friendly Car Rental Platform** built using modern frontend technologies. Users can explore, add, book, and manage cars for rent with real-time updates and responsive design.

<img src="https://i.ibb.co/FkwJGqQq/Screenshot-2025-06-25-145132.png" align="center" style="width: 100%" />

## 🌐 Live Site

🔗 [View Live Project](https://car-rental-b7869.web.app)

---

## 🎯 Project Purpose

This project is part of an assignment to evaluate the ability to create a full-featured **Car Rental Web Application** using **React**, focusing on:

- Real-world CRUD operations
- JWT/Firebase authentication
- UI/UX best practices
- Filtering, searching, sorting
- Protected routing and state persistence

---

## ⚙️ Technologies Used

### ✅ Core Libraries & Tools

| Tech           | Purpose                            |
| -------------- | ---------------------------------- |
| React          | Frontend UI Framework              |
| React Router   | SPA Routing                        |
| Firebase Auth  | Authentication with Email/Google   |
| Tailwind CSS   | Utility-first CSS Framework        |
| DaisyUI        | Prebuilt Tailwind UI components    |
| Axios          | HTTP requests to the backend API   |
| React Toastify | Toast Notifications                |
| SweetAlert2    | Confirmation Modals                |
| React Icons    | Icon Library                       |
| Date-fns       | Date Formatting & Parsing          |
| Swiper         | Carousel/Slider for cars & banners |
| React Spinners | Loading Indicators                 |
| React Modal    | Custom modal windows               |

---

## ✨ Key Features

### 🔐 Authentication

- Email/Password login
- Google social login
- Firebase-based authentication with route protection

### 🚘 Car Features

- Add, update, and delete cars (for authenticated users)
- Real-time display of availability and booking count
- Upload car details with image, location, and price

### 📅 Booking System

- Users can book cars
- See a list of their bookings
- Modify or cancel bookings
- Charts based on pricing (using Recharts – optional)

### 🔍 Search, Filter & Sort

- Filter cars by price, availability, and date
- Search cars by name or location
- Toggle between grid and list view

### 📱 Responsive Design

- Mobile-first design
- Tailored layouts for mobile, tablet, and desktop

### 🧠 State & Routing

- Private routes with session persistence
- Navigation menu adjusts based on login status

---

## 📁 Folder Structure (Client Side)

├── assets/ # Images & static files
├── components/ # Reusable UI components
├── context/ # AuthProvider and context APIs
├── hooks/ # Custom hooks (e.g. useAuth, useAxios)
├── layouts/ # Main layout components
├── pages/ # Page components (Home, AddCar, MyCars, etc.)
├── routes/ # PrivateRoute, Router setup
├── styles/ # Tailwind config and global styles
└── main.jsx # App entry point
