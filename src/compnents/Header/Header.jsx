import React from "react";

import "./Header.css";
// import imges from "../../assets/pngfind.png";
import imges from "../../assets/com-50-off.png";
const Header = () => {
  return (
    <>
      <header className="header">
        <div className="banner flex-space-around ">
          <marquee className="banner__title" behavior="" direction="">
            <div className="flex items-center justify-center gap-3 bg-gray-950/20 w-[600px] rounded-full  shadow shadow-fuchsia-500">
              <img src={imges} alt="50%" className="imginSize mt-5" />
              <span className="text-shadow-2xs text-shadow-violet-500">
                Sales going on.
              </span>
            </div>
          </marquee>
          <div className="features flex-space-around">
            <article className="feature flex-center">
              <i className="fa-solid fa-truck feature__icon"></i>
              <h3>Shipping within 7 days</h3>
            </article>
            <article className="feature flex-center">
              <i className="fa-brands fa-rocketchat feature__icon"></i>
              <h3>Support 24/7</h3>
            </article>
            <article className="feature flex-center">
              <i className="fa-regular fa-credit-card feature__icon"></i>
              <h3>Safe Payment</h3>
            </article>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
