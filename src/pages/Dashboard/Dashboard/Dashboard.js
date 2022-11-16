import React from "react";
import { Link } from "react-router-dom";
import MyAppoinment from "../MyAppoinment/MyAppoinment";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            OpenDware
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 bg-base-100 text-base-content">
            <li>
              <Link to="/myapponitment">My Appointment</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-slate-100 w-full">
        <div className="p-10 ">
          <h1 className="text-2xl">My Appointment</h1>
          <MyAppoinment></MyAppoinment>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
