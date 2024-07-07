import React from "react";
import Navbar from "../component/navbar/Navbar";
import ViewDetailsComponent from "../component/viewDetails/ViewDetailsComponent";
import Footer from "../component/footer/Footer";

const ViewDetailsScreen = () => {
  return (
    <div>
      <Navbar />
      <ViewDetailsComponent />
      <Footer />
    </div>
  );
};

export default ViewDetailsScreen;
