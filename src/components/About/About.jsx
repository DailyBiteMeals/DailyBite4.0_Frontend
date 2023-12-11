import React from "react";
import ImageGallery from "./ImageGallary";
import AboutInfo from "./AboutInfo";
import CustomerCarsoule from "./CustomerCarsoule";
import TeamMember from "./TeamMember";

function About() {
  return (
    <div>
      <ImageGallery />
      <AboutInfo />
      <CustomerCarsoule />
      <TeamMember />
    </div>
  );
}

export default About;
