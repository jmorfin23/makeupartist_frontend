import React, { Component } from "react";
import girl from "../../images/girl.jpg";
import placeholder from "../../images/blog/placeholder.jpg";
import ad from "../../images/ad.jpg";
import { connect } from "react-redux";
import { getSinglePost } from "../../actions/blogActions.js";
import { Redirect, Router, Route } from "react-router-dom";
import Post1 from "./post1";

// use local storage to hold blogpost id use that to query the database
class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      postsPerPage: 4,
      pageNeighbours: 0,
      pages: 0,
      currentPosts: []
    };
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log("inside component did update");
  // }

  static getDerivedStateFromProps(props, state) {
    if (props.blogposts.data) {
      const upperBound = state.currentPage * 4;
      const lowerBound = upperBound - 4;
      const newDisplayedPosts = props.blogposts.data.slice(
        lowerBound,
        upperBound
      );
      return { currentPosts: newDisplayedPosts };
    }
  }
  // componentDidMount() {
  //   console.log("inside component did mount");
  //   //goes to page 1 upon loading page
  //   // this.gotoPage(1);
  // }

  getSinglePost = (id, e) => {
    e.preventDefault();
    console.log("** inside get single post!!!!");
    //call method to get single post
    this.props.getSinglePost(id);
  };

  gotoPage = page => {
    const { onPageChanged = f => f } = this.props;

    const currentPage = Math.max(0, Math.min(page, this.totalPages));

    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.state.postsPerPage,
      totalRecords: this.totalPosts
    };

    this.setState({ currentPage }, () => onPageChanged(paginationData));
  };

  handleClick = page => e => {
    e.preventDefault();
    this.gotoPage(page);
    window.scrollTo(0, 0);
  };

  handleMoveLeft = e => {
    e.preventDefault();
    this.gotoPage(this.state.currentPage - this.state.pageNeighbours * 2 - 1);
  };

  handleMoveRight = e => {
    e.preventDefault();
    this.gotoPage(this.state.currentPage + this.state.pageNeighbours * 2 + 1);
  };

  range = (from, to, step = 1) => {
    let i = from;
    const range = [];

    while (i <= to) {
      range.push(i);
      i += step;
    }

    return range;
  };

  fetchPageNumbers = () => {
    const LEFT_PAGE = "LEFT";
    const RIGHT_PAGE = "RIGHT";

    const totalPages = this.totalPages;
    const currentPage = this.state.currentPage;
    const pageNeighbours = this.state.pageNeighbours;

    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */

    const totalNumbers = this.state.pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

      let pages = this.range(startPage, endPage);

      /**
       * hasLeftSpill: has hidden pages to the left
       * hasRightSpill: has hidden pages to the right
       * spillOffset: number of hidden pages either to the left or to the right
       */
      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = this.range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = this.range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return this.range(1, totalPages);
  };
  render() {
    if (this.props.blogposts.data) {
      this.totalPosts = this.props.blogposts.data.length;
      this.totalPages = Math.ceil(this.totalPosts / this.state.postsPerPage);
    }

    const pages = this.fetchPageNumbers();
    return (
      <div className="blog">
        <section className="section section-page-title">
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
                {this.state.currentPosts &&
                  this.state.currentPosts.map(post => (
                    <div key={post.id} className="post-loop clearfix">
                      <div className="post-thumbnail">
                        <img src="https://placehold.it/750x500" alt="" />
                        <a href="/">
                          <i className="fa fa-link"></i>
                        </a>
                      </div>
                      <div className="post-loop-info clearfix">
                        <h1>
                          <a href={`/${post.path}`}>{post.title}</a>
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
                        <a onClick={e => this.getSinglePost(post.id, e)}>
                          read more <i className="fa fa-long-arrow-right"></i>
                        </a>
                        <ul className="social-share-buttons clearfix">
                          <li>
                            <a href="#" target="_blank">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a href="#" target="_blank">
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
                    {pages &&
                      pages.map((page, index) => {
                        if (page === "LEFT")
                          return (
                            <li key={index} className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Previous"
                                onClick={e => this.handleMoveLeft(e)}
                              >
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                              </a>
                            </li>
                          );

                        if (page === "RIGHT")
                          return (
                            <li key={index} className="page-item">
                              <a
                                className="page-link"
                                href="#"
                                aria-label="Next"
                                onClick={e => this.handleMoveRight(e)}
                              >
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                              </a>
                            </li>
                          );

                        return (
                          <li
                            key={index}
                            className={`page-item${
                              this.state.currentPage === page ? " tag" : ""
                            }`}
                          >
                            <a
                              className="page-link"
                              href="#"
                              onClick={this.handleClick(page)}
                            >
                              {page}
                            </a>
                          </li>
                        );
                      })}
                  </ul>
                </div>
                {/*pagination*/}
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
                    {" "}
                    <a href="#" target="_blank">
                      <i className="fa fa-facebook"></i>
                    </a>{" "}
                    <a href="#" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </a>{" "}
                    <a href="#" target="_blank">
                      <i className="fa fa-linkedin"></i>
                    </a>{" "}
                    <a href="#" target="_blank">
                      <i className="fa fa-instagram"></i>
                    </a>{" "}
                    <a href="#" target="_blank">
                      <i className="fa fa-google-plus"></i>
                    </a>{" "}
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
                  {" "}
                  <img src={ad} alt="" />{" "}
                </div>
                {/*sidebar-box*/}
                <div className="sidebar-box clearfix">
                  <h3 className="widget-title">Tags Cloud</h3>
                  <a href="#" className="tag-link">
                    beautiful
                  </a>{" "}
                  <a href="#" className="tag-link">
                    photography
                  </a>{" "}
                  <a href="#" className="tag-link">
                    wedding
                  </a>{" "}
                  <a href="#" className="tag-link">
                    travel
                  </a>{" "}
                  <a href="#" className="tag-link">
                    discover
                  </a>{" "}
                  <a href="#" className="tag-link">
                    food
                  </a>{" "}
                  <a href="#" className="tag-link">
                    woman
                  </a>{" "}
                  <a href="#" className="tag-link">
                    photography
                  </a>{" "}
                  <a href="#" className="tag-link">
                    style
                  </a>{" "}
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
  blogposts: state.blogposts.items,
  singlePost: state.blogposts.singlePost
});

export default connect(mapStateToProps, { getSinglePost })(Blog);
