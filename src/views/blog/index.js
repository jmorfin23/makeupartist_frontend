import React, { Component } from "react";
import blog from "../../images/blog_img.jpg";
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
    console.log("inside component did mount");
    //goes to page 1 upon loading page
    this.props.fetchNextPosts(this.state.currentPage);
  }

  render() {
    const { posts, info } = this.props.blogposts;
    const styles = {
      header: {
        backgroundImage: `url(` + blog + `)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed"
      },
      content: {
        backgroundColor: "rgba(0, 0, 0, 0.3)"
      }
    };

    return (
      <div className="blog">
        <section className="section section-page-title" style={styles.header}>
          <div className="overlay" style={styles.content}>
            <h1>Blog/News</h1>
          </div>
          {/*overlay*/}
        </section>
        {/*section-page-title*/}
        <section className="section main-section">
          <div className="container">
            <div className="row">
              <MainBlogSection />
              {/*col-md-8*/}
              {/*sidebar*/}
              <BlogSidebar />
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
  blogposts: state.blogposts.posts_by_page,
  singlePost: state.blogposts.singlePost
});

export default connect(mapStateToProps, { fetchNextPosts })(Blog);
