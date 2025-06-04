import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import AvailableCarsPage from "../pages/AvailableCarsPage";

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
        Component: AvailableCarsPage,
      },
    ],
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
]);
