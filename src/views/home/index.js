import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
// ========= Component imports ========= //
import Featured from "../../components/featured";
import HomeBlogSection from "../../components/homeblogsection";
import PortfolioImage from "../../components/portfolioImage";
import Testimonials from "../../components/testimonials";
import SectionServices from "../../components/section-services";
import Carousel from "../../components/carousel";
// ========== Action Imports ========= //
import { getRequestedNumBlogPost } from "../../actions/blogActions";

class Home extends Component {
  componentDidMount() {
    // Call first 3 blogposts
    this.props.getRequestedNumBlogPost(3);
  }
  render() {
    return (
      <div className="homepage">
        {/* ============== end preloader ============== */}
        <Carousel />
        {/* mycarousel*/}
        <SectionServices />
        {/* section-services*/}
        <section id="gallery" className="section section-gallery pt-zero">
          {/*  section-title */}
          <div className="section-title text-center">
            <h1 className="text-center decor">
              My <span>Portfolio</span>
            </h1>
          </div>
          {/*  end section-title */}
          <div className="container">
            {/*  Portfolio items */}
            <PortfolioImage />
            {/*  END Portfolio items */}
          </div>
          {/* container*/}
        </section>
        {/* section-gallery*/}
        <Testimonials />
        {/* section-testomonial*/}
        <section id="news" className="section section-blog">
          {/*  section-title */}
          <div className="section-title text-center">
            <h1 className="decor">
              See what’s new on <span>my Blog</span>
            </h1>
          </div>
          {/*  end section-title */}
          <HomeBlogSection items={3} />
          {/* container*/}
        </section>
        {/* section-blog*/}
        <section className="section section-logos pt-zero">
          <Featured />
        </section>
        {/* section-logo*/}
        {/* footer is here  */}
      </div>
    );
  }
}

//map state to props
const mapStateToProps = state => ({
  images: state.images.items,
  blogposts: state.blogposts.home_posts,
  isLoading: state.loading.isLoading
});

export default connect(mapStateToProps, { getRequestedNumBlogPost })(Home);
