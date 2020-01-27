import React, { Component, useState } from "react";
import "./index.css";
import PortfolioImage from "../../components/portfolioImage";
import { connect } from "react-redux";
import { loginAdmin } from "../../actions/adminActions.js";

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
      logged: false
    };
  }

  // const [logged, setLogged] = useState(false);
  // const [admin, setAdmin] = useState(null);
  // const [image, setImage] = useState(null);
  // const [uploadType, setUploadType] = useState(null);
  // const [text, setText] = useState("");
  // const [blogTitle, setBlogTitle] = useState("");

  componentDidMount() {
    // add event handler for selecting images to delete
    let x = document.getElementsByClassName("portfolio-items");
    if (x) {
      for (let i = 0; i < x.length; i++) {
        x[i].addEventListener("click", function() {
          console.log("this should log");
        });
      }
    }
    //remove a tag
    let element = document.getElementsByClassName("mfp-image");
    for (let i = 0; i < element.length; i++) {
      element[i].parentNode.removeChild(element[i]);
    }
  }

  submitLoginForm = e => {
    e.preventDefault();
    console.log("submit login form is called");

    //set user info into obj
    const login = {
      username: e.target.username.value,
      password: e.target.password.value
    };
    console.log(login);
    console.log("before login admin is called");
    //call login action with login info
    this.props.loginAdmin(login);
    console.log("after login admin is called");

    console.log(this.props.user);
    // console.log(user);
    // console.log('this is user success' + user.success);
    // console.log(isLogged);

    // if (user.success) {
    //   alert("You have successfully logged in.");
    //   setAdmin(user.data.username);
    //   console.log(user.data.username);
    //   console.log(isLogged);
    // }
  };

  componentDidUpdate() {
    console.log("inside component did update");
    console.log(this.props.user);
  }
  componentWillReceiveProps(nextProps) {
    console.log("inside component will recieve props");
    console.log(nextProps);
  }

  uploadImage = async e => {
    e.preventDefault();
    if (this.state.uploadType == null) {
      alert("Please select an upload type.");
      return;
    }
    //call method to upload to cloudinary get back the URL
    let cloudURL = await this.uploadToCloud();

    let res = await fetch("http://127.0.0.1:5000/api/image-save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        image: cloudURL,
        admin: this.state.admin,
        type: this.state.uploadType
      }
    });

    let returned = await res.json();

    if (returned.success) {
      alert(returned.success);
    } else if (returned.error) {
      alert(returned.error.message);
    } else {
      alert("There was an issue.");
    }
  };

  uploadToCloud = async () => {
    let formData = {};
    formData.append("file", this.state.image);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

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
  render() {
    console.log("**********");
    console.log(this.props.user);
    if (this.state.logged) {
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
              <PortfolioImage />
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

//map state to props
const mapStateToProps = state => ({
  user: state.user.items
});

export default connect(mapStateToProps, { loginAdmin })(Admin);
