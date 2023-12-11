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
      await axios.post(
        "https://dailybite4-0-backend.onrender.com/ContactForm",
        formData
      );
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
    <div className="flex flex-col lg:flex-row max-w-8xl mx-auto my-10 bg-white rounded-lg shadow-lg px-4 lg:px-20">
      {/* Image column */}
      <div className="w-full lg:w-1/2">
        <img src={Contact} alt="Placeholder Image" className="rounded-lg " />
      </div>

      {/* Contact form column */}
      <div className="w-full p-2 lg:w-1/2 lg:p-4">
        <h1 className="text-4xl leading-8 lg:text-6xl lg:mb-4 font-ExtraCondensedBlack uppercase text-mainOrange lg:leading-12">
          Contact Us
        </h1>
        <form
          onSubmit={handleSubmit}
          className="font-ExtraCondensedBold text-xl lg:text-xl"
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
              className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              title="Please enter a valid email address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="mobile"
              className="block text-gray-700 font-bold mb-2"
            >
              Mobile No
            </label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your mobile number"
              required
              pattern="[0-9]{10}"
              title="Please enter a 10-digit mobile number"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
              placeholder="Enter your message"
            />
          </div>
          <button
            type="submit"
            className="bg-mainOrange hover:bg-DailybiteDarkChocolaty text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
      </div>
      {showThankYou && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50"
          onClick={handleOverlayClick}
        >
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-8xl font-bold mb-4 font-ExtraCondensedBold">
              Thank You!
            </p>
            <p className="font-ExtraCondensedMedium text-3xl leading-10">
              Your message has been submitted.
            </p>
            <button
              onClick={closeThankYou}
              className="font-ExtraCondensedBold text-3xl bg-mainOrange hover:bg-DailybiteDarkChocolaty text-white  py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
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
