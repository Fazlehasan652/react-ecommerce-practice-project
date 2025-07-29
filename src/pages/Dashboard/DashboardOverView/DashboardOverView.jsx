import React from "react";
import "./DashboardOverView.css";
import logoImg from "../../../assets/logo.jpg";
import { Link } from "react-router";
const DashboardOverView = () => {
  return (
    <>
      <main class="p-6 space-y-6 m-14">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-sm text-gray-500">Total Users</p>
            <h2 class="text-3xl font-bold text-purple-700 mt-2">1,240</h2>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-sm text-gray-500">Revenue</p>
            <h2 class="text-3xl font-bold text-green-600 mt-2">$24,500</h2>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-sm text-gray-500">New Orders</p>
            <h2 class="text-3xl font-bold text-blue-600 mt-2">320</h2>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <p class="text-sm text-gray-500">Pending Tickets</p>
            <h2 class="text-3xl font-bold text-red-500 mt-2">12</h2>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md">
          <div class="p-4 border-b font-bold text-purple-700">User List</div>
          <table class="w-full text-left">
            <thead class="bg-purple-50">
              <tr>
                <th class="p-4">Name</th>
                <th class="p-4">Email</th>
                <th class="p-4">Role</th>
                <th class="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-t">
                <td class="p-4">John Doe</td>
                <td class="p-4">john@example.com</td>
                <td class="p-4">Admin</td>
                <td class="p-4 text-green-600 font-bold">Active</td>
              </tr>
              <tr class="border-t">
                <td class="p-4">Jane Smith</td>
                <td class="p-4">jane@example.com</td>
                <td class="p-4">Editor</td>
                <td class="p-4 text-yellow-500 font-bold">Pending</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md grid grid-cols-2 md:grid-cols-4 gap-4">
          <button class="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700">
            Add User
          </button>
          <button class="bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700">
            Export Data
          </button>
          <button class="bg-green-600 text-white py-3 rounded-lg shadow hover:bg-green-700">
            Generate Report
          </button>
          <button class="bg-red-600 text-white py-3 rounded-lg shadow hover:bg-red-700">
            Delete Records
          </button>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md flex items-center gap-6">
          {/* <img
                className="w-[10px] h-[10px] rounded-full shadow"
                src={logoImg}
                alt="Profile"
              /> */}

          <img
            className="profile-icon-role-desh ring-amber-300"
            src={logoImg}
            alt="profile icon"
          />
          <div>
            <h3 class="text-xl font-bold text-purple-700">Sophia Ray</h3>
            <p class="text-gray-500 mb-3">Administrator</p>
            <Link to="/admin/dashboard/profileupdate" class="mt-2 bg-purple-600 text-white px-4 py-2  rounded-lg shadow hover:bg-purple-700">
              Edit Profile
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardOverView;
