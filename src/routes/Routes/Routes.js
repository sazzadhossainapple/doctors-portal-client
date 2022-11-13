import Appoinment from "../../pages/Appoinment/Appoinment/Appoinment";

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
      { path: "/appointment", element: <Appoinment /> },
    ],
  },
]);
