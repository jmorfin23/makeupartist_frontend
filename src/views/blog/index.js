import React, { Component } from "react";
import girl from "../../images/girl.jpg";
import placeholder from "../../images/blog/placeholder.jpg";
import ad from "../../images/ad.jpg";
import { connect } from "react-redux";

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      pages: 0
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("inside component did update");
  }

  componentDidMount() {
    console.log("inside component did mount");

    //goes to page 1 upon loading page
    // this.gotoPage(1);
  }

  gotoPage = page => {
    const { onPageChanged = f => f } = this.props;
    console.log(onPageChanged("this is a test"));
    console.log("inside go to page");
    console.log(onPageChanged);
    const currentPage = Math.max(0, Math.min(page, this.totalPages));
    console.log(currentPage);
    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.postsPerPage,
      totalRecords: this.totalPosts
    };

    this.setState({ currentPage }, () => onPageChanged(paginationData));
  };

  handleClick = page => e => {
    e.preventDefault();
    this.gotoPage(page);
  };

  handleMoveLeft = e => {
    e.preventDefault();
    console.log("**");
    console.log("**");

    console.log("**");
    console.log("**");
    this.gotoPage(this.state.currentPage - this.pageNeighbours * 2 - 1);
  };

  handleMoveRight = e => {
    e.preventDefault();
    console.log("**");
    console.log("**");

    console.log("**");
    console.log("**");
    this.gotoPage(this.state.currentPage + this.pageNeighbours * 2 + 1);
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
    const pageNeighbours = this.pageNeighbours;
    console.log("test for fetch page nums: ");
    console.log(totalPages, currentPage, pageNeighbours);
    /**
     * totalNumbers: the total page numbers to show on the control
     * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
     */

    const totalNumbers = this.pageNeighbours * 2 + 3;
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
    console.log("inside render: ");
    console.log(this.state.currentPage);
    this.postsPerPage = 4;
    this.pageNeighbours = 0;
    if (this.props.blogposts.data) {
      this.totalPosts = 57;
      this.totalPages = Math.ceil(this.totalPosts / this.postsPerPage);
      // console.log(`totalposts: ${this.totalPosts}`);
      // console.log(`total pages ${this.totalPages}`);
    }

    // console.log('current page: ' + this.state.currentPage);
    const pages = this.fetchPageNumbers();
    console.log("pages: " + pages);
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
                <div className="post-loop clearfix">
                  <div className="post-thumbnail">
                    <img src={placeholder} alt="" />
                    <a href="post.html">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                  <div className="post-loop-info clearfix">
                    <h1>
                      <a href="">Top rated nature photography images list</a>
                    </h1>
                    <ul className="entry-meta">
                      <li>
                        <i className="fa fa-calendar"></i>07 June 2014{" "}
                      </li>
                      <li>
                        <i className="fa fa-comments"></i>
                        <a href="#">7 Comments</a>
                      </li>
                    </ul>
                    <p>
                      Morbi accumsan ipsum velit. Nam nec tellus a odio
                      tincidunt auctor a ornare odio. Sed non elit visitae eriat
                      consequat auctor eu in elit. className aptent taciti
                      sociosqu ad litora torquent per conubia Igor nostra, per
                      inceptos himenaeos. Mauris in erat justo. Nullam ac urna
                      euro felis dapibus condimentum sit amet a auguexed elit.{" "}
                    </p>
                  </div>
                  {/*post-loop-info*/}
                  <div className="post-footer clearfix">
                    {" "}
                    <a href="post.html">
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
                {/*post-loop*/}
                <div className="post-loop clearfix">
                  <div className="post-thumbnail">
                    <img src={placeholder} alt="" />
                    <a href="post.html">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                  <div className="post-loop-info clearfix">
                    <h1>
                      <a href="#">Clear viewed wild photography images list</a>
                    </h1>
                    <ul className="entry-meta">
                      <li>
                        <i className="fa fa-calendar"></i>07 June 2014{" "}
                      </li>
                      <li>
                        <i className="fa fa-comments"></i>
                        <a href="#">7 Comments</a>
                      </li>
                    </ul>
                    <p>
                      Morbi accumsan ipsum velit. Nam nec tellus a odio
                      tincidunt auctor a ornare odio. Sed non elit visitae eriat
                      consequat auctor eu in elit. className aptent taciti
                      sociosqu ad litora torquent per conubia Igor nostra, per
                      inceptos himenaeos. Mauris in erat justo. Nullam ac urna
                      euro felis dapibus condimentum sit amet a auguexed elit.{" "}
                    </p>
                  </div>
                  {/*post-loop-info*/}
                  <div className="post-footer clearfix">
                    {" "}
                    <a href="post.html">
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
                {/*post-loop*/}
                <div className="post-loop clearfix">
                  <div className="post-thumbnail">
                    <img src={placeholder} alt="" />
                    <a href="post.html">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                  <div className="post-loop-info clearfix">
                    <h1>
                      <a href="#">Viewed building photography images list</a>
                    </h1>
                    <ul className="entry-meta">
                      <li>
                        <i className="fa fa-calendar"></i>07 June 2014{" "}
                      </li>
                      <li>
                        <i className="fa fa-comments"></i>
                        <a href="#">7 Comments</a>
                      </li>
                    </ul>
                    <p>
                      Morbi accumsan ipsum velit. Nam nec tellus a odio
                      tincidunt auctor a ornare odio. Sed non elit visitae eriat
                      consequat auctor eu in elit. className aptent taciti
                      sociosqu ad litora torquent per conubia Igor nostra, per
                      inceptos himenaeos. Mauris in erat justo. Nullam ac urna
                      euro felis dapibus condimentum sit amet a auguexed elit.{" "}
                    </p>
                  </div>
                  {/*post-loop-info*/}
                  <div className="post-footer clearfix">
                    {" "}
                    <a href="post.html">
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
                {/*post-loop*/}
                <div className="post-loop clearfix">
                  <div className="post-thumbnail">
                    <img src={placeholder} alt="" />
                    <a href="post.html">
                      <i className="fa fa-link"></i>
                    </a>
                  </div>
                  <div className="post-loop-info clearfix">
                    <h1>
                      <a href="#">Viewed building photography images list</a>
                    </h1>
                    <ul className="entry-meta">
                      <li>
                        <i className="fa fa-calendar"></i>07 June 2014{" "}
                      </li>
                      <li>
                        <i className="fa fa-comments"></i>
                        <a href="#">7 Comments</a>
                      </li>
                    </ul>
                    <p>
                      Morbi accumsan ipsum velit. Nam nec tellus a odio
                      tincidunt auctor a ornare odio. Sed non elit visitae eriat
                      consequat auctor eu in elit. className aptent taciti
                      sociosqu ad litora torquent per conubia Igor nostra, per
                      inceptos himenaeos. Mauris in erat justo. Nullam ac urna
                      euro felis dapibus condimentum sit amet a auguexed elit.{" "}
                    </p>
                  </div>
                  {/*post-loop-info*/}
                  <div className="post-footer clearfix">
                    {" "}
                    <a href="post.html">
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
                {/*post-loop*/}
                <div className="pagination clearfix">
                  <ul class="page-numbers">
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
                              this.state.currentPage === page ? " active" : ""
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
  blogposts: state.blogposts.items
});

export default connect(mapStateToProps)(Blog);
