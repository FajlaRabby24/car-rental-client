import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Routes/router";
import AuthProvider from "./store/Auth/AuthProvider";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer autoClose={2000} position="top-left" />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
