import React from "react";
import Comment from "./Comment";
import CommentList from "./CommentList";
const commentsData = [
    {
      name: "Hemanpreet Kaur",
      text: "Lorem ipsum dolor sit amet, consectetur",
      replies: [],
    },
    {
      name: "Hemanpreet Kaur",
      text: "Lorem ipsum dolor sit amet, consectetur",
      replies: [
        {
          name: "Hemanpreet Kaur",
          text: "Lorem ipsum dolor sit amet, consectetur",
          replies: [
            {
              name: "Hemanpreet Kaur",
              text: "Lorem ipsum dolor sit amet, consectetur",
              replies: [
                {
                  name: "Hemanpreet Kaur",
                  text: "Lorem ipsum dolor sit amet, consectetur",
                  replies: [
                      {
                          name:"Hemanpreet Kaur",
                          text:"Lorem ipsum dolor sit amet, consectetur",
                          replies:[
                              {
                                  name:"Hemanpreet Kaur",
                                  text:"Lorem ipsum dolor sit amet, consectetur",
                                  replies:[
                          
                                  ]
                              },
                          ]
                      },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Hemanpreet Kaur",
      text: "Lorem ipsum dolor sit amet, consectetur",
      replies: [],
    },
    {
      name: "Hemanpreet Kaur",
      text: "Lorem ipsum dolor sit amet, consectetur",
      replies: [],
    },
    {
      name: "Hemanpreet Kaur",
      text: "Lorem ipsum dolor sit amet, consectetur",
      replies: [],
    },
  ];
const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold"> Comments: </h1>
      {/* <Comment data={commentsData[0]}/> */}
      <CommentList comments={commentsData}/>
    </div>
  );
};

export default CommentsContainer;
