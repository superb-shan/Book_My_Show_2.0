import React from "react";
import { BiChevronDown, BiMenu } from "react-icons/bi";
import { Link } from "react-router-dom";
import  { useState } from "react";
import axios from "axios";


// Main Component
const Navbar = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchSuggestionList, setSearchSuggestionList] = useState([]);

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

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(e.target.value);

    const getSuggestionList = async () => {
      const suggestionList = await axios.get(`/search/movie?query=${searchTerm}`);
      // console.log(suggestionList.data.results);
      setSearchSuggestionList(suggestionList.data.results);
    }

    if (e.target.value !== "")
      getSuggestionList();

  }

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
        <div className="w-[200px] h-8">
        <Link to="/">
          <input
            key="search-field"
            autoFocus="autoFocus"
            type="text"
            className="w-full bg-transparent border-none focus:outline-none text-right pr-5"
            placeholder="Search ......."
            value={searchTerm}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            /> 
        </Link>
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
        <Link to="/">
          <img
            src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
            alt="logo"
            className="w-full h-full"
          />
        </Link>
        </div>

        <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
          <input
            key="search-field"
            autoFocus="autoFocus"
            type="search"
            className="w-full bg-transparent border-none focus:outline-none"
            placeholder="......."
            value={searchTerm}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          /> 
        </div>
      </div>
    </>
  );
}

    
const NavLg = () => {
  return (
    <>
    <div className="w-full">
      <div className="container flex mx-auto px-4 items-center justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <Link to="/">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
            </Link>
          </div>
           <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
           
          <input
            key="search-field"
            autoFocus="autoFocus"
            type="text"
            className="w-full bg-transparent border-none focus:outline-none"
            placeholder="Search for movies, events, plays, sports and activities"
            value={searchTerm}
            onChange={handleChange}
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
         <div className="bg-red-600 text-white px-2 py-1 text-sm rounded">
         { showButton && <button  onClick={toggleButton}>
          <Link to="/Signup" >Sign Up</Link>
          </button>
          }
          </div>
         
         
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

  // Main return:

  return (
    <nav className="bg-darkBackground-700 px-4 py-3 ">
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
      {(searchSuggestionList.length && searchTerm.length > 1) ? 
        <div className="lg:w-[1200px] lg:ml-[125px] my-4 md:w-[930px] md:ml-[50px] sm:w-[530px] sm:ml-[50px] flex items-center gap-3 flex-wrap">
          {searchSuggestionList.map((movieDetails, index) => (
            <Link to={`/movie/${movieDetails.id}`}>
                  <div
                    key={index}
                    className="border-2 border-transparent px-3 py-1 rounded bg-white text-red-600 hover:text-white hover:bg-red-600"
                  >
                    {movieDetails.title}
                  </div>
                </Link>
              ))}
        </div>
      : 
      <></>
      }
      
    </nav>
  );
};

export default Navbar;


