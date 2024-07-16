import React from "react";
import TemperatureComponent from "../component/temperature/TemperatureComponent";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

const TemperatureScreen = () => {
  return (
    <>
      <Navbar />
      <TemperatureComponent />
      <Footer />
    </>
  );
};

export default TemperatureScreen;
