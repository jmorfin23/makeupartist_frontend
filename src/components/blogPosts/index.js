import React from "react";
import { useSelector } from "react-redux";

const BlogPosts = () => {
  const posts = useSelector(state => state.posts.items);
  console.log("insidde blog posts: " + posts);
  return (
    <div className="row">
      {posts.data &&
        posts.data.map(post => (
          <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
            <div className="post-entry">
              <div className="post-thumbnail">
                <img src="http://placehold.it/400x400" alt="" />
                <a href="#">
                  <i className="fa fa-link"></i>
                </a>
              </div>
              {/* post-thumbnail*/}
              <h2>
                <a href="#">{post.title}</a>
              </h2>
              <ul className="entry-meta">
                <li>
                  <i className="fa fa-calendar"></i>
                  {post.date_posted}
                </li>
                <li>
                  <i className="fa fa-comments"></i>
                  <a href="#">7 Comments</a>
                </li>
              </ul>
              <p>{post.content}</p>
              <a className="btn btn-primary" href="post.html">
                Read More
              </a>
            </div>
            {/* post-entry*/}
          </div>
        ))}
    </div> // div row
  );
};

export default BlogPosts;
