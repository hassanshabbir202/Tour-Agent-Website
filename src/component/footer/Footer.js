import React, { useState } from "react";
import newsLetter from "../../assets/imgs/page/homepage4/img-newsletter.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubscribe = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:4000/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        // Subscription successful
        setEmail(""); // Clear the email input field
        alert(data.message); // Show success message
      } else {
        // Subscription failed
        setErrorMessage(data.message); // Set error message
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage("");
  };

  return (
    <>
      <section className="section-box mt-30 mb-20">
        <div className="box-newsletter box-newsletter-2">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-12 text-center d-none d-xl-block">
                <img src={newsLetter} alt="joxBox" />
              </div>
              <div className="col-xl-8 col-lg-12 col-12 text-center">
                <div className="d-inline-block text-start">
                  <h2 className="color-white">Subscribe our newsletter</h2>
                  <p className="mt-10 font-lg color-white">
                    New Things Will Always Update Regularly
                  </p>
                  <div className="box-form-newsletter mt-40">
                    <form
                      className="form-newsletter"
                      onSubmit={handleSubscribe}
                    >
                      <input
                        name="email"
                        className="input-newsletter"
                        type="email"
                        value={email}
                        onChange={handleChange}
                        placeholder="Enter your email here"
                      />
                      {errorMessage && (
                        <p className="error-msg">{errorMessage}</p>
                      )}
                      <button
                        name="subscribe"
                        className="btn btn-default font-heading icon-send-letter"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer mt-50">
        <div className="container">
          <div className="footer-bottom mt-50">
            <div className="row">
              <div className="col-md-6">
                <span className="font-xs color-text-paragraph">
                  Copyright &copy; 2024 ICI-Match all rights reserved
                </span>
              </div>
              <div className="col-md-6 text-md-end text-start">
                <span className="font-xs color-text-paragraph">
                  Designed & Developed By{" "}
                  <a href="https://hakamtechsol.com/" target="_blank">
                    HAKAMTECHSOL
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
