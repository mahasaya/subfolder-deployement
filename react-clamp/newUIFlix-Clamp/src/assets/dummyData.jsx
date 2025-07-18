import { HiCurrencyPound } from "react-icons/hi2";
import { FaTruck } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";

import imageOne from "./images/Sldier-Images/top-cat-hp-summer-tech.webp";
import imageTwo from "./images/Sldier-Images/2.webp";
import imageThree from "./images/Sldier-Images/3.webp";
import imageFour from "./images/Sldier-Images/4.webp";
import imageFive from "./images/Sldier-Images/5.webp";
import imageSix from "./images/Sldier-Images/6.webp";
import imageSeven from "./images/Sldier-Images/7.webp";
import imageEight from "./images/Sldier-Images/8.webp";
import imageNine from "./images/Sldier-Images/9.webp";
import imageTen from "./images/Sldier-Images/10.webp";
import imageEleven from "./images/Sldier-Images/11.webp";
import imageTwelve from "./images/Sldier-Images/12.webp";

import productImg from "./images/img-feature-big.jpg";
import secProductImg from "./images/img-product-small.jpg";

import bannerPhoneImg from "./images/Product-Images/phone-banner.webp";
import bannerSecPhoneImg from "./images/Product-Images/phone-banner-2.webp";
import laptopPhoneImg from "./images/Product-Images/lap-banner.webp";
import laptopSecPhoneImg from "./images/Product-Images/lap-banner-2.webp";
import tvImg from "./images/Product-Images/tv-banner.webp";

export const bannerNav = [
  "kitchen appliances",
  "small appliances",
  "tv & entertainment",
  "computing",
  "phones",
];
export const highlightBarData = [
  {
    Icon: <HiCurrencyPound size={30} color="#41e886" />,
    textPrim: "Price Promise",
    textSecondary: "always get the best price",
  },
  {
    Icon: <FaTruck size={30} color="#41e886" />,
    textPrim: "free delivery",
    textSecondary: "on 1000's of products",
  },
  {
    Icon: <FaPiggyBank size={30} color="#41e886" />,
    textPrim: "flexi pay",
    textSecondary: "spread the cost with finance",
  },
  {
    Icon: <FaVideo size={30} color="#41e886" />,
    textPrim: "shop live",
    textSecondary: "video call an expert to help you shop",
  },
];

export const SliderProductData = [
  {
    img: imageOne,
    label: "summer tech",
    tag: "small-appliances/summer-tech",
  },
  {
    img: imageTwo,
    label: "TVs",
    tag: "tv-&-entertainment/tv",
  },
  {
    img: imageThree,
    label: "laptops",
    tag: "computing/laptops",
  },
  {
    img: imageFour,
    label: "mobile phones",
    tag: "phones/phones",
  },
  {
    img: imageFive,
    label: "washing machines",
    tag: "kitchen-appliances/washing-machines",
  },
  {
    img: imageSix,
    label: "smart watches",
    tag: "small-appliances/smart-watches",
  },
  {
    img: imageSeven,
    label: "vaccume cleaners",
    tag: "kitchen-appliances/vaccume-cleaners",
  },
  {
    img: imageEight,
    label: "iPads,tablet & eReaders",
    tag: "phones/tabs",
  },
  {
    img: imageNine,
    label: "digital cameras",
    tag: "small-appliances/digital-cameras",
  },
  {
    img: imageTen,
    label: "fridge freezers",
    tag: "kitchen-appliances/fridge-freezers",
  },
  {
    img: imageEleven,
    label: "console gaming",
    tag: "tv-&-entertainment/console-gaming",
  },
  {
    img: imageTwelve,
    label: "headphones",
    tag: "small-appliances/headphones",
  },
];

export const ProductRecommendation = [
  {
    id: 1,
    name: "Product name/model, title",
    tag: "small-appliances/headphones",
    img: productImg,
    price: "£199.00",
    save: "50.00",
  },
  {
    id: 2,
    name: "Product name/model, title",
     tag: "kitchen-appliances/fridge-freezers",
    img: productImg,
    price: "£299.00",
    save: "30.00",
  },
  {
    id: 3,
    name: "Product name/model, title",
     tag: "tv-&-entertainment/console-gaming",
    img: productImg,
    price: "£499.00",
    save: "40.00",
  },
  {
    id: 4,
    name: "Product name/model, title",
     tag: "small-appliances/digital-cameras",
    img: productImg,
    price: "£699.00",
    save: "50.00",
  },
  {
    id: 5,
    name: "Product name/model, title",
     tag: "kitchen-appliances/washing-machines",
    img: productImg,
    price: "£699.00",
  },
  {
    id: 6,
    name: "Product name/model, title",
    tag: "phones/phones",
    img: productImg,
    price: "£699.00",
  },
  {
    id: 7,
    name: "Product name/model, title",
    tag: "tv-&-entertainment/tv",
    img: productImg,
    price: "£699.00",
  },
];

