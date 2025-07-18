import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const useChangeURL = () => {
  const [url, setURL] = useState("");
    const location = useLocation();
  useEffect(() => {
    const path = location.pathname.replaceAll("/","> ")
    setURL(path)
  }, [location]);

  return url;
};

export default useChangeURL;
