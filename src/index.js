import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Website Css
import "../src/assets/scss/layout/_header.scss";
import "../src/assets/scss/layout/_navigation.scss";
import "../src/assets/scss/layout/_sidebar.scss";
import "../src/assets/scss/layout/_responsive.scss";
import "../src/assets/scss/pages/_homepage1.scss";
import "../src/assets/scss/pages/_pages.scss";
import "../src/assets/scss/components/_card.scss";
import "../src/assets/scss/components/_misc.scss";
import "../src/assets/scss/components/_banners.scss";
import "../src/assets/scss/components/_noUISlider.scss";
import "../src/assets/scss/components/_slider.scss";
import "../src/assets/scss/components/_tabs.scss";
import "../src/assets/css/style.css";
import "../src/assets/css/style.css.map";

// Routing
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
