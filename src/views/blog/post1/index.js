import React, { Component } from "react";
import "./index.css";
import girl from "../../../images/girl.jpg";
import placeholder from "../../../images/blog/placeholder.jpg";
import ad from "../../../images/ad.jpg";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getSinglePost } from "../../../actions/blogActions.js";
import Four04 from "../../../components/404_Page";

class Post1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      title: null,
      author: null,
      date: null,
      content: null,
      comments: [],
      url: null,
      nextPosts: [],
      error: false
    };
  }

  componentDidMount() {
    console.log("component did mount");
    console.log("testing");
    //call action to query database with path
    this.props.getSinglePost(this.props.match.params.post);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(nextProps);
    if (nextProps.error.post_error) {
      return {
        error: true
      };
    }

    if (
      nextProps.singlePost.post != "" &&
      nextProps.singlePost.nextPosts != ""
    ) {
      const post = nextProps.singlePost.post;
      return {
        post: post.id,
        title: post.title,
        author: post.author,
        date: post.date,
        content: post.content,
        comments: post.comments,
        url: post.url,
        nextPosts: nextProps.singlePost.nextPosts
      };
    }
  }

  render() {
    if (this.state.error == true) {
      return <Four04 />;
    }
    return (
      <div className="post1">
        <section className="section section-page-title">
          <div className="overlay">
            <h1>{this.state.title}</h1>
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
                    <a href={placeholder} className="mfp-image" title="">
                      <img src="http://placehold.it/750x500" alt="" />
                    </a>
                  </div>
                  <h1 className="single-post-title">{this.state.title}</h1>
                  <ul className="entry-meta">
                    <li>
                      <i className="fa fa-calendar"></i>
                      {this.state.date}
                    </li>
                    <li>
                      <i className="fa fa-comments"></i>
                      <a href="#">{this.state.comments.length + " Comments"}</a>
                    </li>
                  </ul>
                  <div className="entry clearfix">
                    <p>{this.state.content}</p>
                  </div>
                  {/*entry*/}
                </div>
                {/*padd-white-box*/}
                <div className="related-post-box">
                  <div className="row">
                    {this.state.nextPosts &&
                      this.state.nextPosts.map(post => (
                        <div
                          key={post.id}
                          className="col-lg-4 col-md-4 col-sm-6 col-xs-12"
                        >
                          <div className="post-entry post-entry-related">
                            <div className="post-thumbnial">
                              <a href={`/blog/${post.path}/`}>
                                <img src={placeholder} alt="" />
                              </a>
                            </div>
                            {/*post-thumbnial*/}
                            <div className="post-entry-related-contents">
                              <h1>
                                <a href={`/blog/${post.path}/`}>{post.title}</a>
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
                <div className="sidebar-box clearfix">
                  <h3 className="widget-title">About me</h3>
                  <p>
                    <img src={girl} alt="" />
                  </p>
                  <p>
                    Vivamus porta ante eget sem rutrum egestas. Etiam sit amet
                    ex ullamcorper ante mattis sodales. Duis dapibus, quam ac
                    elementum suscipit, felis leo eleifend tortor.
                  </p>
                  <div className="social-icons">
                    <a href="#" target="_blank">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="fa fa-instagram"></i>
                    </a>
                    <a href="#" target="_blank">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </div>
                </div>
                {/*sidebar-box*/}
                <div className="sidebar-box clearfix">
                  <h3 className="widget-title">Sign up Newsletter</h3>
                  <p>
                    Vivamus porta ante eget sem rutrum egestas. Etiam sit amet
                    ex ullamcorper ante mattis sodales. Duis dapibus, quam ac
                    elementum suscipit, felis leo eleifend tortor.
                  </p>
                  <form
                    className="b-form-contacts ui-form"
                    id="contactForm"
                    action="#"
                    method="post"
                  >
                    <p>
                      <input
                        className="form-control"
                        id="user-name"
                        name="user-name"
                        placeholder="your name"
                        required="required"
                        type="text"
                      />
                    </p>
                    <p>
                      <input
                        className="form-control"
                        id="user-email"
                        name="user-email"
                        placeholder="email address"
                        required="required"
                        type="email"
                      />
                    </p>
                    <button className="btn btn-primary">
                      Subscribe <i className="fa fa-angle-double-right"></i>
                    </button>
                  </form>
                </div>
                {/*sidebar-box*/}
                <div className="sidebar-box clearfix no-padding">
                  <img src={ad} alt="" />
                </div>
                {/*sidebar-box*/}
                <div className="sidebar-box clearfix">
                  <h3 className="widget-title">Tags Cloud</h3>
                  <a href="#" className="tag-link">
                    beautiful
                  </a>
                  <a href="#" className="tag-link">
                    photography
                  </a>
                  <a href="#" className="tag-link">
                    wedding
                  </a>
                  <a href="#" className="tag-link">
                    travel
                  </a>
                  <a href="#" className="tag-link">
                    discover
                  </a>
                  <a href="#" className="tag-link">
                    food
                  </a>
                  <a href="#" className="tag-link">
                    woman
                  </a>
                  <a href="#" className="tag-link">
                    photography
                  </a>
                  <a href="#" className="tag-link">
                    style
                  </a>
                </div>
                {/*sidebar-box*/}
                <div className="sidebar-box clearfix">
                  <h3 className="widget-title">Categories</h3>
                  <ul className="widget-categories">
                    <li>
                      <a href="#" title="Nature Photography">
                        Nature Photography
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Wild Photography">
                        Wild Photography
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Building Photography">
                        Building Photography
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Photography Designing">
                        Photography Designing
                      </a>
                    </li>
                    <li>
                      <a href="#" title="Pricig Table">
                        Pricing Table
                      </a>
                    </li>
                  </ul>
                </div>
                {/*sidebar-box*/}
              </div>
              {/*col-md-3*/}
            </div>
            {/*row*/}
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  singlePost: state.blogposts.singlePost,
  error: state.error
});

export default connect(mapStateToProps, { getSinglePost })(withRouter(Post1));
