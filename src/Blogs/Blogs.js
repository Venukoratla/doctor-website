import React from "react";
import "./Blogs.css";
import { blogs } from "../Static/static";
import BlogsCard from "./BlogsCard";
const Blogs = () => {
  return (
    <div className="blogs-cards-container">
      {blogs.map((el, index) => (
        <BlogsCard blog={el} index={index} />
      ))}
    </div>
  );
};

export default Blogs;
