import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import About from "../pages/About/About";
import Dashboard from "../pages/Dashboard/Dashboard";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import SignupForm from "../pages/SignUp/SignupForm";
import Services from "../pages/Services/Services";
import DashboardOverView from "../pages/Dashboard/DashboardOverView/DashboardOverView";
import Admin from "../pages/Dashboard/Admin/Admin";
import Users from "../pages/Dashboard/Users/Users";
import OfficeStaff from "../pages/Dashboard/OfficeStaff/OfficeStaff";
import ProductAddForm from "../pages/Dashboard/ProductAddForm/ProductAddForm";
import Analytics from "../pages/Dashboard/Analytics/Analytics";
import Settings from "../pages/Dashboard/Settings/Settings";
import Profile from "../pages/Profile/Profile";
import ProfileUptade from "../compnents/ProfileUptade/ProfileUptade";
import AccountSettings from "../compnents/AccountSettings/AccountSettings";
import ProductDetails from "../compnents/Products/ProductDetails/ProductDetails";


export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/shop", element: <Shop /> },
      { path: "/service", element: <Services /> },
      { path: "/about", element: <About /> },
      {
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      { path: "/login", element: <Login /> },
      { path: "/sign-up", element: <SignupForm /> },
      { path: "/profile", element: <Profile /> },
      { path: "/admin/dashboard", element: <DashboardOverView /> },
      { path: "/admin/dashboard/dashboard-admin", element: <Admin /> },
      { path: "/admin/dashboard/user", element: <Users /> },
      { path: "/admin/dashboard/office-staff", element: <OfficeStaff /> },
      { path: "/admin/dashboard/add-product", element: <ProductAddForm /> },
      { path: "/admin/dashboard/analytics", element: <Analytics /> },
      { path: "/admin/dashboard/settings", element: <Settings /> },
      { path: "/admin/dashboard/profileupdate", element: <ProfileUptade/> },
      { path: "/account-edit", element: <AccountSettings/> },
      { path: "/product-details", element: <ProductDetails/> },
    ],
  },
]);
