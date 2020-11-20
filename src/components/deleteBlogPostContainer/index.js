import React, { Component } from "react";
import { connect } from "react-redux";
import { DeleteBlogPostTable } from "../deleteBlogPostTable";
import { fetchBlogPosts } from "../../actions/blogActions";

class DeleteBlogPostContainer extends Component {
  componentDidMount() {
    if (!this.props.blogposts.adminPosts.length) {
      this.props.dispatch(fetchBlogPosts());
    }
  }
  render() {
    const { blogposts } = this.props;
    const { adminPosts: posts } = blogposts;
    return (
      <>
        <h2>Delete a BlogPost: </h2>
        <div className="delete-blogPost-2">
          {posts !== undefined && posts.length ? (
            <DeleteBlogPostTable posts={posts} />
          ) : (
            <p>You have no blogposts.</p>
          )}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  blogposts: state.blogposts
});

export default connect(mapStateToProps)(DeleteBlogPostContainer);
