import React from "react";
import "./DashboardSideBarNav.css";
import { Link } from "react-router";
const DashboardSideBarNav = () => {
  return (
    <>
      <aside class="w-64 bg-white shadow-md">
        <div class="p-6 font-bold text-purple-700 text-2xl">AdminPanel</div>
        <nav class="mt-8">
          <Link
            to="/admin/dashboard/dashboard-admin"
            href="#"
            class="block py-3 px-6 text-gray-700 hover:bg-purple-100"
          >
            Admin
          </Link>
          <Link
            to="/admin/dashboard/user"
            href="#"
            class="block py-3 px-6 text-gray-700 hover:bg-purple-100"
          >
            Users
          </Link>
          <Link
            to="/admin/dashboard/office-staff"
            href="#"
            class="block py-3 px-6 text-gray-700 hover:bg-purple-100"
          >
            Office Staff
          </Link>
          <Link
            to="/admin/dashboard/add-product"
            href="#"
            class="block py-3 px-6 text-gray-700 hover:bg-purple-100"
          >
            Product Add Form
          </Link>
          <Link
            to="/admin/dashboard/analytics"
            href="#"
            class="block py-3 px-6 text-gray-700 hover:bg-purple-100"
          >
            Analytics
          </Link>
          <Link
            to="/admin/dashboard/settings"
            href="#"
            class="block py-3 px-6 text-gray-700 hover:bg-purple-100"
          >
            Settings
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default DashboardSideBarNav;
