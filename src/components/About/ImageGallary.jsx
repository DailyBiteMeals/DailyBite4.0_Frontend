import React, { useState, useEffect } from "react";
import ImageGalleryDesktop from "../../assets/About/ImageGalleryFrame.png";
import ImageGalleryMobile from "../../assets/About/ImageGalleryFrame.png";

const ImageGallery = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Assuming mobile width is below 768px

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex justify-center h-screen lg:h-screen px-4 py-5 lg:px-40 lg:py-10">
      {isMobile ? (
        <img
          src={ImageGalleryMobile}
          alt="Mobile Image"
          className="object-cover"
        />
      ) : (
        <img src={ImageGalleryDesktop} alt="Desktop Image" />
      )}
    </div>
  );
};

export default ImageGallery;
