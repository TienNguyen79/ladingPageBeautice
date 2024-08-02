import React from "react";
import Banner from "../../module/HomePage/Banner";
import Service from "../../module/HomePage/Service/Service";
import AboutUs from "../../module/HomePage/AboutUs";
import Expert from "../../module/HomePage/Expert/Expert";
import ContactUs from "../../module/HomePage/ContactUs";

const HomePage = () => {
  return (
    <div>
      <Service />
      <AboutUs />
      <Expert />
      <ContactUs />
    </div>
  );
};

export default HomePage;
