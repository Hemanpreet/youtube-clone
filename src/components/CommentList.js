import React from "react";
import Comment from "./Comment";
const CommentList = ({ comments }) => {

    return comments.map((comment,index)=>(
        <div>
            <Comment key={index} data={comment}/>
            <div className="pl-5 border border-l-5">
                <CommentList comments={comment.replies}/>
            </div>
        </div>
    ))
};

export default CommentList;
