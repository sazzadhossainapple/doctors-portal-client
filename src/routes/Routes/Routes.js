import Appoinment from "../../pages/Appoinment/Appoinment/Appoinment";
import Dashboard from "../../pages/Dashboard/Dashboard/Dashboard";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const { createBrowserRouter } = require("react-router-dom");
const { default: Mian } = require("../../layout/Mian");
const { default: Home } = require("../../pages/Home/Home/Home");
const { default: Login } = require("../../pages/Login/Login");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Mian />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/appointment", element: <Appoinment /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard />
      </PrivateRoutes>
    ),
  },
]);
