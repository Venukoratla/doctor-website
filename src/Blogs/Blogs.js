import React from "react";
import "./Blogs.css";
import { blogs } from "../Static/static";
import BlogsCard from "./BlogsCard";
const Blogs = () => {
  return (
    <div className="blogs-cards-container" id="blogs">
      <h1 style={{ textAlign: "center", margin: "2px", color: "#007bff" }}>
        Our Blogs
      </h1>
      {blogs.map((el, index) => (
        <BlogsCard blog={el} index={index} />
      ))}
    </div>
  );
};

export default Blogs;
