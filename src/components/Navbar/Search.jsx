import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search/movie?query=${searchTerm}`);
      setSearchTerm("");
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
      console.log(suggestionList.data.results);
    }

    getSuggestionList();

  }

  return (
    <div className="flex items-center">
      <input
        type="text"
        className="w-[650px] bg-transparent border-none focus:outline-none"
        placeholder="Search for movies, events, plays, sports and activities"
        value={searchTerm}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <BiSearch
        className="text-gray-400 cursor-pointer"
        onClick={handleSearch}
      />
    </div>
  );
};

export default Search;
