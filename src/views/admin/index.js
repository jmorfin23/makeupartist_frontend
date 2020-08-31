import React, { Component } from "react";
import "./index.css";
import PortfolioImage from "../../components/portfolioImage";
import PropTypes from "prop-types";
import ModalWindow from "../../components/adminmodal";
import { connect } from "react-redux";
import { addImage, deleteImage } from "../../actions/imageActions.js";
import {
  addBlogPost,
  deleteBlogPost,
  fetchBlogPosts
} from "../../actions/blogActions.js";
import { DELETE_BLOG_POST } from "../../actions/types";
import { authenticateAdmin } from "../../actions/adminActions";
import { withRouter } from "react-router-dom";
//CLOUDINARY URL & PRESET
import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_URL } from "../../config";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadType: "",
      image: null,
      admin: null,
      text: "",
      blogTitle: "",
      blogDate: "",
      isLogged: false,
      imageList: [],
      blogPostsList: [],
      error: null,
      addedStatus: false,
      saveFlag: false,
      showModal: false,
      imageToDelete: null,
      imageIdToDelete: null,
      myAlert: null,
      blogId: null
    };
  }

  //find index of images object list to be deleted
  indexToDelete = (arr, attr, value) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][attr] == value) return i;
    }
    return -1;
  };
  // 3 things i need to do:
  // call authentification - this calls a rerender - but should call this only if user tries to access admin
  // check if user is logged in when accessing admin
  // if user is logged in call api methods to get

  // check if token is valid on frontend by checking expired time so i dont have to make requests to backend
  // this could be at the top level component -
  // then add a nested route so when user tries to access admin page - reroute to login page if token is expired
  // push to admin panel if token is valid
  // call api in admin page
  // just doesnt make sense to check if token is valid inside of admin page - too many api calls

  componentDidMount() {
    console.log("inside component did mount admin page");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("inside component did update");
    console.log(this.props);
    //push to login page if user auth fails //this doesnt work because on the first componet update it reroutes page
    // if (this.props.user.isLogged === false) {
    //   this.props.history.push('/admin/login');
    // }

    //add images to DOM // may need to change this later
    if (this.props.images != prevState.imageList) {
      this.setState({ imageList: this.props.images });
      //call action to clear image section of store
      //this.props.clearImages();
    }

    //review this
    //add blogposts to DOM table
    if (
      this.props.blogposts.items.data != [] &&
      this.props.blogposts.items.type
    ) {
      console.log("this is working!!");
    }

    //check if new blogpost are equal to old blogposts
    if (this.props.blogposts.items != prevState.blogPostsList) {
      this.setState({ blogPostsList: this.props.blogposts.items });
    }

    //if user login error alert error
    if (this.props.user.items.error) {
      alert(this.props.user.items.error);
      //clears ^
    }

    //alert error if image error
    //Problem: redux store stays the same doesnt alert user if another image needs deleting
    if (this.props.image.error != this.state.error) {
      alert(this.props.image.error);
      this.setState({ error: this.props.image.error });
    }

    //add uploaded image to state image list
    if (this.props.newLength == prevState.imageList.length + 1) {
      alert(this.props.image.success);

      let newList = prevState.imageList;
      newList.unshift(this.props.image.posted_image);
      this.setState({ imageList: newList });
    }

    //alert if delete image successful and take out of imageList
    if (this.props.newLength == this.state.imageList.length - 1) {
      // if (this.props.newLength == 0) {
      //   return;
      // }
      alert("Deleted Image");
      let newList = this.state.imageList;
      let index = this.indexToDelete(newList, "url", this.props.deletedImage);
      newList.splice(index, 1);
      this.setState({ imageList: newList });
    }

    if (
      this.state.isLogged &&
      localStorage.getItem("blogTitle") &&
      localStorage.getItem("blogText")
    ) {
      let title = localStorage.blogTitle;
      let text = localStorage.blogText;

      localStorage.clear();

      this.setState({ blogTitle: title, text: text });
    }

    //if blog post successful alert the user //
    // if (this.props.blogposts.message != prevProps.blogposts.message) {
    //   alert(this.props.blogposts.message);
    //   //force a reload
    //   window.location.reload(false);
    // }

    //possibly create a notification reducer and add type to that for specific user action, then user
    //getderived to jsut check for redux state changes // cons? updating 2 compoennts
    //address this.
    if (this.props.blogisDeleted == true && this.props.blogposts.message) {
      console.log("ran");

      alert(this.props.blogposts.message);

      //delete based on id of blogpost that was deleted
      let posts = this.state.blogPostsList;
      const index = this.indexToDelete(posts, "id", this.state.blogId);
      posts.splice(index, 1);

      this.setState({ blogPostsList: posts });

      // Clear store
      this.props.dispatch({
        type: DELETE_BLOG_POST,
        deleted: false,
        message: ""
      });
    }
  }

  //has access to this
  getSnapshotBeforeUpdate(prevProps, prevState) {
    // console.log("get snapshot before updating");

    return null;
  }

  //used for updating state
  static getDerivedStateFromProps(nextProps, prevState) {
    return null;
  }

  uploadImage = async e => {
    e.preventDefault();

    if (this.state.uploadType == "") {
      alert("Please select an upload type.");
      return;
    }

    //if image type is not jpeg or png catch
    if (
      this.state.image.type != "image/png" ||
      this.state.image.type != "image/jpeg"
    ) {
      console.log("The image is a png or jpeg");

      //if this.state.image type is a string skip uploading to cloud

      //call method to upload to cloudinary get back the URL
      // const image = this.uploadToCloud();
      // const image = await this.uploadToCloud();
      const image =
        "https://res.cloudinary.com/dozvqlete/image/upload/v1592863443/l2rw1yroij6ciidlyxhp.jpg";
      const imageInfo = {
        cloudURL: image,
        admin: this.state.admin,
        uploadType: this.state.uploadType
      };
      console.log("imageinfo");
      console.log(imageInfo);
      //set state to false for added status
      // this.setState({ addedStatus: false });

      //call redux action
      this.props.addImage(imageInfo);
    } else {
      alert("Invalid image. Image must be either png or jpeg.");
    }
  };

  uploadToCloud = async () => {
    let formData = new FormData();
    console.log("image uploaded: " + this.state.image);

    formData.append("file", this.state.image);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    console.log("formdata: " + formData);
    let response = await fetch(CLOUDINARY_URL, {
      method: "POST",
      body: formData
    });

    let data = await response.json();

    if (data.error) {
      alert(data.error.message);
      return;
    }

    //return cloud image URL
    return data.secure_url;
  };

  addBlogPost = async e => {
    e.preventDefault();

    let blogPostInfo = {};

    //this issue is within uploadtocloud.
    let cloudURL = "https://placeholder.it/250x250"; //await uploadToCloud();

    blogPostInfo = {
      title: this.state.blogTitle,
      date: this.state.blogDate,
      url: cloudURL,
      text: this.state.text
    };

    //call redux action
    console.log("blogPost Info: " + blogPostInfo);
    this.props.addBlogPost(blogPostInfo);
    console.log("after blog post is sent");
  };

  deleteImage = () => {
    //remove modal from view
    this.toggleModal();
    console.log("TEST");
    console.log(this.state.imageIdToDelete);
    console.log("TEST");
    //call redux action to delete image
    this.props.deleteImage(this.state.imageIdToDelete);
  };

  saveMywork = () => {
    let text = this.state.text;
    let title = this.state.blogTitle;

    // if not 1 input filled, alert user
    if (!text && !title) {
      alert("You cannot save because all input are emtpy.");
      document.getElementById("checkbox").checked = false;
      return;
    }

    //save to localStorage
    localStorage.setItem("blogTitle", title);
    localStorage.setItem("blogText", text);

    //set state for saveFlag

    alert("Your work is saved! Next time you login your work will be here.");
    document.getElementById("checkbox").checked = false;

    window.location.reload(false);
  };

  toggleModal = () => {
    //toggles modal window on and off
    this.setState({ showModal: !this.state.showModal });
  };

  deleteBlogPost = (e, id) => {
    //add id to state
    this.setState({ blogId: id });
    //consolodate this inline l8r
    this.props.deleteBlogPost(id);
  };

  render() {
    console.log("render admin page");
    //added animation preloader
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
              {!this.state.imageList.length
                ? "You have no images posted."
                : null}
              {this.state.imageList &&
                this.state.imageList.map(image => (
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
                ))}
            </div>
            <br />
          </div>
          <ModalWindow
            image={this.state.imageToDelete}
            animation={false}
            show={this.state.showModal}
            onHide={() => this.toggleModal()}
            deleteimage={() => this.deleteImage()}
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
            <input
              id="checkbox"
              onClick={() => this.saveMywork()}
              type="checkbox"
              name="save"
            />
            Save post and exit
            <br />
            <br />
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
                {this.state.blogPostsList &&
                  this.state.blogPostsList.map(post => (
                    <tr key={post.id}>
                      <td>{post.date_posted}</td>
                      <td>{post.title}</td>
                      <td>{post.url}</td>
                      <td>
                        <button
                          onClick={e => this.deleteBlogPost(e, post.id)}
                          className="delete-button"
                        >
                          X
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

// Admin.defaultProps = {
//   newLength: 0
// };

// Admin.propTypes = {
//   images: PropTypes.shape({
//     data: PropTypes.array
//   }),
//   blogposts: PropTypes.shape({
//     data: PropTypes.array
//   }),
//   newLength: PropTypes.number.isRequired
// };

//map state to props
const mapStateToProps = state => ({
  user: state.user,
  images: state.images.images,
  image: state.images.item,
  newLength: state.images.newLength,
  deletedImage: state.images.deletedImage,
  deletedStatus: state.images.deletedStatus,
  addedStatus: state.images.addedStatus,
  blogposts: state.blogposts,
  blogisDeleted: state.blogposts.deleted
});

const mapDispatchToProps = dispatch => {
  return {
    addImage: info => dispatch(addImage(info)),
    deleteImage: info => dispatch(deleteImage(info)),
    addBlogPost: info => dispatch(addBlogPost(info)),
    deleteBlogPost: id => dispatch(deleteBlogPost(id)),
    fetchBlogPosts: () => dispatch(fetchBlogPosts()),
    authenticateAdmin: token => dispatch(authenticateAdmin(token)),
    dispatch
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin));
