import React from "react";
import PackagesComponent from "../component/packages/PackagesComponent";
import Navbar from "../component/navbar/Navbar";
import Footer from "../component/footer/Footer";

const PackagesScreen = () => {
  return (
    <div>
      <Navbar />
      <PackagesComponent />
      <Footer />    
    </div>
  );
};

export default PackagesScreen;
