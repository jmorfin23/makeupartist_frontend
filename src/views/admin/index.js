import React from "react";
import "./index.css";
import UploadImageContainer from "../../components/uploadImageContainer";
import DeleteImageContainer from "../../components/deleteImageContainer";
import { AddBlogPostContainer } from "../../components/addBlogPostContainer";
import DeleteBlogPostContainer from "../../components/deleteBlogPostContainer";

export const Admin = () => {
  return (
    <div className="make-centered">
      <div className="type-container">
        <UploadImageContainer />
      </div>
      <div className="delete-img">
        <DeleteImageContainer />
      </div>
      <div className="blog-post">
        <AddBlogPostContainer />
      </div>
      <br />
      <br />
      <div className="delete-blogPost">
        <DeleteBlogPostContainer />
      </div>
    </div>
  );
};
