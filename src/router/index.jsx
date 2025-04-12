import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import Home from "../pages/Home/Home";
import Plan from "../pages/Plan/Plan";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: "/plan",
    children: [
      {
        index: true,
        element: <Plan />
      }
    ]
  }
]);