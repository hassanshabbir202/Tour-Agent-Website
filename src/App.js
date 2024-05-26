import React from "react";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import { Routes, Route } from "react-router-dom";
import TermsAndConditionsScreen from "./pages/TermsAndConditionsScreen";
import AboutScreen from "./pages/AboutScreen";
import ContactScreen from "./pages/ContactScreen";
import Gallery from "./component/gallery/Gallery";

const App = () => {
  return (
    <>
      <Routes>
        {/* Website Routes */}
        <Route path="/" element={<HomeScreen />} />
        <Route path="/aboutus" element={<AboutScreen />} />
        <Route
          path="/termsandcondtion"
          element={<TermsAndConditionsScreen />}
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactScreen />} />
      </Routes>
    </>
  );
};

export default App;
