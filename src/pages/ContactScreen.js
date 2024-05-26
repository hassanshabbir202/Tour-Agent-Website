import React from "react";
import Footer from "../component/footer/Footer";
import ContactComponent from "../component/contact/ContactComponent";
import Navbar from "./../component/navbar/Navbar";

const ContactScreen = () => {
  return (
    <>
      <Navbar />
      <ContactComponent />
      <Footer />
    </>
  );
};

export default ContactScreen;
