import React from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";

const BlogsCard = ({ blog }) => {
  return (
    <div class="blogcard" key={blog.id}>
      <div class="blogcard-image">
        <img src={blog.img} alt={blog.title} />
      </div>
      <div class="blogcard-content">
        {/* <p class="blogcard-category">Rheumatology</p>
        <p class="blogcard-date">October 3, 2024</p> */}
        <h3 class="blogcard-title">{blog.title}</h3>
        <Link to={`/blog-detail/${blog.id}`} class="blogcard-link">
          View More →
        </Link>
      </div>
    </div>
  );
};

export default BlogsCard;
