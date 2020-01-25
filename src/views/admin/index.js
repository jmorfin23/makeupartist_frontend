import React, { useState } from "react";
import "./index.css";
import PortfolioImage from "../../components/portfolioImage";

//CLOUDINARY URL & PRESET
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dozvqlete/upload";
const CLOUDINARY_UPLOAD_PRESET = "zzmnc51n";

const Admin = () => {
  const [logged, setLogged] = useState(false);
  const [admin, setAdmin] = useState(null);
  const [image, setImage] = useState(null);
  const [uploadType, setUploadType] = useState(null);
  const [text, setText] = useState("");
  const [blogTitle, setBlogTitle] = useState("");

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

  const adminLogin = async e => {
    e.preventDefault();

    let response = await fetch("http://127.0.0.1:5000/api/admin-login", {
      headers: {
        "Content-Type": "application/json",
        username: e.target.username.value,
        password: e.target.password.value
      }
    });

    let data = await response.json();

    if (data.success) {
      alert("You have successfully logged in.");
      setLogged(!logged);
      setAdmin(data.username);
    }
  };

  const uploadImage = async e => {
    e.preventDefault();
    if (uploadType == null) {
      alert("Please select an upload type.");
      return;
    }
    //call method to upload to cloudinary get back the URL
    let cloudURL = await uploadToCloud();

    let res = await fetch("http://127.0.0.1:5000/api/image-save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        image: cloudURL,
        admin: admin,
        type: uploadType
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

  const uploadToCloud = async () => {
    let formData = {};
    formData.append("file", image);
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

  const addBlogPost = async e => {
    e.preventDefault();

    let blogPostInfo = {};

    //this issue is within uploadtocloud.
    let cloudURL = "https://placeholder.it/250x250"; //await uploadToCloud();

    blogPostInfo = {
      title: blogTitle,
      url: cloudURL,
      text: text
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

  if (logged) {
    return (
      <div className="make-centered">
        <div className="type-container">
          <h2>Upload an Image</h2>

          {uploadType ? null : <p>Please select a type.</p>}

          <ul className="type-list">
            <li
              id="1"
              onClick={() => setUploadType("Wedding")}
              className="type type-1"
            >
              Wedding
            </li>
            <li
              onClick={() => setUploadType("HairStyle")}
              className="type type-2"
            >
              Hairstyle
            </li>
            <li
              onClick={() => setUploadType("Commercial")}
              className="type type-3"
            >
              Commercial
            </li>
            <li onClick={() => setUploadType("Studio")} className="type type-4">
              Studio
            </li>
          </ul>
          <h3>
            {uploadType
              ? "Add image to: " + uploadType
              : "Type has not been selected."}
          </h3>
          <div className="input-container">
            <div className="input-2">
              <form onSubmit={e => uploadImage(e)}>
                <label htmlFor="file-input"></label>
                <input
                  onChange={e => setImage(e.target.files[0])}
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
          <form onSubmit={e => addBlogPost(e)}>
            <div className="form-group">
              <label>Title</label>
              <input
                onChange={e => setBlogTitle(e.target.value)}
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
                onChange={e => setImage(e.target.files[0])}
                name="image"
                type="file"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Text</label>
              <textarea
                onChange={e => setText(e.target.value)}
                cols="50"
                rows="20"
                type="text"
                name="text"
                className="form-control"
                required="required"
                placeholder="Text"
                value={text}
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
        <form onSubmit={e => adminLogin(e)}>
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
};

export default Admin;
