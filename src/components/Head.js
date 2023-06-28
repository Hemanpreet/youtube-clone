import React from "react";
import hamburgerMenu from "../assets/images/hamburgerMenu.png";
import youtubeLogo from "../assets/images/youtubeLogo.jpg";
import userIcon from "../assets/images/userIcon.png";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useState, useEffect } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { Link } from "react-router-dom";
const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  useEffect(() => {
    //Make API Call
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);
  };
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-12 cursor-pointer"
          alt="menu"
          src={hamburgerMenu}
        />
        <img className="h-12" alt="youtube Logo" src={youtubeLogo} />
      </div>
      <div className="col-span-10 m-2">
        <div>
          <input
            className="w-1/2 border-zinc-950 border-2 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border-zinc-950 border-2 p-2  rounded-r-full bg-gray-200">
            {" "}
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-5 w-[28rem] shadow-lg rounded-l">
            <ul>
              {suggestions.map((s) => (
              <li className="py-2 px-3 shadow-sm hover:bg-gray-100" key={s}>
                    🔍 {s}
                  </li> 
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-12" alt="userIcon" src={userIcon} />
      </div>
    </div>
  );
};

export default Head;
