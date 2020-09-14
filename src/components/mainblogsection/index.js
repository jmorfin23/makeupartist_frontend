import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchNextPosts } from "../../actions/blogActions";

const MainBlogSection = props => {
  const { posts, info } = useSelector(state => state.blogposts.posts_by_page);
  const dispatch = useDispatch();
  return (
    <>
      {posts !== undefined && posts.length ? (
        posts.map(post => (
          <div key={post.id} className="post-loop clearfix">
            <div className="post-thumbnail">
              <img src={post.url} alt="" />
            </div>
            <div className="post-loop-info clearfix">
              <h1>
                <a href={`/blog/${post.path}/`}>{post.title}</a>
              </h1>
              <ul className="entry-meta">
                <li>
                  <i className="fa fa-calendar"></i>
                  {post.date_posted}
                </li>
                <li>
                  <i className="fa fa-comments"></i>
                  Comments
                </li>
              </ul>
              <p>{post.content.slice(0, 350) + "..."}</p>
            </div>
            {/*post-loop-info*/}
            <div className="post-footer clearfix">
              <a href={`/blog/${post.path}/`}>
                read more <i className="fa fa-long-arrow-right"></i>
              </a>
              <ul className="social-share-buttons clearfix">
                <li>
                  <a href="#/" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#/" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#/" target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))
      ) : (
        <p className="no-blogposts-message">There are no blogposts.</p>
      )}
      {/*post-loop*/}
      {info !== undefined && Object.keys(info).length > 0 && (
        <div className="pagination clearfix">
          <ul className="page-numbers">
            {info.has_prev ? (
              <>
                <li className="page-item">
                  <a
                    className="page-link"
                    aria-label="Previous"
                    onClick={() => dispatch(fetchNextPosts(info.prev_num))}
                  >
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    aria-label="Next"
                    onClick={() => dispatch(fetchNextPosts(info.prev_num))}
                  >
                    {info.prev_num}
                  </a>
                </li>
              </>
            ) : null}
            <li className={`page-item`}>
              <a
                className="page-link current"
                onClick={() => dispatch(fetchNextPosts(info.currentPage))}
              >
                {info.currentPage}
              </a>
            </li>
            {info.has_next ? (
              <>
                <li className="page-item">
                  <a
                    className="page-link"
                    aria-label="Next"
                    onClick={() => dispatch(fetchNextPosts(info.next_num))}
                  >
                    {info.next_num}
                  </a>
                </li>
                <li className="page-item change-hover-color">
                  <a
                    className="page-link"
                    aria-label="Next"
                    onClick={() => dispatch(fetchNextPosts(info.next_num))}
                  >
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </>
            ) : null}
          </ul>
        </div>
      )}
      {/*pagination*/}
    </>
  );
};

export default MainBlogSection;
