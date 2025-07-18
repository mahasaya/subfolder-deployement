import { useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";

import NavBar from "./Components/Common/NavBar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Kitchen from "./pages/kitchen";
import SmallAppliance from "./pages/SmallAppliance";
import Phones from "./pages/Phones";
import TV from "./pages/TV";
import Computing from "./pages/Computing";
import Footer from "./Components/Common/Footer";
import Products from "./Components/Common/Products";
import ScrollToTop from "./assets/ScollTop";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect handler for GitHub Pages fallback
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    const redirect = params.get("redirect");


    if (redirect) {
      const decodedPath = decodeURIComponent(redirect);
      window.history.replaceState(null, '', decodedPath); // now valid
      navigate(decodedPath, { replace: true });
    }
  }, []);


  useEffect(() => {
    const query = location.search;
    if (
      !query &&
      typeof window.flixJsCallbacks === "object" &&
      typeof window.flixJsCallbacks.reset === "function"
    ) {
      window.flixJsCallbacks.reset();
    }
  }, [location]);

  return (
    <>
      <div className="overflow-x-hidden cursor-default min-h-screen w-full bg-black flex flex-col">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/kitchen-appliances" element={<Kitchen />} />
          <Route path="/small-appliances" element={<SmallAppliance />} />
          <Route path="/phones" element={<Phones />} />
          <Route path="/tv-&-entertainment" element={<TV />} />
          <Route path="/computing" element={<Computing />} />

          {/* Product routes */}
          <Route path="/computing/:tag?" element={<Products />} />
          <Route path="/tv-&-entertainment/:tag?" element={<Products />} />
          <Route path="/kitchen-appliances/:tag?" element={<Products />} />
          <Route path="/small-appliances/:tag?" element={<Products />} />
          <Route path="/phones/:tag?" element={<Products />} />
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
