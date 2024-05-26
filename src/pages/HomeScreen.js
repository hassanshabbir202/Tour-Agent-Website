import React from "react";
import HomeComponent from "../component/home/HomeComponent";
import Footer from "../component/footer/Footer";
import Navbar from "./../component/navbar/Navbar";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <HomeComponent />
      <Footer />
    </>
  );
};

export default HomeScreen;
