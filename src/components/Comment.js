import React from 'react'
import userIcon from "../assets/images/userIcon.png" 
  
const Comment = ({data}) => {
   const {name,text,replies}=data;
    return (
    <div className="flex my-2 bg-gray-200 p-2 rounded-lg my-2">
        <img className="w-12 h8" alt="userlogo" src={userIcon}/>
        <div className="px-3">
            <p className="font-bold">{name}</p>
            <p>{text}</p>
        </div>
    </div>
   
  )
}

export default Comment