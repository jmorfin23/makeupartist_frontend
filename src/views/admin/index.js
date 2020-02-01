import React, { Component, useState } from "react";
import "./index.css";
import PortfolioImage from "../../components/portfolioImage";
import { connect } from "react-redux";
import { loginAdmin } from "../../actions/adminActions.js";
import { addImage, deleteImage } from "../../actions/imageActions.js";
import { addBlogPost } from "../../actions/blogActions.js";
import PropTypes from "prop-types";

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
      addedStatus: false
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("inside component did update");

    //add images to DOM // may need to change this later
    if (this.props.images.data != prevState.imageList) {
      this.setState({ imageList: this.props.images.data });
    }
    //if user login error alert error
    if (this.props.user.items.error) {
      alert(this.props.user.items.error);
    }

    //alert error if image error
    if (this.props.image.error != prevState.error) {
      alert(this.props.image.error);
    }

    // console.log('**');
    // console.log('newLength ' + this.props.image.newLength);
    // console.log('state length: ' + prevState.imageList.length);
    if (this.props.image.newLength == prevState.imageList.length + 1) {
      alert(this.props.image.success);

      //add new image to state image list
      let newList = prevState.imageList;
      newList.unshift(this.props.image.posted_image);
      this.setState({ imageList: newList });
    }

    //alert if delete image successful and take out of imageList
    if (this.props.image.newLength == this.state.imageList.length - 1) {
      alert("Deleted Image");
      let newList = this.state.imageList;
      newList.splice(newList.indexOf(this.props.deletedImage), 1);
      this.setState({ imageList: newList });
    }

    // console.log('*******');
    // console.log(this.props.blogposts.item);
    // console.log(prevProps.blogposts);
    //alert if blogpost was successful
    // if (this.props.blogposts.item.success != prevProps.blogposts.item.success) {
    //   alert(this.props.blogposts.item.success.message);
    //   //clear state for next blogpost
    // }
    // console.log('local storage items: ');
    // console.log(localStorage);

    // console.log('this is the state images');
    // console.log(this.state.image);
  }

  componentDidMount() {
    console.log("component did mount");
  }
  shouldComponentUpdate() {
    console.log("inside should component update");
    return true;
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
    console.log("**111");
    console.log(localStorage);
    //check if local storage has blogPostInfo
    //  if (localStorage.getItem('blogTitle')) {
    //   console.log('there is blogpost in the local storage!!!');
    //   let title = localStorage.blogTitle;
    //   let image = JSON.parse(localStorage.blogImage);
    //   let text = localStorage.blogText;

    //   //save to state
    //   return {blogTitle: title, text: text, image: image };
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
        "https://res.cloudinary.com/dozvqlete/image/upload/v1580264807/hk0jyszxywgvtoc8gxa4.png"; //await this.uploadToCloud();

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

  deleteImage = (imageURL, index) => {
    console.log("inside delete image");
    //perhaps delete based on index, would need to reverse the array
    //if there are two of the same in portfolio, deleting occurs on the ///first one in the array
    //after deleting something and then adding a new image to portfolio,
    //

    //call action to delete image
    this.props.deleteImage(imageURL);
  };

  saveMywork = () => {
    console.log("states for saving: ");
    console.log(this.state.image);
    let image = this.state.image;
    let text = this.state.text;
    let title = this.state.blogTitle;
    console.log(JSON.stringify(image));
    //if not 1 input filled, alert user
    // if (!image && !text && !title) {
    //   alert('You cannot save because all input are emtpy.');
    //   document.getElementById('checkbox').checked = false;
    //   return;
    // }

    // // //save to localStorage
    // localStorage.setItem('blogTitle', title);
    // localStorage.setItem('blogText', text);
    // localStorage.setItem('blogImage', image);

    // alert('Your work is saved! Next time you login your work will be here.');
    // document.getElementById('checkbox').checked = false;
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
                  this.state.imageList.map((image, index) => (
                    <div
                      key={index}
                      className="portfolio-item item fashion col-xs-12 col-sm-6 col-md-4"
                    >
                      <div
                        className="a-img"
                        style={{ backgroundImage: `url(` + image + `)` }}
                      ></div>
                      <a
                        onClick={() => this.deleteImage(image, index)}
                        className="mfp-image"
                      ></a>
                    </div>
                  ))}
              </div>
              <br />
              <button className="btn btn-primary">Submit</button>
            </div>
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
              />{" "}
              Check this box to save the post
              <br />
              <br />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
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
  user: PropTypes.object.isRequired
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
