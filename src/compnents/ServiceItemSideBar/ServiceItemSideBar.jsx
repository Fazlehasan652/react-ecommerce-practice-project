import React from "react";
import "./ServiceItemSideBar.css";
import imges1 from "../../assets/images/hf1.jpg";
import imges2 from "../../assets/images/hf2.jpg";
import imges3 from "../../assets/images/hf3.jpg";
import imges4 from "../../assets/images/hf4.jpg";
import imges5 from "../../assets/images/hf5.jpg";
import imges6 from "../../assets/images/hf6.jpg";
const ServiceItemSideBar = () => {
  return (
    <>
      <div class="container">
        <div class="styleHero-feature-container bg-white rounded shadow-lg mb-2 mx-2">
          <div class="row justify-content-between align-items-center">
            {/* <!-- Feature content-01  --> */}
            <div class="col-md-2 col-sm-4 col-6 py-3 shadow-sm hover:bg-amber-100">
              <img
                src={imges1}
                alt="Hero-feature"
                width="40"
                class="sideImg img-fluid mx-auto d-block"
              />
              <h2 class="styleFeater-title text-center py-2">Best Deal</h2>
            </div>
            {/* <!-- Feature content-02  --> */}
            <div class="col-md-2 col-sm-4 col-6 py-3 shadow-sm hover:bg-amber-100">
              <img
                src={imges2}
                alt="Hero-feature"
                width="40"
                class="sideImg img-fluid mx-auto d-block"
              />
              <h2 class="styleFeater-title text-center py-2">
                AC Repair Services
              </h2>
            </div>
            {/* <!-- Feature content-03  --> */}
            <div class="col-md-2 col-sm-4 col-6 py-3 shadow-sm hover:bg-amber-100">
              <img
                src={imges3}
                alt="Hero-feature"
                width="40"
                class="sideImg img-fluid mx-auto d-block"
              />
              <h2 class="styleFeater-title text-center py-2">
                Appliance Repair
              </h2>
            </div>
            {/* <!-- Feature content-04  --> */}
            <div class="col-md-2 col-sm-4 col-6 py-3 shadow-sm hover:bg-amber-100">
              <img
                src={imges4}
                alt="Hero-feature"
                width="40"
                class="sideImg img-fluid mx-auto d-block"
              />
              <h2 class="styleFeater-title text-center py-2">
                Beauty & Wellness
              </h2>
            </div>
            {/* <!-- Feature content-05  --> */}
            <div class="col-md-2 col-sm-4 col-6 py-3 shadow-sm hover:bg-amber-100">
              <img
                src={imges5}
                alt="Hero-feature"
                width="40"
                class="sideImg img-fluid mx-auto d-block"
              />
              <h2 class="styleFeater-title text-center py-2">
                Men's Care & Salon
              </h2>
            </div>
            {/* <!-- Feature content-06  --> */}
            <div class="col-md-2 col-sm-4 col-6 py-3 shadow-sm hover:bg-amber-100">
              <img
                src={imges6}
                alt="Hero-feature"
                width="40"
                class="sideImg img-fluid mx-auto d-block"
              />
              <h2 class="styleFeater-title text-center py-2">Cleaning</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceItemSideBar;
