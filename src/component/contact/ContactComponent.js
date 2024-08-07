import React, { useState } from "react";
import contactImage from "../../assets/imgs/page/contact/img.png";
import ChatB from "../chatbot/ChatB";

const ContactComponent = () => {
  const [contactData, setContactData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    query: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });

 
  const sendMessage = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:4000/api/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(contactData),
        });

        if (response.ok) {
          alert("Message sent successfully!"); // Display success message
          // Reset form fields after successful submission
          setContactData({
            name: "",
            company: "",
            email: "",
            phone: "",
            query: "",
          });
        } else {
          const errorMessage = await response.text();
          throw new Error(errorMessage || "An error occurred");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again."); // Display error message
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", phone: "", query: "" };

    // Validate Name
    if (!contactData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Validate Email
    if (!contactData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(contactData.email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    // Validate Phone
    if (!contactData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(contactData.phone)) {
      newErrors.phone = "Invalid phone number";
      isValid = false;
    }

    // Validate Query
    if (!contactData.query.trim()) {
      newErrors.query = "Query is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactData({ ...contactData, [name]: value });

    // Real-time validation for respective field
    if (name !== "query") {
      setErrors({
        ...errors,
        [name]: value.trim()
          ? ""
          : `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      });
    } else {
      setErrors({ ...errors, [name]: value.trim() ? "" : "Query is required" });
    }
  };

  const errorStyle = {
    color: "red",
  };

 
  return (
    <>
      <main className="main">
        <section className="section-box mt-30">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mb-40">
                <span className="font-md color-brand-2 mt-20 d-inline-block">
                  Contact us
                </span>
                <h2 className="mt-5 mb-10">Get in touch</h2>
                <form
                  className="contact-form-style mt-30"
                  id="contact-form"
                  onSubmit={sendMessage}
                >
                  <div
                    className="row wow animate__animated animate__fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <div className="col-lg-6 col-md-6">
                      <div className="input-style mb-20">
                        <input
                          className="font-sm color-text-paragraph-2"
                          name="name"
                          placeholder="Enter your name"
                          type="text"
                          value={contactData.name}
                          onChange={handleChange}
                        />
                        {errors.name && (
                          <p className="error-msg" style={errorStyle}>
                            {errors.name}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="input-style mb-20">
                        <input
                          className="font-sm color-text-paragraph-2"
                          name="company"
                          placeholder="Company (optional)"
                          type="text"
                          value={contactData.company}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="input-style mb-20">
                        <input
                          className="font-sm color-text-paragraph-2"
                          name="email"
                          placeholder="Your email"
                          type="email"
                          value={contactData.email}
                          onChange={handleChange}
                        />
                        {errors.email && (
                          <p className="error-msg" style={errorStyle}>
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="input-style mb-20">
                        <input
                          className="font-sm color-text-paragraph-2"
                          name="phone"
                          placeholder="Phone number"
                          type="tel"
                          value={contactData.phone}
                          onChange={handleChange}
                        />
                        {errors.phone && (
                          <p className="error-msg" style={errorStyle}>
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="textarea-style mb-30">
                        <textarea
                          className="font-sm color-text-paragraph-2"
                          name="query"
                          placeholder="Your Query Here"
                          value={contactData.query}
                          onChange={handleChange}
                        ></textarea>
                        {errors.query && (
                          <p className="error-msg" style={errorStyle}>
                            {errors.query}
                          </p>
                        )}
                      </div>
                      <button
                        className="submit btn btn-send-message"
                        name="addContact"
                        type="submit"
                      >
                        Send message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="col-lg-4 text-center d-none d-lg-block">
                <img src={contactImage} alt="joxBox" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <ChatB/>
    </>
  );
};

export default ContactComponent;
