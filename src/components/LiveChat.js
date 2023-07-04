import React, { useState } from "react";
import ChatMessage from "./ChatMessage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      // API Polling
      // dispatch an action
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessage(20),
        })
      );
    }, 2000);
  }, []);
  return (
    <>
      <div className="ml-2 border border-black h-[500px] w-full bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => {
          return <ChatMessage name={c.name} message={c.message} key={index} />;
        })}
      </div>
      <form
        className="ml-2 h-10 border border-black w-full bg-slate-200 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Hemanpreet Kaur",
              message: liveMessage,
            })
          );
          setLiveMessage("");
         
        }}
      >
        <input
          className="w-36 px-2 mb-2 mt-2 ml-2 border border-gray-600"
          type="text"
          onChange={(e) => setLiveMessage(e.target.value)}
            value={liveMessage}

        />
        <button className="mx-2  bg-slate-300 rounded-lg">Send ➡️</button>
      </form>
    </>
  );
};

export default LiveChat;
