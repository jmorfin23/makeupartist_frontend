import React, { Component } from "react";
import "./index.css";
import girl from "../../../images/girl.jpg";
import placeholder from "../../../images/blog/placeholder.jpg";
import ad from "../../../images/ad.jpg";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getSinglePost } from "../../../actions/blogActions.js";

class Post1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.match);
    let post = [];
    //grab data from header and parse through list of blogposts
    if (this.props.blogposts.items.data) {
      const blog = this.props.blogposts.items.data;
      for (let i = 0; i < blog.length; i++) {
        if (blog[i]["id"] == this.props.match.params.post) {
          post = {
            title: blog[i]["title"],
            author: blog[i]["author"],
            id: blog[i]["id"],
            content: blog[i]["content"],
            date_posted: blog[i]["date_posted"],
            url: blog[i]["url"]
          };
        }
      }
    }
    //logic for other blogpost to display
    let nextPosts = [];
    if (post.id) {
      const test = this.props.blogposts.items.data;
      for (let i = 0; i < test.length; i++) {
        if (post.id - 3 === test[i]["id"]) {
          nextPosts.push({
            id: test[i - 2]["id"],
            title: test[i - 2]["title"],
            url: test[i - 2]["url"],
            date: test[i - 2]["date_posted"]
          });
          nextPosts.push({
            id: test[i - 1]["id"],
            title: test[i - 1]["title"],
            url: test[i - 1]["url"],
            date: test[i - 1]["date_posted"]
          });
          nextPosts.push({
            id: test[i]["id"],
            title: test[i]["title"],
            url: test[i]["url"],
            date: test[i]["date_posted"]
          });
        }
        if (post.id + 3 === test[i]["id"]) {
          nextPosts.push({
            id: test[i + 2]["id"],
            title: test[i + 2]["title"],
            url: test[i + 2]["url"],
            date: test[i + 2]["date_posted"]
          });
          nextPosts.push({
            id: test[i + 1]["id"],
            title: test[i + 1]["title"],
            url: test[i + 1]["url"],
            date: test[i + 1]["date_posted"]
          });
          nextPosts.push({
            id: test[i]["id"],
            title: test[i]["title"],
            url: test[i]["url"],
            date: test[i]["date_posted"]
          });
        }
      }
    }

    console.log(nextPosts);
    return (
      <div className="post1">
        <section className="section section-page-title">
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
                    <a href={placeholder} className="mfp-image" title="">
                      <img src="http://placehold.it/750x500" alt="" />
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
                      <a href="#">{post.comments}</a>
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
                    {nextPosts &&
                      nextPosts.map(post => (
                        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                          <div
                            key={post.id}
                            className="post-entry post-entry-related"
                          >
                            <div className="post-thumbnial">
                              <a href="post.html">
                                <img src={placeholder} alt="" />
                              </a>
                            </div>
                            {/*post-thumbnial*/}
                            <div className="post-entry-related-contents">
                              <h1>
                                <a href="post.html">{post.title}</a>
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
  blogposts: state.blogposts
});

export default connect(mapStateToProps, { getSinglePost })(withRouter(Post1));
