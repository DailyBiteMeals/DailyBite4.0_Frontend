import React from "react";
import CustomerCarsoule from "./CustomerCarsoule";
import CardSection from "./CardSection";
import AboutHome from "./AboutHome";
import Features from "./Features";
import Testimonials from "./Testimonials";
import LaunchingApp from "./LaunchingApp";
import DeliveryLocation from "./DeliveryLocation";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import LandingPage from "./LandingPage";
import DiscountPoster from "./DiscountPoster";

function Home() {
  return (
    <>
      {/* Landing Page */}
      <LandingPage />

      {/* Carsoule Customer */}
      <CustomerCarsoule />

      {/* Products Section */}
      <CardSection />

      {/* Discount Poster */}
      <DiscountPoster />

      {/* About */}
      <AboutHome />

      {/* Features */}
      <Features />

      {/* Testimonials */}
      <Testimonials />

      {/* Launching App */}
      <LaunchingApp />

      {/* Delivery Location */}
      <DeliveryLocation />

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Info */}
      <ContactInfo />
    </>
  );
}

export default Home;
