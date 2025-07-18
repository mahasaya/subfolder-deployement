// FlixParamsModal.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaTimes, FaInfo, FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import {
  setDistributor,
  setLanguage,
  setProduct_mpn,
  setProduct_ean,
  setProduct_brand,
} from "../../Slice/FlixSlice";
import { languageOptions } from "../../assets/dummyData";

// Helper function to extract language code
const extractLanguageCode = (optionStr) => {
  const matches = optionStr.match(/\(([^)]+)\)\s*$/);
  return matches ? matches[1] : optionStr;
};

// Helper function to move item to top
const moveToTop = (array, item) => {
  const newArray = [...array];
  const index = newArray.indexOf(item);
  if (index !== -1) {
    newArray.splice(index, 1);
    newArray.unshift(item);
  }
  return newArray;
};

const FlixParamsModal = ({ isOpen, onClose, onSubmit, productName }) => {
  const [formData, setFormData] = useState({
    distributorID: "",
    mpn: "",
    ean: "",
    language: "",
    live: "1",
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const [showLanguageSuggestions, setShowLanguageSuggestions] = useState(false);
  const languageInputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Handle clicks outside the suggestions dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageInputRef.current &&
        !languageInputRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowLanguageSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }

    // Show suggestions when typing in language field
    if (name === "language" && value.length > 0) {
      setShowLanguageSuggestions(true);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.distributorID.trim()) {
      newErrors.distributorID = "Distributor ID is required";
    }

    if (!formData.language.trim()) {
      newErrors.language = "Language is required";
    } else if (formData.language.length < 2 || formData.language.length > 5) {
      newErrors.language = "Language code must be 2-5 characters";
    }

    if (!formData.mpn.trim() && !formData.ean.trim()) {
      newErrors.general = "Either MPN or EAN is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      dispatch(setDistributor(formData.distributorID));
      dispatch(setLanguage(formData.language));
      dispatch(setProduct_mpn(formData.mpn));
      dispatch(setProduct_ean(formData.ean));
      dispatch(setProduct_brand(""));

      onSubmit({
        ...formData,
        live: Number(formData.live),
      });
      onClose();
    }
  };

  const handleLanguageSuggestionSelect = (option) => {
    const lang = extractLanguageCode(option);
    setFormData((prev) => ({ ...prev, language: lang }));
    setShowLanguageSuggestions(false);
  };

  // Filter language options based on current input
  const filteredLanguageOptions = languageOptions.filter(
    (option) =>
      option.toLowerCase().includes(formData.language.toLowerCase()) ||
      extractLanguageCode(option)
        .toLowerCase()
        .includes(formData.language.toLowerCase())
  );

  // Create sorted options with selected language at the top
  const sortedLanguageOptions = formData.language
    ? moveToTop(
        filteredLanguageOptions,
        filteredLanguageOptions.find(
          (opt) => extractLanguageCode(opt) === formData.language
        )
      )
    : filteredLanguageOptions;

  if (!isOpen) return null;

  return (
    <div className="fixed text-lg inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl box-border shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 scrollbar-gutter-stable scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400">
        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-green-50 to-green-100 rounded-t-2xl">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-green-400 to-green-500 rounded-full">
              <FaInfo className="h-5 w-5 text-black" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">
              Product Information
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-white/50 rounded-full"
          >
            <FaTimes className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-sm text-gray-700">
              Please provide information for:{" "}
              <span className="font-semibold text-green-800">
                {productName}
              </span>
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label
                htmlFor="distributorID"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Distributor ID *
              </label>
              <input
                type="text"
                id="distributorID"
                name="distributorID"
                value={formData.distributorID}
                onChange={handleInputChange}
                className={`w-full px-4 py-1 border-1 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-all duration-200 ${
                  errors.distributorID
                    ? "border-red-400 bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                placeholder="Enter distributor ID (e.g., 9200)"
              />
              {errors.distributorID && (
                <p className="text-red-500 text-sm mt-2 flex items-center">
                  <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                  {errors.distributorID}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="mpn"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                MPN (Manufacturer Part Number)
              </label>
              <input
                type="text"
                id="mpn"
                name="mpn"
                value={formData.mpn}
                onChange={handleInputChange}
                className={`w-full px-4 py-1 border-1 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-all duration-200 ${
                  errors.mpn
                    ? "border-red-400 bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                placeholder="Enter MPN (e.g., WAN28081GB)"
              />
              {errors.mpn && (
                <p className="text-red-500 text-sm mt-2 flex items-center">
                  <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                  {errors.mpn}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="ean"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                EAN (European Article Number)
              </label>
              <input
                type="text"
                id="ean"
                name="ean"
                value={formData.ean}
                onChange={handleInputChange}
                className={`w-full px-4 py-1 border-1 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-all duration-200 ${
                  errors.ean
                    ? "border-red-400 bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                placeholder="Enter EAN"
              />
              {errors.ean && (
                <p className="text-red-500 text-sm mt-2 flex items-center">
                  <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                  {errors.ean}
                </p>
              )}
            </div>

            <div className="relative" ref={languageInputRef}>
              <label
                htmlFor="language"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Language Code *
              </label>
              <input
                type="text"
                id="language"
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                onFocus={() => setShowLanguageSuggestions(true)}
                className={`w-full px-4 py-1 border-1 rounded-xl focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-all duration-200 ${
                  errors.language
                    ? "border-red-400 bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                placeholder="Enter language code (e.g., en, fr, de, es)"
                maxLength={10}
              />

              {showLanguageSuggestions && (
                <div
                  ref={suggestionsRef}
                  className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto"
                >
                  <div className="py-2">
                    {sortedLanguageOptions.length > 0 ? (
                      sortedLanguageOptions.map((option) => {
                        const code = extractLanguageCode(option);
                        return (
                          <div
                            key={option}
                            className={`px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center ${
                              formData.language === code ? "bg-green-50" : ""
                            }`}
                            onClick={() =>
                              handleLanguageSuggestionSelect(option)
                            }
                          >
                            <span className="font-normal text-sm text-gray-500 w-auto">
                              {option}
                            </span>
                            {formData.language === code && (
                              <FaCheck className="ml-auto text-green-500" />
                            )}
                          </div>
                        );
                      })
                    ) : (
                      <div className="px-4 py-2 text-gray-500">
                        No matching languages found
                      </div>
                    )}
                  </div>
                </div>
              )}

              <p className="text-xs text-gray-500 mt-1">
                Type a language code or select from suggestions
              </p>

              {errors.language && (
                <p className="text-red-500 text-sm mt-2 flex items-center">
                  <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                  {errors.language}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="live"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                Live Mode *
              </label>
              <select
                id="live"
                name="live"
                value={formData.live}
                onChange={handleInputChange}
                className={`w-full px-4 py-1 border-1 rounded-xl focus:outline-none focus:ring-1 focus:ring-green-400 focus:border-green-400 transition-all duration-200 ${
                  errors.live
                    ? "border-red-400 bg-red-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <option value="1">1 - Live Mode (Production)</option>
                <option value="0">0 - Test Mode (Development)</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Select 1 for production environment or 0 for testing/development
              </p>
              {errors.live && (
                <p className="text-red-500 text-sm mt-2 flex items-center">
                  <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
                  {errors.live}
                </p>
              )}
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
            <p className="text-xs text-gray-600">
              <span className="font-semibold">Required fields:</span>{" "}
              Distributor ID, Language Code, Live Mode, and either MPN or EAN
              must be provided.
              <br />
              <span className="font-semibold">Language codes:</span> Use
              standard ISO codes like en, fr, de, es, it, etc.
              <br />
              <span className="font-semibold">Live Mode:</span> Use 1 for
              production, 0 for testing.
            </p>
          </div>

          {errors.general && (
            <p className="text-red-500 text-sm flex items-center">
              <span className="w-1 h-1 bg-red-500 rounded-full mr-2"></span>
              {errors.general}
            </p>
          )}

          <div className="flex space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-2 border-1 border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-2 bg-gradient-to-r from-green-400 to-green-500 text-black rounded-xl hover:from-green-500 hover:to-green-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Continue
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FlixParamsModal;