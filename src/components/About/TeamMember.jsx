import React from "react";

import Linkedin from "../../assets/icons/LinkdinIcon.png";
import Twitter from "../../assets/icons/TwitterIcon.png";
import Instagram from "../../assets/icons/Instagram.png";

import Aniket from "../../assets/About/Aniket.jpg";
import PD from "../../assets/About/pd.png";
import Prathmesh from "../../assets/About/Prathmesh.jpg";
import Sejal from "../../assets/About/Sejal.jpg";
import Pratiksha from "../../assets/About/Pratiksha.jpeg";
import Sudeep from "../../assets/About/Sudeep.jpg";
import Satyam from "../../assets/About/Satyam.jpg";

const teamMembers = [
  {
    name: "Aniket Mali",
    position: "Founder and CEO",
    image: Aniket,
    socialMedia: [
      {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/aniket-mali-3b9037199/",
      },
    ],
  },
  {
    name: "Prachi Deokate",
    position: "Chief Technical Officer",
    image: PD,
    socialMedia: [
      {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/prachi-deokate-abb350262/",
      },
      { icon: Instagram, link: "https://www.instagram.com/prachi_deokate_7/" },
    ],
  },
  {
    name: "Sejal Murabatte",
    position: "Digital Marketing Executive",
    image: Sejal,
    socialMedia: [
      { icon: Linkedin, link: "www.linkedin.com/in/sejal-murabatte-85310322a" },
      {
        icon: Instagram,
        link: "https://instagram.com/sejal_sm09?igshid=OGQ5ZDc2ODk2ZA==",
      },
    ],
  },
  {
    name: "Sudeep Kolavi",
    position: "Sales & Marketing Intern",
    image: Sudeep,
    socialMedia: [
      {
        icon: Linkedin,
        link: "https://linkedin.com/in/sudeep-kolavi-b44875220",
      },
      {
        icon: Twitter,
        link: "https://x.com/KolaviSudeep?t=Hq-QXP1JABksmLbf4DdyZg&s=09",
      },
      {
        icon: Instagram,
        link: "https://instagram.com/sudeep_kolavi?igshid=OGQ5ZDc2ODk2ZA==",
      },
    ],
  },
  {
    name: "Pratiksha Mohire",
    position: "Frontend Developer Intern",
    image: Pratiksha,
    socialMedia: [
      {
        icon: Linkedin,
        link: "https://www.linkedin.com/in/pratiksha-mohire-1a7678229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      },
      {
        icon: Instagram,
        link: "https://instagram.com/pratikshamohire?igshid=NzZlODBkYWE4Ng==",
      },
    ],
  },
  {
    name: "Satyam Vishwakarma",
    position: "Digital Marketing Executive Intern",
    image: Satyam,
    socialMedia: [
      { icon: Linkedin, link: "https://www.linkedin.com/in/satyamskv/" },
      {
        icon: Instagram,
        link: "https://instagram.com/satyam_skv?igshid=OGQ5ZDc2ODk2ZA==",
      },
    ],
  },
  {
    name: "Prathmesh Pawar",
    position: "Supportive Graphic Designer",
    image: Prathmesh,
    socialMedia: [
      { icon: Linkedin, link: "https://www.linkedin.com/in/prathameshrpawar/" },
      {
        icon: Instagram,
        link: "https://www.instagram.com/prathameshpawar1189",
      },
    ],
  },
  // Add more team members as needed
];

const TeamMember = () => {
  return (
    <div className="px-4 lg:px-20">
      <h1 className="text-2xl lg:text-4xl font-ExtraCondensedBlack text-center uppercase ">
        {" "}
        Our <span className="text-mainOrange">Team</span>
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 justify-items-center">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-40 lg:w-80 h-auto rounded overflow-hidden shadow-lg m-2 lg:m-4"
          >
            <div className="px-3 py-2 lg:px-6 lg:py-4">
              <div className="font-ExtraCondensedBlack text-mainOrange text-xl  lg:text-3xl ">
                {member.name}
              </div>
              <p className="font-ExtraCondensedBold text-DailyBiteDarkChocolaty text-sm lg:text-xl ">
                {member.position}
              </p>
            </div>
            <div className="flex justify-center">
              <img
                className="w-40 h-60 lg:w-60 lg:h-80 object-cover rounded-lg"
                src={member.image}
                alt={`Image of ${member.name}`}
              />
            </div>
            <div className="px-3 py-2 lg:px-6 lg:py-4">
              <div className="flex justify-center space-x-2 lg:space-x-4">
                {member.socialMedia.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    className="text-black hover:text-orange-700"
                  >
                    <img
                      src={social.icon}
                      alt={`${member.name}'s ${idx + 1} social media`}
                      className="w-6 h-6 lg:w-8 lg:h-8"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
