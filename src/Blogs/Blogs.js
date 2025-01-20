import React from "react";
import "./Blogs.css";
import { blogs } from "../Static/static";
import BlogsCard from "./BlogsCard";
const Blogs = () => {
  return (
    <div className="blog-main-container">
      <div className="blogs-header">
        <h1 className="blogs-heading">Blogs</h1>
      </div>
      <div className="blogs-cards-container">
        {blogs.map((el) => (
          <BlogsCard blog={el} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
