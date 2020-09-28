import React, { Component } from "react";
import "./index.css";
import AdminModal from "../../components/adminmodal";
import { connect } from "react-redux";
import {
  addImage,
  deleteImage,
  fetchImages
} from "../../actions/imageActions.js";
import {
  addBlogPost,
  deleteBlogPost,
  fetchBlogPosts
} from "../../actions/blogActions.js";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadType: null,
      image: null,
      showModal: false,
      imageToDelete: null,
      imageIdToDelete: null,
      text: "",
      blogTitle: "",
      blogDate: ""
    };
  }

  componentDidMount() {
    // Get images if we don't have them
    if (!this.props.images.length) {
      this.props.fetchImages();
    }
    // Get blogposts if we don't have them
    if (!this.props.blogposts.adminPosts.length) {
      this.props.fetchBlogPosts();
    }
  }

  uploadImage = async e => {
    e.preventDefault();
    const { uploadType: type, image } = this.state;

    if (!type || !image) return false;

    const formData = new FormData();

    formData.append("file", image);
    formData.append("upload_type", type);

    this.props.addImage(formData);
  };

  addBlogPost = async e => {
    e.preventDefault();

    const { blogTitle: title, blogDate: date, text, image } = this.state;

    const formData = new FormData();

    formData.append("title", title);
    formData.append("date", date);
    formData.append("text", text);
    formData.append("image", image);

    this.props.addBlogPost(formData);
  };

  render() {
    console.log(this.props);
    const { images, blogposts } = this.props;
    const { adminPosts: posts } = blogposts;
    return (
      <div className="make-centered">
        <div className="type-container">
          <h2>Upload an Image</h2>
          {this.state.uploadType ? null : <p>Please select a type.</p>}

          <ul className="type-list">
            <li
              id="1"
              onClick={() => this.setState({ uploadType: "Wedding" })}
              className="type type-1"
            >
              Wedding
            </li>
            <li
              onClick={() => this.setState({ uploadType: "HairStyle" })}
              className="type type-2"
            >
              Hairstyle
            </li>
            <li
              onClick={() => this.setState({ uploadType: "Commercial" })}
              className="type type-3"
            >
              Commercial
            </li>
            <li
              onClick={() => this.setState({ uploadType: "Studio" })}
              className="type type-4"
            >
              Studio
            </li>
          </ul>
          <h3>
            {this.state.uploadType
              ? "Add image to: " + this.state.uploadType
              : "Type has not been selected."}
          </h3>
          <div className="input-container">
            <div className="input-2">
              <form onSubmit={e => this.uploadImage(e)}>
                <label htmlFor="file-input"></label>
                <input
                  onChange={e => this.setState({ image: e.target.files[0] })}
                  type="file"
                  accept="image/*"
                ></input>
                <br />
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="delete-img">
          <h2>Delete an Image: </h2>
          <div className="delete-img-2">
            <div className="portfolio-items row">
              {images !== undefined && images.length ? (
                images.map(image => (
                  <div
                    key={image.id}
                    className={
                      `portfolio-item item ` +
                      image.type +
                      ` col-xs-12 col-sm-6 col-md-4`
                    }
                  >
                    <div
                      className="a-img"
                      style={{ backgroundImage: `url(` + image.url + `)` }}
                    ></div>
                    <a
                      onClick={() =>
                        this.setState({
                          showModal: true,
                          imageToDelete: image.url,
                          imageIdToDelete: image.id
                        })
                      }
                      className="mfp-image"
                    ></a>
                  </div>
                ))
              ) : (
                <p>You have no images posted.</p>
              )}
            </div>
            <br />
          </div>
          <AdminModal
            image={this.state.imageToDelete}
            animation={false}
            show={this.state.showModal}
            onHide={() => this.setState({ showModal: !this.state.showModal })}
            id={this.state.imageIdToDelete}
          />
        </div>

        <div className="blog-post">
          <h2>Add a Blog Post: </h2>
          <form onSubmit={e => this.addBlogPost(e)}>
            <div className="form-group">
              <label>Title</label>
              <input
                id="blogTitle"
                onChange={e => this.setState({ blogTitle: e.target.value })}
                name="title"
                type="text"
                className="form-control"
                required="required"
                placeholder="Title"
                value={this.state.blogTitle}
              />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input
                onChange={e => this.setState({ blogDate: e.target.value })}
                name="date"
                type="text"
                className="form-control"
                required="required"
                placeholder="dd mmm yyyy"
                value={this.state.blogDate}
              />
            </div>
            <div className="form-group">
              <label htmlFor="file-input">Image</label>
              <input
                id="blogImage"
                onChange={e => this.setState({ image: e.target.files[0] })}
                name="image"
                type="file"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Text</label>
              <textarea
                id="blogText"
                onChange={e => this.setState({ text: e.target.value })}
                cols="50"
                rows="20"
                type="text"
                name="text"
                className="form-control"
                required="required"
                placeholder="Text"
                value={this.state.text}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <br />
        <br />
        <div className="delete-blogPost">
          <h2>Delete a BlogPost: </h2>
          <div className="delete-blogPost-2">
            {/* display blogposts */}
            {posts !== undefined && posts.length ? (
              <table className="table">
                <thead>
                  <tr className="delete-table-head">
                    <th>Date</th>
                    <th>Title</th>
                    <th>URL</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody className="delete-table-body">
                  {posts.map(post => (
                    <tr key={post.id}>
                      <td>{post.date_posted}</td>
                      <td>{post.title}</td>
                      <td>{post.url}</td>
                      <td>
                        <button
                          onClick={() => this.props.deleteBlogPost(post.id)}
                          className="delete-button"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>You have no blogposts.</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

//map state to props
const mapStateToProps = state => ({
  images: state.images.images,
  blogposts: state.blogposts,
  blogisDeleted: state.blogposts.deleted
});

const mapDispatchToProps = dispatch => {
  return {
    addImage: info => dispatch(addImage(info)),
    fetchImages: () => dispatch(fetchImages()),
    deleteImage: info => dispatch(deleteImage(info)),
    addBlogPost: info => dispatch(addBlogPost(info)),
    deleteBlogPost: id => dispatch(deleteBlogPost(id)),
    fetchBlogPosts: () => dispatch(fetchBlogPosts()),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
