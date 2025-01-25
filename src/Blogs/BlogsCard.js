import React from "react";
import "./Blogs.css";

const BlogsCard = ({ blog, index }) => {
  return (
    <div
      key={index}
      className={`blog-detail-subtitle-section ${
        index % 2 === 0 ? "right" : "left"
      }`}
    >
      <div className="blog-detail-subtitle-content">
        <h2 className="blog-detail-subtitle-title">{blog.title}</h2>
        <p className="blog-detail-para">{blog.para1}</p>
        <p className="blog-detail-para">{blog.para2}</p>
      </div>
      <div className="blog-detail-image-container">
        <img className="blog-detail-image" src={blog?.img} alt={blog?.title} />
      </div>
    </div>
  );
};

export default BlogsCard;
