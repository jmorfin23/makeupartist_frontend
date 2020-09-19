import React, { Component } from "react";
import "./index.css";
import "../../../App.css";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getSinglePost } from "../../../actions/blogActions.js";
import Four04 from "../../../components/404_Page";
import BlogSidebar from "../../../components/blogsidebar";

class Post extends Component {
  componentDidMount() {
    // Retrieve blogpost
    this.props.getSinglePost(this.props.match.params.post);
  }

  shouldComponentUpdate() {
    // post from redux state
    const { post, nextPosts } = this.props.singlePost;

    // check posts - no update if no posts
    if (
      (Object.keys(post).length === 0 || post === undefined) &&
      (!nextPosts.length || nextPosts === undefined)
    )
      return false;

    // default
    return true;
  }

  render() {
    // Return 404 component if post is not found
    if (this.props.error.status === true) return <Four04 />;

    // Post from redux state
    const { post, nextPosts } = this.props.singlePost;

    return (
      <>
        {post !== undefined && Object.keys(post).length > 0 && (
          <div className="post1">
            <section className="section section-page-title overhead-photo my-header">
              <div className="overlay">
                <h1>{post.title}</h1>
              </div>
              {/*overlay*/}
            </section>
            {/*section-page-title*/}
            <section className="section main-section">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-sm-8">
                    <div className="padd-white-box clearfix">
                      <div className="single-post-thumbnail">
                        <a href="#/" className="mfp-image" title="">
                          <img src={post.url} alt="" />
                        </a>
                      </div>
                      <h1 className="single-post-title">{post.title}</h1>
                      <ul className="entry-meta">
                        <li>
                          <i className="fa fa-calendar"></i>
                          {post.date}
                        </li>
                        <li>
                          <i className="fa fa-comments"></i>
                          <a href="#/">{`${post.comments.length} Comments`}</a>
                        </li>
                      </ul>
                      <div className="entry clearfix">
                        <p>{post.content}</p>
                      </div>
                      {/*entry*/}
                    </div>
                    {/*padd-white-box*/}
                    <div className="related-post-box">
                      <div className="row">
                        {nextPosts.length &&
                          nextPosts.map(post => (
                            <div
                              key={post.id}
                              className="col-lg-4 col-md-4 col-sm-6 col-xs-12"
                            >
                              <div className="post-entry post-entry-related">
                                <div className="post-thumbnial">
                                  <a href={`/blog/${post.path}/`}>
                                    <img src={post.url} alt="" />
                                  </a>
                                </div>
                                {/*post-thumbnial*/}
                                <div className="post-entry-related-contents">
                                  <h1>
                                    <a href={`/blog/${post.path}/`}>
                                      {post.title}
                                    </a>
                                  </h1>
                                  <ul className="entry-meta">
                                    <li>
                                      <i className="fa fa-calendar"></i>
                                      {post.date}
                                    </li>
                                  </ul>
                                </div>
                                {/*post-entry-related-contents*/}
                              </div>
                              {/*post-entry*/}
                            </div>
                          ))}
                        {/*end col*/}
                      </div>
                      {/*row*/}
                    </div>
                    {/*related post box*/}
                  </div>
                  {/*col-md-8*/}
                  {/*sidebar*/}
                  <div className="col-md-4 col-sm-4" id="sidebar">
                    <BlogSidebar />
                  </div>
                  {/*col-md-3*/}
                </div>
                {/*row*/}
              </div>
            </section>
          </div>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  singlePost: state.blogposts.singlePost,
  error: state.error.post_error,
  isLoading: state.loading.isLoading
});

export default withRouter(connect(mapStateToProps, { getSinglePost })(Post));
