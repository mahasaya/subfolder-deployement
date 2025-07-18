// // // src/components/Core/Home/ShopByCategory.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import kitchenImg from "../../../../public/shopbycategpry/kitchen.jpeg"
// import smallImg from "../../../../public/shopbycategpry/others.jfif"
// import tvImg from "../../../../public/shopbycategpry/tv.jfif"
// import laptopImg from "../../../../public/shopbycategpry/laptop.jfif"
// import phoneImg from "../../../../public/shopbycategpry/phone.jfif"
// const ShopByCategory = () => {
//   const [hoveredCategory, setHoveredCategory] = useState(null);
  
//   const categories = [
//     { 
//       name: "kitchen appliances", 
//       path: "/kitchen-appliances",
//       img: kitchenImg,
//     },
//     { 
//       name: "small appliances", 
//       path: "/small-appliances",
//       img: smallImg,
//     },
//     { 
//       name: "tv & entertainment", 
//       path: "/tv-&-entertainment",
//       img: tvImg,
//     },
//     { 
//       name: "computing", 
//       path: "/computing",
//       img: laptopImg,
//     },
//     { 
//       name: "phones", 
//       path: "/phones",
//       img: phoneImg,
//     }
//   ];

//   return (
//     <div className="w-full py-10 px-4 bg-black">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
//             Shop by Category
//           </h2>
//           <p className="text-base text-white max-w-xl mx-auto">
//             Discover our carefully curated collections for every need and lifestyle
//           </p>
//           <div className="mt-6 flex justify-center">
//             <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
//           </div>
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {categories.map((category, index) => (
//             <Link 
//               to={category.path}
//               key={index}
//               className={`group relative block overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in transform hover:-translate-y-1 ${
//                 hoveredCategory === index ? 'ring-2 ring-opacity-50' : ''
//               }`}
//               onMouseEnter={() => setHoveredCategory(index)}
//               onMouseLeave={() => setHoveredCategory(null)}
//             >
//               {/* Image with gradient overlay */}
//               <div className="relative pb-[100%]">
//                 <img 
//                   src={category.img} 
//                   alt={category.name}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
//                 />
//                 <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80 mix-blend-multiply`}></div>
                
//                 {/* Floating circle decoration */}
//                 <div className="absolute top-3 right-3 w-12 h-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
//                   <div className="w-9 h-9 rounded-full bg-white bg-opacity-30 flex items-center justify-center">
//                     <div className="w-6 h-6 rounded-full bg-white"></div>
//                   </div>
//                 </div>
//               </div>
              
//               {/* Category content */}
//               <div className="absolute inset-0 flex flex-col justify-end p-4 text-white">
//                 <h3 className="text-lg font-bold capitalize mb-1 transition-transform duration-300 ease-in-out group-hover:translate-y-0 translate-y-6">
//                   {category.name}
//                 </h3>
                
//                 {/* Animated shop button */}
//                 <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out delay-150 transform group-hover:translate-y-0 translate-y-6">
//                   <button className="mt-3 w-full py-2 px-3 bg-white text-gray-900 font-medium rounded-md shadow-sm hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center text-sm">
//                     Shop Now
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
              
//               {/* Corner decoration */}
//               <div className="absolute top-0 left-0 w-0 h-0 border-t-[50px] border-l-[50px] border-t-white border-l-transparent"></div>
//             </Link>
//           ))}
//         </div>
        
//         {/* View all button */}
//       <div className="mt-12 text-center">
//         <Link 
//           to="/" 
//           className="inline-flex items-center px-8 py-4 bg-[#41E886] text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-[1.03] text-base group"
//         >
//           <span className="mr-2">View All Categories</span>
//           <svg 
//             xmlns="http://www.w3.org/2000/svg" 
//             className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
//             viewBox="0 0 20 20" 
//             fill="currentColor"
//           >
//             <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//           </svg>
//         </Link>
//       </div>
//       </div>
//     </div>
//   );
// };

// export default ShopByCategory;

// src/components/Core/Home/ShopByCategory.jsx



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const ShopByCategory = () => {
//   const [hoveredCategory, setHoveredCategory] = useState(null);
  
//   const categories = [
//     { 
//       name: "kitchen appliances", 
//       path: "/kitchen-appliances",
//       img: "/public/shopbycategpry/kitchen.jpeg",
//     },
//     { 
//       name: "small appliances", 
//       path: "/small-appliances",
//       img: "/public/shopbycategpry/others.jfif",
//     },
//     { 
//       name: "tv & entertainment", 
//       path: "/tv-&-entertainment",
//       img: "/public/shopbycategpry/tv.jfif",
//     },
//     { 
//       name: "computing", 
//       path: "/computing",
//       img: "/public/shopbycategpry/laptop.jfif",
//     },
//     { 
//       name: "phones", 
//       path: "/phones",
//       img: "/public/shopbycategpry/phone.jfif",
//     }
//   ];

//   return (
//     <div className="w-full py-16 px-4 bg-black">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
//             Shop by Category
//           </h2>
//           <p className="text-base text-gray-300 max-w-xl mx-auto">
//             Discover our carefully curated collections for every need and lifestyle
//           </p>
//           <div className="mt-6 flex justify-center">
//             <div className="w-20 h-1 bg-[#41E886] rounded-full"></div>
//           </div>
//         </div>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//           {categories.map((category, index) => (
//             <Link 
//               to={category.path}
//               key={index}
//               className="group relative block overflow-hidden rounded-xl border border-gray-800 hover:border-[#41E886] transition-all duration-300"
//               onMouseEnter={() => setHoveredCategory(index)}
//               onMouseLeave={() => setHoveredCategory(null)}
//             >
//               {/* Image container with glow effect */}
//               <div className="relative pb-[100%]">
//                 <img 
//                   src={category.img} 
//                   alt={category.name}
//                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
//                 />
                
//                 {/* Glow effect on hover */}
//                 <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
//                   <div className="absolute inset-0 bg-[#41E886] blur-lg opacity-30"></div>
//                 </div>
                
//               </div>
              
//               {/* Category content */}
//               <div className="absolute inset-0 flex flex-col justify-end p-4">
//                 <h3 className="text-lg text-center py-1 bg-white font-bold text-black capitalize mb-1">
//                   {category.name}
//                 </h3>
                
//                 {/* Animated shop button */}
//                 <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
//                   <button className="mt-3 w-full py-2 px-3 bg-[#41E886] text-black font-medium rounded-md shadow-sm hover:bg-[#38d078] transition-colors duration-300 flex items-center justify-center text-sm">
//                     Shop Now
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
//                       <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
              
//               {/* Corner decoration */}
//               <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-[#41E886] border-l-transparent"></div>
//             </Link>
//           ))}
//         </div>
        
//         {/* View all button */}
//         <div className="mt-14 text-center">
//           <Link 
//             to="/categories" 
//             className="inline-flex items-center px-8 py-3.5 bg-black border-2 border-[#41E886] text-[#41E886] font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-[1.03] text-base group"
//           >
//             <span className="mr-2">View All Categories</span>
//             <svg 
//               xmlns="http://www.w3.org/2000/svg" 
//               className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
//               viewBox="0 0 20 20" 
//               fill="currentColor"
//             >
//               <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
//             </svg>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopByCategory;


//3rd UI

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import kitchenImg from "../../../assets/images/shopbycategpry/kitchen.jpeg"
import smallImg from "../../../assets/images/shopbycategpry/others.jfif"
import tvImg from "../../../assets/images/shopbycategpry/tv.jfif"
import laptopImg from "../../../assets/images/shopbycategpry/laptop.jfif"
import phoneImg from "../../../assets/images/shopbycategpry/phone.jfif"
const ShopByCategory = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  
  const categories = [
    { 
      name: "kitchen appliances", 
      path: "/kitchen-appliances",
      img: kitchenImg,
    },
    { 
      name: "small appliances", 
      path: "/small-appliances",
      img: smallImg,
    },
    { 
      name: "tv & entertainment", 
      path: "/tv-&-entertainment",
      img: tvImg,
    },
    { 
      name: "computing", 
      path: "/computing",
      img: laptopImg,
    },
    { 
      name: "phones", 
      path: "/phones",
      img: phoneImg,
    }
  ];

  return (
    <div className="w-full py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Shop by Category
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto">
            Discover our carefully curated collections for every need and lifestyle
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-20 h-1 bg-[#41E886] rounded-full"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index}
              className="group flex justify-between flex-col relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Image container with subtle frame */}
              <div className="relative pb-[100%] p-4">
                <div className="absolute inset-4 rounded-lg overflow-hidden border border-gray-100">
                  <img 
                    src={category.img} 
                    alt={category.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-[#41E886] blur-lg opacity-20"></div>
                  </div>
                </div>
                
              </div>
              
              {/* Category content */}
              <div className="p-4 pt-0">
                <h3 className="text-lg font-bold text-gray-900 capitalize mb-3 text-center">
                  {category.name}
                </h3>
                
                {/* Shop button */}
                <div className="opacity-100 group-hover:opacity-100 translate-y-0 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                  <button className="w-full py-2.5 px-3 bg-white border-2 border-[#41E886] text-[#41E886] font-medium rounded-lg shadow-sm hover:bg-[#41E886] hover:text-white transition-all duration-300 flex items-center justify-center text-sm">
                    Shop Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Corner decoration */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-[#41E886] border-l-transparent opacity-20 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          ))}
        </div>
        
        {/* View all button */}
        <div className="mt-14 text-center">
          <Link 
            to="" 
            className="inline-flex items-center px-8 py-3.5 bg-[#41E886] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-[1.03] text-base group"
          >
            <span className="mr-2">View All Categories</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;