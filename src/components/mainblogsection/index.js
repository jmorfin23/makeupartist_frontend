import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchNextPosts } from "../../actions/blogActions";

const MainBlogSection = props => {
  const { posts, info } = useSelector(state => state.blogposts.posts_by_page);
  const dispatch = useDispatch();
  return (
    <div className="col-md-8 col-sm-8">
      {posts &&
        posts.map(post => (
          <div key={post.id} className="post-loop clearfix">
            <div className="post-thumbnail">
              <img src="https://placehold.it/750x500" alt="" />
              {/* <a href="/">
                          <i className="fa fa-link"></i></a> 
                        */}
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
                  <a href="/" target="_blank">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        ))}
      {/*post-loop*/}
      <div className="pagination clearfix">
        <ul className="page-numbers">
          {info.has_prev ? (
            <>
              <li className="page-item">
                <a
                  className="page-link"
                  href="#"
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
                  href="#"
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
              href="#"
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
                  href="#"
                  aria-label="Next"
                  onClick={() => dispatch(fetchNextPosts(info.next_num))}
                >
                  {info.next_num}
                </a>
              </li>
              <li className="page-item change-hover-color">
                <a
                  className="page-link"
                  href="#"
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
      {/*pagination*/}
    </div>
  );
};

export default MainBlogSection;
