import React, { Component, useState } from "react";
import "./index.css";

//== cloudinary presets for uploading images ==//
const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/dozvqlete/upload";
const CLOUDINARY_UPLOAD_PRESET = "zzmnc51n";
//=============================================//

const Admin = () => {
  const [logged, setLogged] = useState(false);
  const [admin, setAdmin] = useState(null);
  const [image, setImage] = useState(null);
  const [uploadType, setUploadType] = useState(null);
  const [imageURL, setImageURL] = useState(null);

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

    if (data.Success) {
      alert("You have successfully logged in.");
      setLogged(!logged);
      setAdmin(data.username);
    }
  };

  const uploadImage = async e => {
    e.preventDefault();
    //call method to upload to cloudinary.
    uploadToCloud();

    let res = await fetch("http://127.0.0.1:5000/api/image-save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        image: imageURL,
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
    var formData = new FormData();
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
    //set cloudinary URL to state.
    console.log("sucessfully uploaded to cloud" + data.secure_url);
    setImageURL(data.secure_url);
  };

  const addBlogPost = async e => {
    e.preventDefault();
    console.log("inside blog post");
    uploadToCloud();
    console.log("test1");
    let response = await fetch("http://127.0.0.1:5000/api/add-blogpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        title: e.target.title.value,
        text: e.target.text.value,
        url: imageURL
      }
    });
    console.log("test2");
    let data = await response.json();
    console.log("test2");
    console.log(data);
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
          <p>to do</p>
        </div>

        <div className="blog-post">
          <h2>Add a Blog Post: </h2>
          <form onSubmit={e => addBlogPost(e)}>
            <div className="form-group">
              <label>Title</label>
              <input
                name="title"
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
                cols="50"
                rows="20"
                name="text"
                className="form-control"
                required="required"
                placeholder="Text"
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
