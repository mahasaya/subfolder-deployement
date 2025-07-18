import React, { useRef, useEffect, useState } from "react";
import SearchBar from "../Core/NavBar/SearchBar";
import FlixLogo from "../../assets/FlixLogo";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillBasketFill, BsList } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { bannerNav } from "../../assets/dummyData";
import IconText from "../Core/NavBar/IconText";
import { highlightBarData } from "../../assets/dummyData";
import useChangeURL from "../Hooks/useChangeURL";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { motion } from "motion/react";
// const SLIDE_INTERVAL = 5000;
const NavBar = () => {
  const navigate = useNavigate();
  const indexes = useChangeURL();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showDropdowm, setShowDropdown] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const containerRef = useRef(null);

  const items = [...highlightBarData];
  const totalSlides = items.length;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => prev + 1);
  //   }, SLIDE_INTERVAL);

  //   return () => clearInterval(interval);
  // }, []);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const slideWidth = window.innerWidth;

  //   container.style.transition = "transform 0.5s ease-in-out";
  //   container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  //   if (currentIndex === totalSlides) {
  //     setTimeout(() => {
  //       container.style.transition = "none";
  //       container.style.transform = "translateX(0px)";
  //       setCurrentIndex(0);
  //     }, 500);
  //   }
  // }, [currentIndex, totalSlides]);

  const handleClick = (url) => {
    navigate(url);
    setMobileMenuOpen(false);
  };
  return (
    <>
      {/* Highlight Bar */}
      {/* <div className="py-3 flex flex-col justify-center items-center w-full bg-[#1D1D1D] text-white">
        <div className="flex w-full overflow-hidden pb-2">
          <div ref={containerRef} className="flex flex-nowrap">
            {[...items, items[0]].map((data, index) => (
              <div
                key={index}
                className="w-screen flex-shrink-0 flex justify-center"
              >
                <IconText
                  Icon={data.Icon}
                  textCap={data.textPrim}
                  textSmall={data.textSecondary}
                  mobile={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div> */}
      <motion.div
        initial={{ transform: "translateY(-300px)" }}
        animate={{ transform: "translateY(0)" }}
        transition={{
          type: "spring",
          bounce: 0.25,
          duration: 0.8,
        }}
      >
        <div className="flex pt-5 bg-black flex-col">
          {/* Top Bar - Mobile Friendly */}
          <div className="flex flex-col gap-5 md:flex-row md:gap-0 w-full py-2.5 justify-between items-center px-4 sm:px-5">
            <div className="flex items-center justify-between w-full mr-4 md:w-auto">
              <FlixLogo clickFunc={() => handleClick("/")} />

              {/* Mobile Menu Button */}
              {mobileMenuOpen ? (
                <button
                  className="md:hidden text-white text-2xl"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <IoClose color="white" size={24} />
                </button>
              ) : (
                <button
                  className="md:hidden text-white text-2xl"
                  onClick={() => setMobileMenuOpen(true)}
                >
                  <BsList />
                </button>
              )}
            </div>

            <div
              className={`${
                mobileMenuOpen ? "flex" : "hidden"
              }  justify-between md:flex flex-col md:flex-row w-full md:w-auto items-center gap-4 `}
            >
              <div className="flex gap-8 py-3 md:py-0">
                <IoPersonSharp
                  onClick={() => handleClick("profile")}
                  className="text-white hover:text-[#41E886] text-xl cursor-pointer"
                />
                <BsFillBasketFill
                  onClick={() => handleClick("cart")}
                  className="text-white hover:text-[#41E886] text-xl cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Desktop Banner Navigation */}
          <div className="hidden md:flex w-full py-4 items-center lg:px-3 px-3 ">
            <div className="lg:w-[70%] w-full mx-auto flex flex-row gap-4 md:w-[90%] md:gap-0 justify-between items-center">
              {bannerNav.map((data, index) => (
                <span
                  key={index}
                  className="uppercase hover:text-[#41E886]  text-white font-[700] text-sm lg:text-base cursor-pointer hover:opacity-75 transition-opacity"
                >
                  {data}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#2d2d2d] w-full py-3 px-5">
            <div className="flex flex-col gap-4">
              {bannerNav.map((data, index) => (
                <span
                  key={index}
                  onClick={() => handleClick(`/${data.split(" ").join("-")}`)}
                  className="uppercase text-white font-[700] text-sm cursor-pointer py-1 -b"
                >
                  {data}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Breadcrumb */}
        <div className="w-full bg-black border-t border-b border-gray-600 py-2 flex items-center justify-start px-4 md:px-10 lg:px-20">
          <span className="text-xs  font-medium">
            <Link to="/" className="text-white hover:text-[#41E886]">
              Home
            </Link>{" "}
            <span className="text-white hover:text-[#41E886] capitalize">{` ${indexes}`}</span>
          </span>
        </div>
      </motion.div>
    </>
  );
};

export default NavBar;
