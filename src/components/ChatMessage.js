import React from 'react'
import userIcon from "../assets/images/userIcon.png";
const ChatMessage = ({name,message}) => {
  return (
    <div className='flex'>
          <img className="h-7 mt-3 mr-2 " alt="userIcon" src={userIcon} />
          <div>
          <div className='font-bold'>{name}</div>
          <div>{message}</div>
          </div>
          
    </div>
  )
}

export default ChatMessage