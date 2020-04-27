//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data"

const PostsPage = () => {
  const [state] =useState(dummyData)
  console.log(state)
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {state.map(post => {
        return <Post post={post} key={post.id} />;
      })}
      {/* map through data here to return a Post and pass data as props to Post */}
    </div>
  );
};

export default PostsPage;
