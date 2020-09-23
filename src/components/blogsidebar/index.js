import React from "react";
import portrait from "../../images/portrait.jpg";
import ad from "../../images/girl-forest.jpg";

const BlogSidebar = () => {
  return (
    <>
      <div className="sidebar-box clearfix">
        <h3 className="widget-title">About me</h3>
        <p>
          <img src={portrait} alt="" />
        </p>
        <p>
          Welcome to my blog! My name is Kathryn, a creative makeup artist who
          loves life! Here I write about the experiences and challenges I've
          faced. If you like what you read, please consider signing up for my
          newsletter.
        </p>
        <div className="social-icons">
          <a href="/" target="_blank">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="/" target="_blank">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="/" target="_blank">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="/" target="_blank">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="/" target="_blank">
            <i className="fa fa-google-plus"></i>
          </a>
        </div>
      </div>
      {/*sidebar-box*/}
      <div className="sidebar-box clearfix">
        <h3 className="widget-title">Sign up Newsletter</h3>
        <p>
          This is a weekly newsletter designed to reach everyone interested in
          my life as a makeup artist. Sign up if you like my content!
        </p>
        <form
          onSubmit={() =>
            alert("The newsletter is not yet set up, try again later.")
          }
          className="b-form-contacts ui-form"
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
          <button type="submit" className="btn btn-primary">
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
        <a href="/" className="tag-link">
          beautiful
        </a>
        <a href="/" className="tag-link">
          photography
        </a>
        <a href="/" className="tag-link">
          wedding
        </a>
        <a href="/" className="tag-link">
          travel
        </a>
        <a href="/" className="tag-link">
          discover
        </a>
        <a href="/" className="tag-link">
          food
        </a>
        <a href="/" className="tag-link">
          woman
        </a>
        <a href="/" className="tag-link">
          photography
        </a>
        <a href="/" className="tag-link">
          style
        </a>
      </div>
      {/*sidebar-box*/}
      <div className="sidebar-box clearfix">
        <h3 className="widget-title">Categories</h3>
        <ul className="widget-categories">
          <li>
            <a href="/" title="Nature Photography">
              Nature Photography
            </a>
          </li>
          <li>
            <a href="/" title="Wild Photography">
              Wild Photography
            </a>
          </li>
          <li>
            <a href="/" title="Building Photography">
              Building Photography
            </a>
          </li>
          <li>
            <a href="/" title="Photography Designing">
              Photography Designing
            </a>
          </li>
          <li>
            <a href="/" title="Pricig Table">
              Pricing Table
            </a>
          </li>
        </ul>
      </div>
      {/*sidebar-box*/}
    </>
  );
};

export default BlogSidebar;
