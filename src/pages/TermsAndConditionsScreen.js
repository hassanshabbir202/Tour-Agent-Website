import React from "react";
import TermsAndConditionsComponent from "../component/TermsAndConditions/TermsAndConditionsComponent";
import Footer from "../component/footer/Footer";
import Navbar from "./../component/navbar/Navbar";

const TermsAndConditionsScreen = () => {
  return (
    <>
      <Navbar />
      <TermsAndConditionsComponent />
      <Footer />
    </>
  );
};

export default TermsAndConditionsScreen;
