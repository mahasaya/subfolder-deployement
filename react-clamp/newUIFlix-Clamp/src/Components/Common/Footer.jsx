import React from 'react';
import FlixLogo from '../../assets/FlixLogo';
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  const footerLinks = [
    {
      title: 'Retailer',
      items: ["Curry's", 'Darty fr', 'John Lewis & Partners', 'Harvey Norman', "Media Market"],
    },
    {
      title: 'Brand',
      items: [
        'Samsung',
        'Intel',
        'LG',
        'Sony',
        'Phillips',
        'dyson'
      ],
    },
    {
      title: 'Our Story',
      items: ['Our Story', 'Careers', 'Our Teams', 'Contact Us'],
    },
  ];

  const badgeImages = [
    (<FaLinkedin color='oklch(90.7% 0.022 261.325)'  className={`h-[37px] w-[50px]`} alt="Trust badge"/>),
    (<FaInstagram color='oklch(90.7% 0.022 261.325)' className={`h-[37px] w-[50px]`} alt="Trust badge"/>),
    (<RiTwitterXFill color='oklch(90.7% 0.022 261.325)' className={`h-[37px] w-[50px]`} alt="Trust badge"/>),
    (<FaFacebookSquare color='oklch(90.7% 0.022 261.325)' className={`h-[37px] w-[50px]`} alt="Trust badge"/>),
    (<FaYoutube color='oklch(90.7% 0.022 261.325)' className={`h-[37px] w-[50px]`}alt="Trust badge"/>),
  ];

  return (
    <footer className="w-full bg-black py-12 px-4 sm:px-8 lg:px-12">
      {/* Logo and Links Section - Responsive Stacking */}
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-8 max-w-7xl mx-auto">
        {/* Logo - Centered on mobile, left on desktop */}
        <div className="w-full md:w-auto flex justify-center md:justify-start">
          <FlixLogo className="h-[72px] w-[265px] max-w-full text-[black]" />
        </div>

        {/* Links Grid - Responsive columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-auto">
          {footerLinks.map((section, index) => (
            <div key={index} className="text-center sm:text-left">
              <h5 className="text-white text-[20px] font-bold mb-4">
                {section.title}
              </h5>
              <ul className="list-none space-y-2">
                {section.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-white text-[17px] font-medium hover:text-[#41E886] hover:translate-x-1 transition-all"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright + Badges Section - Responsive Stacking */}
      <div className="max-w-7xl mx-auto mt-12 pb-8 border-b border-gray-400/40 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright Text - Responsive alignment */}
        <p className="text-gray-400 text-sm text-center md:text-left max-w-xs">
          Copyright All Rights Reserved © 2024 Flixmedia Limited.
          Registered in England. #05134871
        </p>

        {/* Badges - Responsive wrapping */}
        <div className="flex flex-wrap justify-center gap-3">
          {badgeImages.map((img, i) => (
            <div key={i}>{img}</div>
          ))}
        </div>

        {/* Links - Responsive alignment */}
        <p className="text-gray-400 text-sm text-center max-w-md">
          FAQs | Privacy & Cookie Notice | Modern Slavery Act | Tax Statement
        </p>
      </div>

      {/* Final Note - Responsive alignment */}
      <div className="max-w-7xl mx-auto w-full pt-4">
        <h2 className="text-white text-lg font-semibold text-center md:text-left">
          
        </h2>
      </div>
    </footer>
  );
};

export default Footer;