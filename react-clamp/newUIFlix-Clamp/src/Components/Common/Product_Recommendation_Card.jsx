import React, { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import FlixParamsModal from "./flixParamsModal";

const Product_Recommendation_Card = ({ SliderData, width, height }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const {tag} = useParams()
  const handleClose = () => setIsOpen(false);

  const handleModalSubmit = (formData) => {
    const params = new URLSearchParams({
      distId: formData?.distributorID,
      iso: formData?.language,
      live: formData?.live,
    });

    if (formData?.mpn) params.set("mpn", formData?.mpn);
    if (formData?.ean) params.set("ean", formData?.ean);
    navigate(`/${SliderData?.tag}?${params.toString()} `);
  };

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className={`flex flex-col justify-between cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-[1.02] ${width} min-h-[350px] rounded-xl border border-[#e0e7ed] p-4 bg-white overflow-hidden`}
      >
        {/* Product Image */}
        <div className="flex items-center justify-center h-[180px] mb-3">
          <img
            src={SliderData?.img}
            alt={SliderData?.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col gap-2 flex-grow">
          <h3 className="font-medium text-gray-800 text-sm md:text-base line-clamp-2 h-[3em]">
            {SliderData?.name}
          </h3>

          <div className="mt-auto">
            {/* Price & Savings */}
            <div className="flex justify-between items-center mt-2">
              <span className="text-lg md:text-xl font-semibold text-gray-900">
                {SliderData?.price}
              </span>

              {SliderData?.save && (
                <span className="text-xs md:text-sm font-medium text-[#e5006d] px-2 py-1 rounded-full">
                  Save {SliderData?.save}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
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

export default Product_Recommendation_Card;
