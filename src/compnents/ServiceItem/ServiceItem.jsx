import React from "react";
import "./ServiceItem.css";
import img1 from "../../assets/images/h1.jpg";
import img2 from "../../assets/images/h2.jpg";
import img3 from "../../assets/images/h3.jpg";
import img4 from "../../assets/images/h4.jpg";
import img5 from "../../assets/images/r1.jpg";
import img6 from "../../assets/images/r2.jpg";
import img7 from "../../assets/images/r3.jpg";
import img8 from "../../assets/images/r4.jpg";
import SerciceCare from "../SerciceCare/SerciceCare";

const ServiceItem = () => {
  return (
    <>
      <div className="flex flex-col m-10 justify-between items-center">
        {/* For Your Home Section Start Hear  */}
        <div className="container flex flex-col">
          <h2 className="h4  my-10 text-2xl font-semibold">For Your Home</h2>
          <div className="flex justify-around items-center">
            {/* <!-- Home Services-1  --> */}
            <div className="col-md-3 col-sm-6">
              <img
                src={img1}
                alt="Home Service"
                className="img-fluid mx-auto d-block rounded imgSiz"
              />
              <h3 className="h6 text-center fw-bold my-2">
                Gas Stove/Burner Services
              </h3>
            </div>
            {/* <!-- Home Services-2  --> */}
            <div className="col-md-3 col-sm-6">
              <img
                src={img2}
                alt="Home Service"
                className="imgSiz img-fluid mx-auto d-block rounded "
              />
              <h3 className="h6 text-center fw-bold my-2">
                Plumbing & Sanitary Services
              </h3>
            </div>
            {/* <!-- Home Services-13 --> */}
            <div className="col-md-3 col-sm-6">
              <img
                src={img3}
                alt="Home Service"
                className="imgSiz img-fluid mx-auto d-block rounded"
              />
              <h3 className="h6 text-center fw-bold my-2">Painting Services</h3>
            </div>
            {/* <!-- Home Services-4  --> */}
            <div className="col-md-3 col-sm-6">
              <img
                src={img4}
                alt="Home Service"
                className="imgSiz img-fluid mx-auto d-block rounded"
              />
              <h3 className="h6 text-center fw-bold my-2">Home Cleaning</h3>
            </div>
          </div>
        </div>
        {/* For Your Home Section End Hear  */}
        {/* Recommended Section Start Hear  */}
        <div className="container">
          <h2 className="h4  my-10 text-2xl font-semibold">Recommended</h2>
          <div className="flex justify-around items-center">
            {/* <!-- Home Services-1  --> */}
            <div className="col-md-3 col-sm-6">
              <img
                src={img5}
                alt="Recommended Services"
                className="imgSiz img-fluid mx-auto d-block rounded"
              />
              <h3 className="h6 text-center fw-bold my-2">AC Servicing</h3>
            </div>
            {/* <!-- Home Services-2  --> */}
            <div className="col-md-3 col-sm-6">
              <img
                src={img6}
                alt="Recommended Services"
                className="imgSiz img-fluid mx-auto d-block rounded"
              />
              <h3 className="h6 text-center fw-bold my-2">Salon Care</h3>
            </div>
            {/* <!-- Home Services-13 --> */}
            <div className="col-md-3 col-sm-6">
              <img
                src={img7}
                alt="Recommended Services"
                className="imgSiz img-fluid mx-auto d-block rounded"
              />
              <h3 className="h6 text-center fw-bold my-2">
                House Shifting Services
              </h3>
            </div>
            {/* <!-- Home Services-4  --> */}
            <div className="col-md-3 col-sm-6">
              <img
                src={img8}
                alt="Recommended Services"
                className="imgSiz img-fluid mx-auto d-block rounded"
              />
              <h3 className="h6 text-center fw-bold my-2">On Demand Driver</h3>
            </div>
          </div>
        </div>
        {/* Recommended Section End Hear  */}
        <SerciceCare/>
      </div>
    </>
  );
};

export default ServiceItem;
