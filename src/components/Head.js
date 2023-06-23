import React from 'react'
import hamburgerMenu from "../assets/images/hamburgerMenu.png"
import youtubeLogo from "../assets/images/youtubeLogo.jpg"
import userIcon from "../assets/images/userIcon.png"
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
const Head = () => {
const dispatch=useDispatch();
  const toggleMenuHandler=()=>{
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
    <div className="flex col-span-1">
      <img onClick={()=>toggleMenuHandler()} className="h-12 cursor-pointer" alt="menu" src={hamburgerMenu}/>
      <img className="h-12" alt="youtube Logo"src={youtubeLogo}/>
      </div>
      <div className="col-span-10 m-2">
        <input className="w-1/2 border-zinc-950 border-2 p-2 rounded-l-full"type="text"/>
        <button className="border-zinc-950 border-2 p-2  rounded-r-full bg-gray-200">🔍</button>
      </div>
      <div className="col-span-1">
        <img className="h-12" alt="userIcon" src={userIcon}/>
      </div>
    </div>
  )
}

export default Head;