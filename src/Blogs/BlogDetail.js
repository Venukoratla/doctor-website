import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../Static/static";

const BlogDetail = () => {
  const { id } = useParams();

  const blog = blogs.find((el) => el.id === Number(id));

  return (
    <div className="blog-detail-container" key={blog.id}>
      <div className="blog-detail-header">
        <h1 className="blog-detail-title">{blog.title}</h1>
      </div>
      <div className="blog-detail-content">
        <div className="blog-detail-para">
          <p className="blog-detail-description">{blog.para1}</p>
          <p className="blog-detail-description">{blog.para2}</p>
        </div>
        <div className="blog-detail-img-container">
          <img className="blog-detail-image" src={blog.img} alt={blog.title} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
