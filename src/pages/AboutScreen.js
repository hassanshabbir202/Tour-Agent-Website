import React from "react";
import AboutComponent from "../component/about/AboutComponent";
import Footer from "../component/footer/Footer";
import Navbar from "./../component/navbar/Navbar";

const AboutScreen = () => {
  return (
    <>
      <Navbar />
      <AboutComponent />
      <Footer />
    </>
  );
};

export default AboutScreen;
