import DashboardLayout from "../../layout/DashboardLayout";
import Appoinment from "../../pages/Appoinment/Appoinment/Appoinment";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";

import MyAppoinment from "../../pages/Dashboard/MyAppoinment/MyAppoinment";

import ForgetPassword from "../../pages/Login/ForgetPassword";
import SignUp from "../../pages/SignUp/SignUp";
import AdminRoutes from "../AdminRoutes/AdminRoutes";
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
      { path: "/forgetpassword", element: <ForgetPassword /> },
      { path: "/appointment", element: <Appoinment /> },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <DashboardLayout />
      </PrivateRoutes>
    ),
    children: [
      { path: "/dashboard", element: <MyAppoinment /> },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoutes>
            <AllUsers />
          </AdminRoutes>
        ),
      },
    ],
  },
]);
