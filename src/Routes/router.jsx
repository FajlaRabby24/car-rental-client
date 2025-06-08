import { createBrowserRouter } from "react-router";
import Loading from "../components/Loading";
import MainLayout from "../layout/MainLayout";
import AddCars from "../pages/AddCars";
import AvailableCarsPage from "../pages/AvailableCarsPage";
import CarDetailsPage from "../pages/CarDetailsPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MyBookingPage from "../pages/MyBookingPage";
import MyCarPage from "../pages/MyCarPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRouter";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePage,
        hydrateFallbackElement: <Loading />,
      },
      {
        path: "available-cars",
        hydrateFallbackElement: <Loading />,
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
        path: "my-bookings",
        element: (
          <PrivateRoute>
            <MyBookingPage />
          </PrivateRoute>
        ),
      },
      {
        path: "car/:id",
        hydrateFallbackElement: <Loading />,
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
