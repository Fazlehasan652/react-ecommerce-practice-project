import React from "react";
import "./Services.css";
import ServiceItem from "../../compnents/ServiceItem/ServiceItem";
import ServiceItemSideBar from "../../compnents/ServiceItemSideBar/ServiceItemSideBar";
import SerciceCare from "../../compnents/SerciceCare/SerciceCare";

const Services = () => {
  return (
    <>
      <div className="grid grid-flow-col">
        <ServiceItemSideBar />
        <ServiceItem />
        {/* <SerciceCare/> */}
      </div>
    </>
  );
};

export default Services;
