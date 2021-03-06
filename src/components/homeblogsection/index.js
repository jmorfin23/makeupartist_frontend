import React from "react";
import "./index.css";
import { useSelector } from "react-redux";

const HomeBlogSection = props => {
  const posts = useSelector(state => state.blogposts.home_posts);

  if (!posts || !posts.length) {
    return (
      <div className="row">
        <div className="no-blog-posts">
          <h4>There are currently no blog posts.</h4>
        </div>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        {posts &&
          posts.map(post => (
            <div key={post.id} className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
              <div className="post-entry">
                <div className="post-thumbnail">
                  <img src={post.url} alt="" />
                  <a href={`/blog/${post.path}`}>
                    <i className="fa fa-link"></i>
                  </a>
                </div>
                {/* post-thumbnail*/}
                <h2>
                  <a href={`/blog/${post.path}/`}>{post.title}</a>
                </h2>
                <ul className="entry-meta">
                  <li>
                    <i className="fa fa-calendar"></i>
                    {post.date_posted}
                  </li>
                  <li>
                    <i className="fa fa-comments"></i>
                    <a href="#/">0 Comments</a>
                  </li>
                </ul>
                <p>{post.content.slice(0, 350) + "..."}</p>
                <a className="btn btn-primary" href={`/blog/${post.path}/`}>
                  Read More
                </a>
              </div>
              {/* post-entry*/}
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeBlogSection;
