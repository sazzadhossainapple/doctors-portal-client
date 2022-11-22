import DashboardLayout from "../../layout/DashboardLayout";
import Appoinment from "../../pages/Appoinment/Appoinment/Appoinment";
import AddDoctor from "../../pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../pages/Dashboard/AllUsers/AllUsers";
import ManageDoctor from "../../pages/Dashboard/ManageDoctor/ManageDoctor";

import MyAppoinment from "../../pages/Dashboard/MyAppoinment/MyAppoinment";
import Payment from "../../pages/Dashboard/Payment/Payment";

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
      {
        path: "/dashboard/adddoctor",
        element: (
          <AdminRoutes>
            <AddDoctor />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/managedoctor",
        element: (
          <AdminRoutes>
            <ManageDoctor />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(
            `https://doctors-portal-server-sandy.vercel.app/bookings/${params.id}`
          ),
      },
    ],
  },
]);
