import { Navigate } from "react-router-dom";
import Login from "../views/auth/Login";
import Registration from "../views/auth/Registration";
import FullLayout from "../views/fullLayput/FullLayout";
import Home from "../views/home/Home";

const Router = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/registration",
        element: <Registration />,
      },
      {
        path: "*",
        element: <Navigate to="/auth/404" />,
      },
    ],
  },
];

export default Router;
