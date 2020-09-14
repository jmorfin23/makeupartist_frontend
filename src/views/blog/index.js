import React, { Component } from "react";
import "./index.css";
import "../../App.css";
import { connect } from "react-redux";
import { fetchNextPosts } from "../../actions/blogActions.js";
import BlogSidebar from "../../components/blogsidebar";
import MainBlogSection from "../../components/mainblogsection";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }
  componentDidMount() {
    //load page 1
    this.props.dispatch(fetchNextPosts(this.state.currentPage));
  }

  render() {
    return (
      <div className="blog">
        <section className="section section-page-title blog-heading my-header">
          <div className="overlay">
            <h1>Blog/News</h1>
          </div>
          {/*overlay*/}
        </section>
        {/*section-page-title*/}
        <section className="section main-section">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-8">
                <MainBlogSection />
              </div>
              {/*col-md-8*/}
              <div className="col-md-4 col-sm-4" id="sidebar">
                <BlogSidebar />
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

export default connect()(Blog);
