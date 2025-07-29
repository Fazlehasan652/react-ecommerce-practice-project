import { Outlet } from "react-router";
import "./Dashboard.css";
import DashboardOverView from "./DashboardOverView/DashboardOverView";
import DashboardSideBarNav from "./DashboardSideBar/DashboardSideBarNav";
import DashboardTopBar from "./DashboardTopBar/DashboardTopBar";

const Dashboard = () => {
  return (
    <>
      <div class="flex min-h-screen bg-gray-100">
        <DashboardSideBarNav />

        <div class="flex-1 flex flex-col">
          {/* <!-- Top Navbar  */}
          <DashboardTopBar />

          {/* Content  */}
          <Outlet />
          <DashboardOverView />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
