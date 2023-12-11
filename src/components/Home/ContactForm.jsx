import React, { useState, useEffect, useRef } from "react";
import Contact from "../../assets/Contact.png";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    mobile: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for required fields
    if (!formData.name || !formData.email || !formData.mobile) {
      setErrors({
        name: !formData.name,
        email: !formData.email,
        mobile: !formData.mobile,
      });
      return;
    }

    try {
      await axios.post("http://localhost:5000/HomeContactForm", formData);
      setFormData({ name: "", email: "", mobile: "", message: "" });
      setShowThankYou(true); // Show thank-you popup
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [showThankYou, setShowThankYou] = useState(false);
  const thankYouRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: false });
  };

  const closeThankYou = () => {
    setShowThankYou(false);
  };

  const handleOverlayClick = () => {
    setShowThankYou(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (thankYouRef.current && !thankYouRef.current.contains(event.target)) {
        setShowThankYou(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row max-w-8xl mx-auto lg:my-10 bg-white rounded-lg shadow-lg lg:px-20 ">
      {/* Image column */}
      <div className="w-full lg:w-1/2">
        <h2 className="text-4xl  mb-2 leading-8 text-center lg:text-6xl lg:mb-4 font-ExtraCondensedBold text-DailybiteDarkChocolaty lg:leading-12 lg:text-left uppercase">
          WHO SAYS MONEY CAN'T BUY<br></br> YOU{" "}
          <span className="text-mainOrange">HAPPINESS</span>, Contact Us
        </h2>
        <img
          src={Contact}
          alt="Placeholder Image"
          className="rounded-lg w-full p-4"
        />
      </div>

      {/* Contact form column */}
      <div className="w-full p-4 lg:w-4/5 lg:p-4">
        <form
          onSubmit={handleSubmit}
          className="font-ExtraCondensedBold text-lg lg:text-xl"
        >
          <div className="mb-2 lg:mb-4">
            <label htmlFor="name" className="block lg:mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border rounded-md w-full py-2 px-2 leading-tight lg:py-2 lg:px-3 lg:leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-2 lg:mb-4">
            <label htmlFor="email" className="block lg:mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-md w-full py-2 px-2 leading-tight lg:py-2 lg:px-3 lg:leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Please enter a valid email address"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block lg:mb-2">
              Mobile No
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="border rounded-md w-full py-2 px-2 leading-tight lg:py-2 lg:px-3 text-gray-700 lg:leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your mobile number"
              required
              pattern="[0-9]{10}"
              title="Please enter a 10-digit mobile number"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block lg:mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border rounded-md w-full py-2 px-2 leading-tight lg:py-2 lg:px-3 lg:leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your message"
            />
          </div>
          <button
            type="submit"
            className="bg-mainOrange hover:bg-DailybiteDarkChocolaty text-white text-lg text-center py-2 px-10 lg:text-2xl lg:py-2 lg:px-8 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
      {showThankYou && (
        <div
          className="w-full fixed inset-0 flex items-center justify-center bg-opacity-50 "
          onClick={handleOverlayClick}
        >
          <div className="bg-white p-4 lg:p-8 rounded-lg shadow-md text-center">
            <p className="text-6xl mb-2 lg:text-8xl lg:mb-4 font-ExtraCondensedBold">
              Thank You!
            </p>
            <p className="font-ExtraCondensedMedium text-xl leading-8 lg:text-3xl lg:leading-10">
              Your message has been submitted.
            </p>
            <button
              onClick={closeThankYou}
              className="font-ExtraCondensedBold text-xl py-2 px-4 mt-2 lg:text-3xl bg-mainOrange hover:bg-DailybiteDarkChocolaty text-white  lg:py-2 lg:px-4 rounded lg:mt-4 focus:outline-none focus:shadow-outline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
