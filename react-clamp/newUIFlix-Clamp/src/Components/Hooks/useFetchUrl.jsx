import fall_back_img from "../../assets/images/fall_back_product_img.jpg";
//embed.json / sis.json
const useFetchUrl = (setProductImg ,setProductName) => {
  // Intercept fetch()
  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    const url = typeof args[0] === 'string' ? args[0] : args[0]?.url;

    if (url && (url.includes('t.json')||url.includes('embedv2-t.json')||url.includes('sis.json'))) {
      const response = await originalFetch(...args);

      
      const clonedResponse = response.clone();
      clonedResponse
        .json()
        .then((data) => {
          const imgName = data?.[0]?.product_meta?.product_title || "Product Name"
          setProductName(imgName)
          const productImgUrl =
            data?.[0]?.modules?.image_gallery?.images?.[0]?.img_1000_url || fall_back_img
            setProductImg(productImgUrl)
        })
        .catch((err) =>
          console.warn('Failed to parse t.json fetch response:', err)
        );

      return response;
    }

    return originalFetch(...args);
  };

  // Intercept XMLHttpRequest
  const originalXHROpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url, ...rest) {
    this._isTJson = url.includes('t.json'); // custom flag
    return originalXHROpen.call(this, method, url, ...rest);
  };

  const originalXHRSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.send = function (...args) {
    if (this._isTJson) {
      const onLoad = () => {
        try {
          const json = JSON.parse(this.responseText);
          console.log('t.json XHR response:', json);
        } catch (err) {
          console.warn('Failed to parse t.json XHR response:', err);
        }
      };

      this.addEventListener('load', onLoad);
    }

    return originalXHRSend.apply(this, args);
  };

  // Return a cleanup function if needed
  return () => {
    window.fetch = originalFetch;
    XMLHttpRequest.prototype.open = originalXHROpen;
    XMLHttpRequest.prototype.send = originalXHRSend;
  };
};

export default useFetchUrl;