export const ProductDetails = [
  {
    tag: "phones",
    details: [
      {
        id: 1,
        name: "iPhone 16 Pro",
        img: productImg,
        emi: {
          price: "£699.00",
          save: "50.00",
          text: "From £28.32 per month for 36 months*",
          offers:
            "Get an extra £100 when you trade-in any eligible working iPhone model",
          banner: [bannerPhoneImg, bannerSecPhoneImg],
        },
        description: [
          "iOS 18",
          "Apple Intelligence",
          '6.1" Super Retina HDR display',
          "Dual 48 MP / 12 MP main cameras",
          "12 MP front camera",
        ],
      },
    ],
  },
  {
    tag: "laptops",
    details: [
      {
        id: 1,
        name: "Dell XPS 13",
        img: productImg,
        secImg: secProductImg,
        emi: {
          price: "£499.00",
          save: "300.00",
          text: "From £12.32 per month for 48 months*",
          offers: "FREE next day delivery on this product",
          banner: [laptopPhoneImg, laptopSecPhoneImg],
        },
        description: [
          "Windows 11",
          "Intel® Evo™ platform",
          "Intel® Core™ i5-13500H Processor",
          "RAM:8 GB / Storage: 512 GB SSD",
          "2.2K screen",
        ],
      },
    ],
  },
  {
    tag: "tv",
    details: [
      {
        id: 1,
        name: "LG OLED C3",
        img: productImg,
        secImg: secProductImg,
        emi: {
          price: "£1,079.00",
          save: "300.00",
          text: "From £43.37 per month for 36 months*",
          offers:
            "Get £50 off the LG US20A 2.0 Compact Sound Bar when bought with any TV. Use code US20A50.",
          banner: [tvImg],
        },
        description: [
          "Advanced OLED α9 AI processor with AI Super Upscaling",
          "LG SELF-LIT OLED evo",
          "HDMI 2.1 x 4",
          "5 year guarantee",
          "LG’s webOS with top streaming apps",
        ],
      },
    ],
  },
  {
    tag: "summer-tech",
    details: [
      {
        id: 1,
        name: "Portable Air Cooler X200",
        img: productImg,
        emi: {
          price: "£149.00",
          save: "20.00",
          text: "From £6.21 per month for 24 months*",
          offers: "Perfect for beating the summer heat",
          banner: [bannerPhoneImg, bannerSecPhoneImg],
        },
        description: [
          "3-speed cooling",
          "Water tank: 4.5L",
          "Remote control included",
          "Energy efficient design",
          "Portable and lightweight",
        ],
      },
    ],
  },
  {
    tag: "washing-machines",
    details: [
      {
        id: 1,
        name: "Samsung EcoBubble 9kg",
        img: productImg,
        emi: {
          price: "£429.00",
          save: "70.00",
          text: "From £17.87 per month for 24 months*",
          offers: "Free installation & recycling",
          banner: [bannerPhoneImg, bannerSecPhoneImg],
        },
        description: [
          "9kg capacity",
          "Digital Inverter Motor",
          "15-minute quick wash",
          "EcoBubble™ technology",
          "SmartThings app compatible",
        ],
      },
    ],
  },
  {
    tag: "smart-watches",
    details: [
      {
        id: 1,
        name: "Galaxy Watch 6",
        img: productImg,
        emi: {
          price: "£249.00",
          save: "30.00",
          text: "From £10.37 per month for 24 months*",
          offers: "Free strap with purchase",
          banner: [bannerPhoneImg, bannerSecPhoneImg],
        },
        description: [
          "Heart rate & sleep tracking",
          "GPS & fitness features",
          "1.4-inch AMOLED display",
          "Bluetooth + LTE",
          "Water resistant",
        ],
      },
    ],
  },
  {
    tag: "vaccume-cleaners",
    details: [
      {
        id: 1,
        name: "Dyson V15 Detect",
        img: productImg,
        emi: {
          price: "£599.00",
          save: "100.00",
          text: "From £24.95 per month for 24 months*",
          offers: "Comes with 3-year warranty",
          banner: [bannerPhoneImg, bannerSecPhoneImg],
        },
        description: [
          "Laser reveals microscopic dust",
          "Run time: 60 mins",
          "Advanced filtration",
          "Digital display",
          "Powerful suction",
        ],
      },
    ],
  },
  {
    tag: "fridge-freezers",
    details: [
      {
        id: 1,
        name: "LG InstaView Door-in-Door",
        img: productImg,
        emi: {
          price: "£1,299.00",
          save: "200.00",
          text: "From £54.12 per month for 24 months*",
          offers: "Free delivery & old appliance removal",
          banner: [bannerPhoneImg, bannerSecPhoneImg],
        },
        description: [
          "Capacity: 635L",
          "DoorCooling+ & LINEAR Cooling™",
          "Smart Diagnosis™",
          "Inverter Linear Compressor",
          "Frost-free technology",
        ],
      },
    ],
  },
  {
    tag: "digital-cameras",
    details: [
      {
        id: 1,
        name: "Canon EOS R50 Mirrorless Camera",
        img: productImg,
        emi: {
          price: "£749.00",
          save: "100.00",
          text: "From £31.21 per month for 24 months*",
          offers: "Free memory card & camera bag included",
          banner: [bannerPhoneImg, bannerSecPhoneImg],
        },
        description: [
          "24.2MP APS-C CMOS Sensor",
          "4K 30p Video Recording",
          "Dual Pixel CMOS AF II",
          "Compact & Lightweight Design",
          "Built-in Wi-Fi and Bluetooth",
        ],
      },
    ],
  },
  {
    tag: "console-gaming",
    details: [
      {
        id: 1,
        name: "PlayStation 5",
        img: productImg,
        emi: {
          price: "£479.00",
          save: "20.00",
          text: "From £19.95 per month for 24 months*",
          offers: "Includes free game bundle",
          banner: [bannerPhoneImg, bannerSecPhoneImg],
        },
        description: [
          "825GB SSD",
          "4K gaming support",
          "DualSense Wireless Controller",
          "Ray tracing technology",
          "Haptic feedback & adaptive triggers",
        ],
      },
    ],
  },
  {
    tag: "headphones",
    details: [
      {
        id: 1,
        name: "Sony WH-1000XM5",
        img: productImg,
        emi: {
          price: "£349.00",
          save: "50.00",
          text: "From £14.54 per month for 24 months*",
          offers: "Noise Cancelling King - Free case included",
          banner: [bannerPhoneImg, bannerSecPhoneImg],
        },
        description: [
          "Industry-leading noise cancellation",
          "Up to 30 hours battery life",
          "Multipoint connection",
          "Speak-to-Chat feature",
          "Lightweight design",
        ],
      },
    ],
  },
];

