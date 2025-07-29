import { Link } from "react-router";
import logoImg from "../../assets/logo.jpg";
import "./Nav.css";

const Nav = () => {
  return (
    <div>
      <ul className="nav-upper flex-space-around hover:text-amber-50">
        <li className="nav__list text-xl font-semibold hover:text-orange-500">
          <Link className="" to="/">
            Home
          </Link>
        </li>

        <li className="nav__list text-xl font-semibold hover:text-orange-500">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="nav__list text-xl font-semibold hover:text-orange-500">
          <Link to="/service">Service</Link>
        </li>
        <li className="nav__list text-xl font-semibold hover:text-orange-500">
          <Link to="/about">About</Link>
        </li>
        <li className="nav__list text-xl font-semibold hover:text-orange-500">
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>

        <li className="nav__list ">
          <Link to="/cart">
            <i className="bi bi-cart3 text-4xl hover:text-fuchsia-500"></i>
          </Link>
        </li>
        <div className="flex justify-center items-center gap-4 text-lg">
          <li className="nav__list ">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav__list ">
            <Link to="/sign-up">SignUp</Link>
          </li>

          <div className="flex flex-col justify-center items-center">
            <div className="flex gap-1 justify-center items-center">
              <li className="nav__list">
                <Link to="/profile">
                  <img
                    className="profile-icon-role ring-amber-300"
                    src={logoImg}
                    alt="profile icon"
                  />
                </Link>
              </li>
              <small className="text-[13px] text-gray-50 italic">
                {/* {role} */}
              </small>
            </div>
            <li className="nav__list ">
              <button
                className="bg-orange-600 py-[2px] px-[4px]  mt-1 rounded hover:bg-orange-700 "
                // onClick={() => signOut(auth)}
              >
                Logout
              </button>
            </li>
          </div>

          <li className="nav__list">
            <Link to="/about">
              <img
                className="profile-icon ring-amber-300"
                src={logoImg}
                alt="profile icon"
              />
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Nav;
