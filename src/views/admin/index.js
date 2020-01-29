import React, { Component, useState } from "react";
import "./index.css";
import PortfolioImage from "../../components/portfolioImage";
import { connect } from "react-redux";
import { loginAdmin } from "../../actions/adminActions.js";
import { addImage, deleteImage } from "../../actions/imageActions.js";
import PropTypes from "prop-types";

//CLOUDINARY URL & PRESET
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dozvqlete/upload";
const CLOUDINARY_UPLOAD_PRESET = "zzmnc51n";

class Admin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uploadType: null,
      image: null,
      admin: null,
      text: "",
      blogTitle: "",
      logged: false,
      imageToDelete: null,
      deleteButton: null
    };
  }

  submitLoginForm = e => {
    e.preventDefault();

    //set user info
    const login = {
      username: e.target.username.value,
      password: e.target.password.value
    };

    //call login action with login info
    this.props.loginAdmin(login);
  };

  componentDidUpdate(prevProps) {
    console.log("inside component did update");
    // console.log(prevProps);
    //   console.log('hit');
    //   //remove link to image
    //   let element = document.getElementsByClassName("mfp-image");
    //   console.log(element);
    //   console.log(element.length);
    //
    //   for (let i = 0; i < element.length; i++) {
    //     console.log(element[i]);
    //     element[i].parentNode.removeChild(element[i]);
    //   }

    //add onclick function
    // let x = document.getElementsByClassName("mfp-image");
    // console.log(x)
    // if (x) {
    //   for (let i = 0; i < x.length; i++) {
    //     x[i].addEventListener("click", function() {
    //       console.log("this should log");
    //     });
    //   }
    // }
  }
  shouldComponentUpdate() {
    console.log("inside should component update");
    return true;
  }
  componentWillReceiveProps(nextProps, prevProps) {
    //if success set admin variable to component state
    if (nextProps.user != this.props.user && nextProps.user.success) {
      alert("You have logged in");
      this.setState({ admin: nextProps.user.data.username });
    }

    //if error alert the error to user
    if (nextProps.user.error) {
      alert(nextProps.user.error);
    }

    //if error in uploading images or deleting
    if (nextProps.image.error) {
      alert(nextProps.image.error);
    }
    //connect uploaded image to images list
    if (nextProps.image.success && nextProps.image.posted_image) {
      this.props.images.data.unshift(nextProps.image.posted_image);
      alert(nextProps.image.success);
    }

    console.log("**");
    console.log("**");
    console.log(nextProps);
    console.log(prevProps);
    console.log("**");
    console.log("**");
    //check if image was deleted
    // if (nextProps.deletedImage) {
    //   alert('image successfully deleted.');
    //   this.props.images.data.filter(image => image == this.props.deletedImage ? null : image);
    // }
  }

  uploadImage = async e => {
    e.preventDefault();

    if (this.state.uploadType == null) {
      alert("Please select an upload type.");
      return;
    }

    //if image type is not jpeg or png catch
    if (
      this.state.image.type != "image/png" ||
      this.state.image.type != "image/jpeg"
    ) {
      console.log("The image is a png or jpeg");

      //call method to upload to cloudinary get back the URL
      let cloudURL =
        "https://res.cloudinary.com/dozvqlete/image/upload/v1580334806/pyuozh0stjlgk0vtkxm2.png"; //= await this.uploadToCloud();

      let imageInfo = {
        cloudURL: cloudURL,
        admin: this.state.admin,
        uploadType: this.state.uploadType
      };
      //call redux action
      this.props.addImage(imageInfo);
    } else {
      alert("Invalid image. Image must be either png or jpeg.");
    }
  };

  uploadToCloud = async () => {
    let formData = new FormData();

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
    console.log("Info. " + blogPostInfo);
    let response = await fetch("http://127.0.0.1:5000/api/add-blogpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        postInfo: JSON.stringify(blogPostInfo)
      }
    });

    let data = await response.json();
    //i can just add an alert to display a response instead of havint to display error and success
    if (data.success) {
      alert(data.success.message);
    }
  };

  deleteImage = (imageURL, index) => {
    console.log("inside delete image");
    // set state for image to delete

    //call action to delete image
    this.props.deleteImage(imageURL);
  };

  render() {
    console.log(this.props.image);

    if (this.props.isLogged) {
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
                {this.props.images.data &&
                  this.props.images.data.map((image, index) => (
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
                  onChange={e => this.setState({ blogTitle: e.target.value })}
                  name="title"
                  type="text"
                  className="form-control"
                  required="required"
                  placeholder="Title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="file-input">Image</label>
                <input
                  onChange={e => this.setState({ image: e.target.files[0] })}
                  name="image"
                  type="file"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Text</label>
                <textarea
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

//set propTypes
Admin.propTypes = {
  loginAdmin: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

//map state to props
const mapStateToProps = state => ({
  user: state.user.items,
  images: state.images.items,
  isLogged: state.user.isLogged,
  image: state.images.item,
  deletedImage: state.images.deletedImage
});

export default connect(mapStateToProps, { loginAdmin, addImage, deleteImage })(
  Admin
);