export const languageOptions =[
    "Africa (English) (a2)",
    "Africa (French) (a3)",
    "Albania (al)",
    "Albanian (Kosovo) (g2)",
    "Arabic (Bahrain) (bh)",
    "Arabic (Egypt) (a1)",
    "Arabic (Jordan) (jo)",
    "Arabic (Kuwait) (kw)",
    "Arabic (Lebanon) (l3)",
    "Arabic (Oman) (om)",
    "Arabic (Qatar) (qa)",
    "Arabic (Saudi Arabia) (ar)",
    "Arabic (UAE) (ae)",
    "Belarus (by)",
    "Bosnia-Herzegowina (English) (b6)",
    "Bulgaria (English) (b2)",
    "Bulgarian (bg)",
    "Chinese (zh)",
    "Chinese (Hong Kong) (hk)",
    "Chinese (Taiwan) (tw)",
    "Costa Rica (Spanish) (cr)",
    "Croatian (hr)",
    "Croatian (Bosnia) (g1)",
    "Czech (cz)",
    "Czech Republic (English) (c2)",
    "Danish (da)",
    "Dominican Republic (Spanish) (do)",
    "Dubai (English) (u3)",
    "Dutch (nl)",
    "Dutch (Belgium) (be)",
    "English (Australia) (au)",
    "English (Bahrain) (c1)",
    "English (Bangladesh) (b1)",
    "English (Bolivia) (d7)",
    "English (Canada) (b5)",
    "English (China) (e9)",
    "English (Costa Rica) (c5)",
    "English (Croatia) (e8)",
    "English (Dominican Republic) (c6)",
    "English (Ecuador) (d9)",
    "English (Egypt) (eg)",
    "English (El Salvador) (t5)",
    "English (EMEA) (eu)",
    "English (Estonia) (d4)",
    "English (Ethiopia) (ee)",
    "English (German) (d5)",
    "English (Ghana) (gh)",
    "English (Greece) (d1)",
    "English (Guatemala) (d8)",
    "English (Honduras) (c7)",
    "English (Hong Kong) (e1)",
    "English (India) (in)",
    "English (Indonesia) (e2)",
    "English (Iraq) (i1)",
    "English (Ireland) (ie)",
    "English (Israel) (e3)",
    "English (Jamaica) (c8)",
    "English (Jordan) (j1)",
    "English (Kenya) (ke)",
    "English (Korea) (e4)",
    "English (Kuwait) (k1)",
    "English (Latin America) (t1)",
    "English (Lebanon) (lb)",
    "English (Malaysia) (b3)",
    "English (Myanmar) (m1)",
    "English (New Zealand) (nz)",
    "English (Nicaragua) (c9)",
    "English (Nigeria) (ng)",
    "English (Oman) (o1)",
    "English (Pakistan) (pk)",
    "English (Panama) (p1)",
    "English (Philippines) (e5)",
    "English (Puerto Rico) (f9)",
    "English (Qatar) (q1)",
    "English (Romania) (d3)",
    "English (Saudi Arabia) (d2)",
    "English (Singapore) (b7)",
    "English (South Africa) (za)",
    "English (Sri Lanka) (s7)",
    "English (Switzerland) (b8)",
    "English (Taiwan) (b9)",
    "English (Thailand) (e6)",
    "English (Trinidad & Tobago) (t4)",
    "English (UAE) (u1)",
    "English (UK) (en)",
    "English (US) (us)",
    "English (Venezuela) (d6)",
    "English (Vietnam) (e7)",
    "Estonian (et)",
    "Filipino (Philippines) (ph)",
    "Finnish (fi)",
    "French  (fr)",
    "French (Belgium) (b4)",
    "French (Canada) (c4)",
    "French (Luxembourg) (l2)",
    "French (Morocco) (ma)",
    "French (Switzerland) (s5)",
    "German (de)",
    "German (Austria) (at)",
    "German (Luxembourg) (l1)",
    "German (Slovenia) (s3)",
    "German (Switzerland) (s4)",
    "Greece (gr)",
    "Greek (el)",
    "Hebrew (il)",
    "Hungarian (hu)",
    "Hungary (English) (h1)",
    "Indonesian (id)",
    "Iraq (iq)",
    "Italian (it)",
    "Italian (Switzerland) (s6)",
    "Japanese (ja)",
    "Kazakhstan (Russian) (kz)",
    "Korean (ko)",
    "Latvian (lv)",
    "Lithuanian (lt)",
    "Macedonian (mk)",
    "Malaysian (my)",
    "Moldova (md)",
    "Moldova (English) (m2)",
    "Montenegro (me)",
    "Montenegro (English) (m3)",
    "Norwegian (no)",
    "Persian (Iran) (ir)",
    "Polish (pl)",
    "Portuguese (pt)",
    "Portuguese (Brazil) (br)",
    "Romanian (ro)",
    "Russia (English) (r1)",
    "Russian (ru)",
    "Serbia (English) (r2)",
    "Serbian (rs)",
    "Slovak (sk)",
    "Slovakia (English) (s1)",
    "Slovene (sl)",
    "Slovenia (English) (s2)",
    "Spanish (es)",
    "Spanish (Argentina) (f4)",
    "Spanish (Bolivia) (bo)",
    "Spanish (Chile) (cl)",
    "Spanish (Colombia) (f5)",
    "Spanish (Ecuador) (ec)",
    "Spanish (El Salvador) (f8)",
    "Spanish (Guatemala) (gu)",
    "Spanish (Honduras) (hn)",
    "Spanish (Jamaica) (jm)",
    "Spanish (Latin America) (t2)",
    "Spanish (Mexico) (mx)",
    "Spanish (Nicaragua) (ni)",
    "Spanish (Panama) (pa)",
    "Spanish (Paraguay) (py)",
    "Spanish (Peru) (pe)",
    "Spanish (Puerto Rico) (f7)",
    "Spanish (Trinidad & Tobago) (tt)",
    "Spanish (Uruguay) (uy)",
    "Spanish (Venezuela) (f6)",
    "Swedish (sv)",
    "Thai (ti)",
    "Turkey (English) (t3)",
    "Turkish (tr)",
    "Ukraine (ua)",
    "Ukraine (Russian) (u2)",
    "Vietnam (Vietnamese) (vn)"
]