import React, { Component } from "react";
import "./index.css";
import { connect } from "react-redux";
// ========= Component imports ========= //
import Featured from "../../components/featured";
import HomeBlogSection from "../../components/homeblogsection";
import PortfolioImage from "../../components/portfolioImage";
import Loader from "../../components/loading";
import Testimonials from "../../components/testimonials";
import SectionServices from "../../components/section-services";
import Carousel from "../../components/carousel";
// ========== Action Imports ========= //
import { getRequestedNumBlogPost } from "../../actions/blogActions";
// import PropTypes from "prop-types";
// import * as $ from "jquery";

// ** ISSUES TO ADRESS TODAY ** :
// getnext posts route add try and force an error
// can possibly clean up services view
// get started on admin page
// possibly add a comments section

// **  ONGOING ISSUES THINGS I'VE NOT FIGURED OUT YET  **
// have to use a tag on home page - issue loading carousel when using react-router <link>
// lazy loading
// error during catch action dispatching
// mailchimp / RSS

// ****** LONG TERM *****
// connect to styleseat - later
// connect to mailchimp - soon
// RSS for updating blogposts - difficult to figure out - pay.
// host with heroku paid ?
// remove unecessary photos and data
// look into hosting static files with aws
// make emailing better - learn more about this
// try not using local state as much, causes too many uncessecary rerenders
// need to make database in POSTGres write all the SQL code for the tables.
// slugify - can
// make application into production mode, same with portfolio. - UNDERSSTAND MORE ABOUT THIS
// learn to optimize for speed

class Home extends Component {
  componentDidMount() {
    // Call first 3 blogposts
    this.props.getRequestedNumBlogPost(3);
  }
  componentWillUnmount() {
    console.log("home component will unmount");
  }
  render() {
    // {this.props.isLoading ? <Loader /> : null}
    // <div className="preloader">
    //       <div className="animation circle"></div>
    //     </div>
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
