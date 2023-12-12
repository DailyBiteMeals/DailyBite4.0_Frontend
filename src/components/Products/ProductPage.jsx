import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { initialProducts } from "./ProductsData";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams();
  const product = initialProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  // Settings for the slider
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    arrows: false,
  };

  // Opening and closing form
  const handleOrderNow = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setShowThankYou(false);
  };

  const [showForm, setShowForm] = useState(false);
  // ^ important

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    deliveryDate: "",
    quantity: "",
    deliveryLocation: "",
    productDescription: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    mobile: false,
    deliveryDate: false,
    quantity: false,
    deliveryLocation: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for required fields
    if (
      !formData.name ||
      !formData.email ||
      !formData.mobile ||
      !formData.deliveryDate ||
      !formData.quantity ||
      !formData.deliveryLocation
    ) {
      setErrors({
        name: !formData.name,
        email: !formData.email,
        mobile: !formData.mobile,
        deliveryDate: !formData.deliveryDate,
        quantity: !formData.quantity,
        deliveryLocation: !formData.deliveryLocation,
      });
      return;
    }

    try {
      await axios.post(
        `https://dailybite4-0-backend.onrender.com/ProductContactForm/${id}`,
        formData
      ); // Include product ID in the URL
      setFormData({
        name: "",
        email: "",
        mobile: "",
        deliveryDate: "",
        quantity: "",
        deliveryLocation: "",
        productDescription: "",
      });
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
    <div className="container px-4 py-4 lg:px-20 lg:py-20">
      <div className="flex flex-col lg:flex-row justify-center ">
        <div className="flex-1 w-full lg:w-1/2">
          <Slider {...sliderSettings}>
            {product.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-60 lg:h-80 object-cover rounded-md"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex-1 w-full lg:w-1/2">
          <div className="px-2 lg:px-4 rounded-md">
            <p className="text-sm lg:text-base font-InterSemiBold text-DailyBiteGray">
              {product.category}
            </p>
            <h3 className="text-2xl lg:text-4xl font-ExtraCondensedBlack text-DailybiteDarkChocolaty">
              {product.title}
            </h3>
            <p className="text-sm mb-2 lg:text-base font-InterMedium lg:mb-4">
              {product.description}
            </p>
            <p className="text-sm lg:text-base font-InterSemiBold">
              {product.title} Contains :
            </p>
            <p className="text-sm lg:text-base font-InterMedium">
              {product.includes}
            </p>
            <button
              className="bg-mainOrange hover:bg-DailyBiteDarkChocolaty text-white py-2 px-2 text-sm mt-2 lg:py-2 lg:px-8 lg:text-xl font-InterSemiBold rounded lg:mt-4"
              onClick={handleOrderNow}
            >
              Enquire Now
            </button>
            {showForm && (
              <div className="fixed top-6 px-4 lg:top-10 left-0 lg:px-60 w-full h-full flex items-center justify-center bg-opacity-50 ">
                <form
                  onSubmit={handleSubmit}
                  className="font-ExtraCondensedBold text-base p-2 lg:text-xl lg:p-6 rounded-md w-full bg-white shadow-lg "
                >
                  <div className="mb-2 lg:mb-4">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-DailyBiteDarkChocolaty"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border rounded-md w-full px-1 lg:py-2 lg:px-3 leading-tight focus:outline-none focus:shadow-outline opacity-50 text-DailyBiteDarkChocolaty"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="columns-2">
                    <div className="mb-2 lg:mb-4">
                      <label
                        htmlFor="email"
                        className="block text-DailyBiteDarkChocolaty mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border rounded-md w-full px-1 lg:py-2 lg:px-3 leading-tight focus:outline-none focus:shadow-outline opacity-50"
                        placeholder="Enter your email"
                        required
                        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                        title="Please enter a valid email address"
                      />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="mobile" className="block font-bold mb-2">
                        Mobile No
                      </label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className="border rounded-md w-full px-1 lg:py-2 lg:px-3 leading-tight focus:outline-none focus:shadow-outline opacity-50"
                        placeholder="Enter your mobile number"
                        required
                        pattern="[0-9]{10}"
                        title="Please enter a 10-digit mobile number"
                      />
                    </div>
                  </div>
                  <div className="columns-3">
                    <div className="mb-4">
                      <label
                        htmlFor="deliveryDate"
                        className="block font-bold mb-2"
                      >
                        Delivery Date
                      </label>
                      <input
                        type="date"
                        id="deliveryDate"
                        name="Delivery Date"
                        value={formData.deliveryDate}
                        onChange={handleChange}
                        className="border rounded-md w-full px-1 lg:py-2 lg:px-3 leading-tight focus:outline-none focus:shadow-outline opacity-50"
                        placeholder="Enter your Date"
                        required
                        title="Please enter a date"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="quantity"
                        className="block  font-bold mb-2"
                      >
                        Quantity
                      </label>
                      <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="border rounded-md w-full px-1 lg:py-2 lg:px-3 leading-tight focus:outline-none focus:shadow-outline opacity-50"
                        placeholder="Enter your quantity"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        htmlFor="deliveryLocation"
                        className="block font-bold mb-2"
                      >
                        Delivery Location
                      </label>
                      <input
                        type="text"
                        id="deliveryLocation"
                        name="deliveryLocation"
                        value={formData.deliveryLocation}
                        onChange={handleChange}
                        className="border rounded-md w-full px-1 lg:py-2 lg:px-3  leading-tight focus:outline-none focus:shadow-outline opacity-50"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="message"
                      className="block text-white font-bold lg:mb-2"
                    >
                      Product Description
                    </label>
                    <textarea
                      id="productDescription"
                      name="message"
                      value={formData.productDescription}
                      onChange={handleChange}
                      className="border rounded-md w-full px-1 lg:py-2 lg:px-3 leading-tight focus:outline-none focus:shadow-outline lg:h-32 resize-none opacity-50"
                      placeholder="Enter your message"
                    />
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="bg-white hover:bg-dailybiteDarkChocolaty text-mainOrange font-semibold py-2 px-4 rounded mr-2"
                      onClick={handleCloseForm}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-mainOrange hover:bg-DailybiteDarkChocolaty text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            )}
            {showThankYou && (
              <div
                className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-600"
                onClick={handleOverlayClick}
              >
                <div className="bg-white p-2 lg:p-8 rounded-lg shadow-md text-center z-900">
                  <p className="text-2xl mb-2 lg:text-8xl font-bold lg:mb-4 font-ExtraCondensedBold">
                    Thank You!
                  </p>
                  <p className="font-ExtraCondensedMedium text-xl leading-6 lg:text-3xl lg:leading-10">
                    Your message has been submitted.
                  </p>
                  <button
                    onClick={closeThankYou}
                    className="font-ExtraCondensedBold text-xl py-1 px-2 mt-2 lg:text-3xl bg-mainOrange hover:bg-DailybiteDarkChocolaty text-white  lg:py-2 lg:px-4 rounded lg:mt-4 focus:outline-none focus:shadow-outline"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
