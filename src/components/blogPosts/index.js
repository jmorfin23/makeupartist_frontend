import React from "react";
import "./index.css";
// What i did before HAHA.
// posts.data.map((post, index) => {
//   if (index > 2) {
//     posts.data.splice(index, 1);
//   }
//
//   console.log('testing content: ' + post.content);
// })

import { useSelector } from "react-redux";

const BlogPosts = props => {
  const posts = useSelector(state => state.posts.items);

  //if post length >= 2 display only those: FOR HOMEPAGE
  if (posts.data && props.items) {
    posts.data.splice(3);
  }

  //if there are no posts return a message
  if (posts.data == "") {
    return (
      <div className="row">
        <div className="no-blog-posts">
          <h4>There are currently no blog posts.</h4>
        </div>
      </div>
    );
  }
  return (
    <div className="row">
      {posts.data &&
        posts.data.map((post, index) => (
          <div key={post.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
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
              <p>{post.content.slice(0, 350) + "..."}</p>
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
