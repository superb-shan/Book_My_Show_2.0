import React, { useContext, useState } from "react";
import { BiChevronDown, BiSearch, BiShareAlt } from "react-icons/bi";
import { MovieContext } from "../../context/Movie.context";
import { Link } from "react-router-dom";
import axios from "axios";
import Hamburger from "./Hamburger";


const MovieNavbar = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchSuggestionList, setSearchSuggestionList] = useState([]);

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


const NavSm = () => {
  const { movie } = useContext(MovieContext);
  return (
    <>
      <div className="text-gray-700 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">{movie.original_title}</h3>
        </div>
        <div className="w-8 h-8">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <>
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
            <BiSearch />
            <input
              type="search"
              autoFocus = "autofocus"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder="Search for movies, events, plays, sports and activities"
              value={searchTerm}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Delhi NCR <BiChevronDown />
          </span>
          <div className="bg-red-600 text-white  py-1 text-md rounded">
         <button className="px-4 font-medium">
          <Link to="/login" >Log in</Link>
          </button>
          </div>
          <div className="w-8 h-8 text-white">
           < Hamburger/>
          </div>
        </div>
      </div>
    </>
  );
};


  return (
    <>
      <nav className="bg-white border-b-2 lg:border-b-0 lg:bg-darkBackground-700 p-4">
        <div className="lg:hidden">
          {/* Small and Medium Screens */}
          <NavSm />
        </div>
        <div className="hidden w-full lg:flex">
          {/* Large Screens */}
          <NavLg />
        </div>
        {(searchSuggestionList.length && searchTerm.length > 1) ? 
        <div className="lg:w-[1200px] lg:ml-[125px] my-4 md:w-[930px] md:ml-[50px] sm:w-[530px] sm:ml-[50px] flex items-center gap-3 flex-wrap">
          {searchSuggestionList.map((movieDetails, index) => (

            // reloadDocument is used to reload the page, here as we are in same page, we need to refresh the page to reload the page (which takes the page variables to original state)
            
            <Link to={`/movie/${movieDetails.id}`} reloadDocument > 
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
    </>
  );
};

export default MovieNavbar;
