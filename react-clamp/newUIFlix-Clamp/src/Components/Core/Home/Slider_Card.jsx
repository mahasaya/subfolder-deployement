// Slider_Card.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlixParamsModal from "../../Common/flixParamsModal";

const Slider_Card = ({ SliderData, width, height }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleModalSubmit = (formData) => {
    const params = new URLSearchParams({
      distId: formData.distributorID,
      iso: formData.language,
      live: formData.live,
    });

    if (formData.mpn) params.set("mpn", formData.mpn);
    if (formData.ean) params.set("ean", formData.ean);
    if(params.toString()){
      navigate(`${SliderData?.tag}?${params.toString()}`);
    }
   
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={`group flex flex-col hover:scale-115 items-center justify-center gap-8 ${width} ${height} cursor-pointer transition-all duration-300 ease-in-out`}
      >
        {/* Image container with glow effect */}
        <div className="relative  transform transition-transform duration-300 ">
          {/* Glow effect - only visible on hover  // top-4 -bottom-12 */}
          {/* <div
            className="
          absolute -inset-2 
          bg-[#41E886] 
          rounded-full
          w-[80%]
          mx-auto
          blur-lg 
          opacity-0 
          transition-opacity duration-300 ease-in-out 
          group-hover:opacity-90
          z-0
        "
          /> */}

          {/* Image container */}
          <div className="relative mx-auto w-[60%] h-auto ">
            <img
              className="w-full h-auto"
              src={SliderData?.img}
              alt={SliderData?.label}
            />
          </div>
        </div>

        <span className="text-[24px] md:text-[16px] lg:text-[14px] text-center text-gray-300  hover:text-white capitalize font-semibold transition-transform duration-300 ">
          {SliderData?.label}
        </span>
      </div>
          {isOpen && (
          <FlixParamsModal
            isOpen={isOpen}
            onClose={handleClose}
            onSubmit={handleModalSubmit}
            productName={SliderData?.label || ""}
          />
        )}
    </>
  );
};

export default Slider_Card;
