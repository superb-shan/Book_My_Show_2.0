import React from "react";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import Search from "./Search";
import  { useState } from "react";
import axios from "axios";




function NavSm() {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It All Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center cursor-pointer hover:text-white">
            Delhi NCR <BiChevronDown />
          </span>
        </div>
        <div className="w-8 h-8">
          <Search className="w-full h-full" />
        </div>
      </div>
    </>
  );
}

function NavMd() {
  return (
    <>
      <div className="flex items-center w-full gap-3">
        <div className="w-10 h-10">
          <img
            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
          <Search />
          <input
            type="search"
            className="w-full bg-transparent border-none focus:outline-none"
            placeholder="......."
          />
        </div>
      </div>
    </>
  );
}

    
const NavLg = () => {
  const [searchTerm, setSearchTerm] = useState("");
  

  const handleSearch = async () => {
    if (searchTerm) {

      try {
        const response = await axios.get(`/search/movie?query=${searchTerm}`);
        console.log(response)
       
        setSearchTerm("");
        
      } catch (error) {
        
        console.log("Error occurred:", error);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
           
            <input
        type="text"
        className="w-full bg-transparent border-none focus:outline-none"
        placeholder="Search for movies, events, plays, sports and activities"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
            
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Delhi NCR <BiChevronDown />
          </span>
          <Link
            to="/plays"
            className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white"
          >
            Plays
          </Link>
         
          <Link to="/Signup" >Sign Up</Link>
         
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
  );
}

// Main Component
const Navbar = () => {
  return (
    <nav className="bg-darkBackground-700 px-4 py-3">
      {/* Small Screen NavBar */}
      <div className="md:hidden">
        <NavSm />
      </div>
      {/* Medium Screen NavBar */}
      <div className="hidden md:flex lg:hidden">
        <NavMd />
      </div>
      {/* Large Screen NavBar */}
      <div className="hidden md:hidden lg:flex">
        <NavLg />
      </div>
    </nav>
  );
};

export default Navbar;


