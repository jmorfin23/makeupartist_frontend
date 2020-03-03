import React, { Component, useState } from "react";
import "./index.css";
import PortfolioImage from "../../components/portfolioImage";
import { connect } from "react-redux";
import { loginAdmin } from "../../actions/adminActions.js";
import { addImage, deleteImage } from "../../actions/imageActions.js";
import { addBlogPost } from "../../actions/blogActions.js";
import PropTypes from "prop-types";
import ModalWindow from "../../components/modal";
//CLOUDINARY URL & PRESET
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dozvqlete/upload";
const CLOUDINARY_UPLOAD_PRESET = "zzmnc51n";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadType: "",
      image: null,
      admin: null,
      text: "",
      blogTitle: "",
      isLogged: false,
      imageList: [],
      error: null,
      addedStatus: false,
      saveFlag: false,
      showModal: false,
      imageToDelete: null,
      imageIdToDelete: null
    };
  }

  submitLoginForm = e => {
    e.preventDefault();

    //set user info
    const login = {
      username: e.target.username.value,
      password: e.target.password.value
    };
    console.log("inside submit login form");
    //call login action with login info
    this.props.loginAdmin(login);
  };

  //find index of images object list to be deleted
  indexToDelete = (arr, attr, value) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][attr] == value) return i;
    }
    return -1;
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("inside component did update");

    //add images to DOM // may need to change this later
    if (this.props.images.data != prevState.imageList) {
      this.setState({ imageList: this.props.images.data });
      //call action to clear image section of store
      //this.props.clearImages();
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
    if (this.props.image.newLength == prevState.imageList.length + 1) {
      alert(this.props.image.success);

      let newList = prevState.imageList;
      newList.unshift(this.props.image.posted_image);
      this.setState({ imageList: newList });
    }

    //alert if delete image successful and take out of imageList
    if (this.props.image.newLength == this.state.imageList.length - 1) {
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
    console.log(this.props);
    //if blog post successful alert the user
    if (this.props.blogposts.item.success != prevProps.blogposts.item.success) {
      alert(this.props.blogposts.item.success.message);
      //force a reload
      window.location.reload(false);
    }
  }

  //has access to this
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("get snapshot before updating");

    return null;
  }

  //used for updating state
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("inside get derived state from props");
    console.log(nextProps);
    console.log(prevState);

    //alert and set state if login successful
    if (nextProps.user.isLogged != prevState.isLogged) {
      alert("You have logged in");
      return {
        isLogged: nextProps.user.isLogged,
        admin: nextProps.user.items.data.username
      };
    }

    //check if local storage has blogPostInfo
    //  if (localStorage.getItem('blogTitle') && localStorage.getItem('blogText') && prevState.saveFlag != nextProps.saveFlag) {
    //   console.log('there is blogpost in the local storage!!!');
    //   let title = localStorage.blogTitle;
    //   let text = localStorage.blogText;

    //   localStorage.clear();
    //   //save to state
    //   return { blogTitle: title, text: text };
    // }
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
      let cloudURL =
        "https://res.cloudinary.com/dozvqlete/image/upload/v1580235101/xju5oeyzpily9ok9jdde.png"; //await this.uploadToCloud();

      let imageInfo = {
        cloudURL: cloudURL,
        admin: this.state.admin,
        uploadType: this.state.uploadType
      };

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

  render() {
    if (this.state.isLogged) {
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
            {/* Modal */}
            {/* <div className="modal fade" id="deleteImageModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <h3 className="modal-title">Delete Image:</h3>
                </div>
                <div className="modal-body">
                  Are you sure you want to delete this image? 
                </div>
                <div className="modal-footer center">
                  <button type="button" className="btn btn-primary" data-dismiss="modal">No</button>
                  <button type="button" className="btn btn-primary" onClick={() => this.deleteImage(image.url, index)}>Yes</button>
                </div>
              </div>
            </div>
          </div> */}
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
                    <th>ID</th>
                    <th>Title</th>
                    <th>Date Posted</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody className="delete-table-body">
                  {this.props.blogposts.items.data &&
                    this.props.blogposts.items.data.map(post => (
                      <tr key={post.id}>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.date_posted}</td>
                        <td>
                          <button className="delete-button">X</button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="admin">
          <h2>Admin Login</h2>
          <form onSubmit={e => this.submitLoginForm(e)}>
            <div className="form-group">
              <label>Username</label>
              <input
                name="username"
                type="username"
                className="form-control"
                required="required"
                placeholder="Username"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                name="password"
                type="password"
                required="required"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      );
    }
  }
}

//set propTypes TODO
Admin.propTypes = {
  loginAdmin: PropTypes.func.isRequired,
  addImage: PropTypes.func.isRequired,
  deleteImage: PropTypes.func.isRequired,
  addBlogPost: PropTypes.func.isRequired,
  user: PropTypes.object,
  deletedStatus: PropTypes.bool,
  addedStatus: PropTypes.bool,
  deletedImage: PropTypes.object,
  images: PropTypes.array,
  image: PropTypes.object,
  blogposts: PropTypes.object
};

//consolodate this l8r
//map state to props
const mapStateToProps = state => ({
  user: state.user,
  images: state.images.items,
  image: state.images.item,
  deletedImage: state.images.deletedImage,
  deletedStatus: state.images.deletedStatus,
  addedStatus: state.images.addedStatus,
  blogposts: state.blogposts
});

export default connect(mapStateToProps, {
  loginAdmin,
  addImage,
  deleteImage,
  addBlogPost
})(Admin);
