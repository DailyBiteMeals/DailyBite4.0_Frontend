import React, { Component } from "react";
import Slider from "react-slick";
import quote from "../../assets/quote-left-solid.svg";

// Logo
import acenture from "../../assets/Logo/CustomerLogo/Accenture.png";
import keploy from "../../assets/Logo/CustomerLogo/Keploy.png";
import newtral from "../../assets/Logo/CustomerLogo/Newtral.png";

// Testimonial component
const Testimonial = ({ title, text, logo }) => {
  return (
    <div className="rounded-lg p-4 lg:p-8">
      <div className="flex justify-center items-center p-2 lg:p-4">
        <div className="bg-white rounded-full lg:rounded-full w-24 h-24 lg:h-40 lg:w-40 flex items-center justify-center">
          <img
            src={logo}
            alt="Logo"
            className="w-auto h-16 p-4 lg:h-20 lg:p-2"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div>
          <img
            src={quote}
            alt=""
            srcset=""
            className=" opacity-10 w-10 h-10 lg:w-20 lg:h-20 color-white"
          />
        </div>
        <div>
          <p className=" text-center text-sm lg:text-xl font-InterMedium lg:p-10 lg:h-64">
            {text}
          </p>
        </div>
        <div>
          <h4 className=" text-center text-lg lg:text-3xl font-ExtraCondensedBold">
            - {title}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default class VerticalMode extends Component {
  render() {
    const testimonials = [
      {
        title: "Accenture Employees",
        text: "The food is incredibly tasty, and I'm very satisfied with their service. They've maintained consistent quality throughout our subscription, and their staff is professional and punctual. What's even more impressive is their willingness to listen to feedback and continuously improve. Thank you for your service!",
        logo: acenture,
      },
      {
        title: "Keploy",
        text: "If you're in search of a healthy and home-cooked meal experience for your employees, you must give them a try. Their food is both tasty and nutritious, and it's always served with top-notch hygiene standards. We appreciate how they worked with us to customize the menu and took care of employees with food allergies.",
        logo: keploy,
      },
      {
        title: "Newtral",
        text: "We've been enjoying their food for the past 7 months, and it's both delicious and nutritious. What stands out is their excellent service. They consistently deliver on time, and their packaging is both personalized and professional.",
        logo: newtral,
      },
      // Add more testimonials with their respective data
    ];

    const testimonialItems = testimonials.map((testimonial, index) => (
      <div key={index}>
        <Testimonial
          title={testimonial.title}
          text={testimonial.text}
          logo={testimonial.logo}
        />
      </div>
    ));

    const settings = {
      // dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      arrows: false,
      // beforeChange: function (currentSlide, nextSlide) {
      //   console.log("before change", currentSlide, nextSlide);
      // },
      // afterChange: function (currentSlide) {
      //   console.log("after change", currentSlide);
      // },
    };

    return (
      <div className="flex flex-col py-10 lg:py-4 lg:flex-row items-center justify-center">
        <div className="flex-1 lg:w-1/5 lg:p-10">
          <h1 className="text-center text-6xl pb-4 lg:pb-0 leading-10 lg:text-center lg:text-16xl font-ExtraCondensedBlack text-mainOrange uppercase lg:text-right lg:leading-22">
            What people<br></br> are saying about<br></br> DailyBite
          </h1>
        </div>
        <div className="flex-1 w-full lg:w-4/5 bg-mainOrange lg:h-150">
          <div className=" w-full  flex justify-center items-center bg-mainOrange">
            <div>
              {/* Testimonials container */}
              <Slider
                {...settings}
                className="bg-mainOrange rounded-lg text-white w-full lg:h-140 lg:pt-5"
              >
                {testimonialItems}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
