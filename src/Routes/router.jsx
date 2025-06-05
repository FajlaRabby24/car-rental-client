import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import AvailableCarsPage from "../pages/AvailableCarsPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRouter";
import AddCars from "../pages/AddCars";
import MyCarPage from "../pages/MyCarPage";
import CarDetailsPage from "../pages/CarDetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: "available-cars",
        loader: () =>
          fetch(`${import.meta.env.VITE_root_api_url}/available-cars`),
        Component: AvailableCarsPage,
      },
      {
        path: "add-cars",
        element: (
          <PrivateRoute>
            <AddCars />
          </PrivateRoute>
        ),
      },
      {
        path: "my-cars",
        element: (
          <PrivateRoute>
            <MyCarPage />
          </PrivateRoute>
        ),
      },
      {
        path: "car/:id",
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_root_api_url}/car/${params.id}`),
        element: (
          <PrivateRoute>
            <CarDetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        Component: LoginPage,
      },
      {
        path: "register",
        Component: RegisterPage,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
