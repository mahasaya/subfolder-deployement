import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = ({ showDropdowm, setShowDropdown, searchInput, setSearchInput, mobile }) => {
  const [searchs, setSearches] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("SearchData");
    if (data) {
      setSearches(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("SearchData", JSON.stringify(searchs));
  }, [searchs]);

  function updateSearch(e) {
    if (e.key === "Enter" && e.target.value.trim()) {
      const newVal = e.target.value.trim();
      setSearches((prev) => (prev.includes(newVal) ? prev : [...prev, newVal]));
      setSearchInput("");
    }
  }

  const filteredSearch = searchInput?.length
    ? searchs.filter((opt) =>
        opt.toLowerCase().includes(searchInput.toLowerCase())
      )
    : searchs;

  function handleChange(e) {
    setSearchInput(e);
  }

  return (
    <div className="fixed text-lg w-screen h-screen inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[9999] p-4">
      <div className="flex-col absolute top-6 w-auto">
        <div
          className={`min-w-[380px] flex justify-between w-[100%] sm:w-[40%] bg-[#41E886] items-center gap-5 ${
            showDropdowm ? "rounded-t-lg" : "rounded-lg"
          } px-3`}
        >
          <input
            onKeyDown={updateSearch}
            onChange={(e) => handleChange(e.target.value)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 150)}
            className={`max-w-[350px] bg-[#41E886] px-2 rounded-3xl text-[black] placeholder-black w-[70%] py-2 appearance-none border-none focus:outline-none`}
            type="text"
            placeholder="Search for the product"
            value={searchInput}
          />
          <CiSearch color="black" size={24} style={{ strokeWidth: 0.5 }} />
        </div>

        {showDropdowm && (
          <div className="min-w-[380px] relative z-100 bottom-0 flex flex-col rounded-b-lg w-[100%] sm:w-[40%] bg-[#41E886] items-center gap-1 px-3 py-2">
            {filteredSearch.map((data,index) => (
              <span
                key={index}
                className="w-full cursor-pointer hover:text-gray-700 px-2"
                onMouseDown={() => {
                  setSearchInput(data);
                  setShowDropdown(false);
                }}
              >
                {data}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
