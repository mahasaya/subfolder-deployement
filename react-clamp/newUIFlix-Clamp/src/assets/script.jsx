// if (typeof (flixJsCallbacks) === "object" && typeof window.flixJsCallbacks.reset != 'undefined')
//   window.flixJsCallbacks.reset();

import { useSelector } from "react-redux";

  // const {distributor,language,product_mpn,product_ean,product_brand} =useSelector((state)=>state.flixParams) 
  // const handleProductView = ({
  //   distributor,
  //   language,
  //   product_mpn = '',
  //   product_ean = '',
  //   product_brand = '',
  // }) => {
  //   // ✅ Validate required parameters
  //   if (!distributor || !language || (!product_mpn && !product_ean)) {
  //     console.error('Missing required parameters: distributor, language, and either product_mpn or product_ean');
  //     return;
  //   }

  //   // ✅ Check if script with same data-* attributes already exists
  //   const existingScript = Array.from(document.querySelectorAll('script[src="/js/loader.js"]')).find((script) => {
  //     return (
  //       script.getAttribute('data-flix-distributor') === distributor &&
  //       script.getAttribute('data-flix-language') === language &&
  //       (script.getAttribute('data-flix-mpn') === product_mpn ||
  //        script.getAttribute('data-flix-ean') === product_ean)
  //     );
  //   });

  //   if (existingScript) {
  //     console.log('Matching flix script already exists in DOM. Skipping injection.');
  //     return;
  //   }

  //   // ✅ Reset flixJsCallbacks if available
  //   if (typeof window.flixJsCallbacks === 'object' && typeof window.flixJsCallbacks.reset === 'function') {
  //     window.flixJsCallbacks.reset();
  //   }

  //   // ✅ Inject new script
  //   const flixScript = document.createElement('script');
  //   flixScript.type = 'text/javascript';
  //   flixScript.async = true;
  //   flixScript.setAttribute('data-flix-distributor', distributor);
  //   flixScript.setAttribute('data-flix-language', language);
  //   flixScript.setAttribute('data-flix-brand', product_brand);
  //   flixScript.setAttribute('data-flix-ean', product_ean);
  //   flixScript.setAttribute('data-flix-mpn', product_mpn);
  //   flixScript.setAttribute('data-flix-inpage', 'flix-inpage');
  //   flixScript.setAttribute('data-flix-button', 'flix-minisite');
  //   flixScript.setAttribute('data-flix-price', '');
  //   flixScript.src = '//media.flixfacts.com/js/loader.js';

  //   document.head.appendChild(flixScript);
  // };
//     var product_mpn = "";//either this
//     var product_ean = "5413184002862";//or this
//     var product_brand = "";
//     var distributor = "6";//important
//     var language = "de";//important
//     var headID = document.getElementsByTagName("head")[0];
//     var flixScript = document.createElement('script');
//     flixScript.type = 'text/javascript';
//     flixScript.async = true;
//     flixScript.setAttribute('data-flix-distributor', distributor);
//     flixScript.setAttribute('data-flix-language', language);
//     flixScript.setAttribute('data-flix-brand', product_brand);
//     flixScript.setAttribute('data-flix-ean', product_ean);
//     flixScript.setAttribute('data-flix-mpn', product_mpn);
//     flixScript.setAttribute('data-flix-inpage', 'flix-inpage');
//     flixScript.setAttribute('data-flix-button', 'flix-minisite');
//     flixScript.setAttribute('data-flix-price', '');
//     flixScript.src = '//media.flixfacts.com/js/loader.js';
//     headID.appendChild(flixScript);

// utils/myFunction.js

export function fliXScript({distributor,language,product_mpn,product_ean,product_brand,live}) {
    
  // Your logic here
if (!distributor || !language || (!product_mpn && !product_ean)) {
    console.error('Missing required parameters: distributor, language, and either product_mpn or product_ean');
    return;
  }

  // ✅ Check if script with same data-* attributes already exists
  const existingScript = Array.from(document.querySelectorAll('script[src="/js/loader.js"]')).find((script) => {

    return (
      script.getAttribute('data-flix-distributor') === distributor &&
      script.getAttribute('data-flix-language') === language &&
      (script.getAttribute('data-flix-mpn') === product_mpn ||
       script.getAttribute('data-flix-ean') === product_ean)
    );
  });
 
  if (existingScript) {
    console.log('Matching flix script already exists in DOM. Skipping injection.');
    return;
  }
 
  // ✅ Reset flixJsCallbacks if available
  if (typeof window.flixJsCallbacks === 'object' && typeof window.flixJsCallbacks.reset === 'function') {
    window.flixJsCallbacks.reset();
  }
 
  // ✅ Inject new script
  const flixScript = document.createElement('script');
  flixScript.type = 'text/javascript';
  flixScript.async = true;
  flixScript.setAttribute('data-flix-distributor', distributor);
  flixScript.setAttribute('data-flix-language', language);
  flixScript.setAttribute('data-flix-brand', product_brand);
  flixScript.setAttribute('data-flix-ean', product_ean);
  flixScript.setAttribute('data-flix-mpn', product_mpn);
  flixScript.setAttribute('data-flix-inpage', 'flix-inpage');
  flixScript.setAttribute('data-flix-button', 'flix-minisite');
  flixScript.setAttribute('data-flix-price', '');
if(distributor === "2298"){
    if(live === "1" ){
    flixScript.src='https://media.flixsyndication.net/delivery/js/loader-embed-v2.js' 
  }else{
    flixScript.src = "https://demo.flix360.io/performance/modularvnew/js/embedv2.js?v=v3v23&flix-webp=1"
    console.log("delivery-alpha ran")
  }
}else{
  if(live === "1" ){
    flixScript.src='//media.flixfacts.com/js/loader.js' 
  }else{
    flixScript.src = "//delivery-alpha.flix360.io/js/loader-alpha.js"
    console.log("delivery-alpha ran")
  }
}

  // Add onload handler
  flixScript.onload = function() {
    console.log('Flix script loaded successfully');
  };
  
  // Add onerror handler
  flixScript.onerror = function() {
    console.error('Failed to load Flix script');
  };
 
  document.head.appendChild(flixScript);

  // No return
}

