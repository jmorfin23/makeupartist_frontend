import React, { Component, useState } from 'react';
import './index.css';


//== cloudinary presets for uploading images ==//
const CLOUDINARY_URL = 	'https://api.cloudinary.com/v1_1/dozvqlete/upload';
const CLOUDINARY_UPLOAD_PRESET = 'zzmnc51n';
//=============================================//

const Admin = () => {

  const [logged, setLogged] = useState(false);
  const [admin, setAdmin] = useState(null);

  const adminLogin = async(e) => {
    e.preventDefault();

    // //call api
    const URL = 'http://127.0.0.1:5000/api/admin-login';

    let response = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        'username': e.target.username.value,
        'password': e.target.password.value
      }
    });

    let data = await response.json();
    console.log(data);
    if (data.Success) {
      setLogged(!logged);
      setAdmin(data.username);
    }

  }

  const uploadImage = async(image) => {
    let res = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        'image': image,
        'admin': admin
      }
    });
    let returned = await res.json();

    console.log(returned);
  }

  const onChange = async(e) => {

    let file = e.target.files[0];

    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    //request
    let response = await fetch(CLOUDINARY_URL, {
      method: 'POST',
      body: formData
    });
    let data = await response.json();
    //call testfunct to add to profile pic to database
    uploadImage(data.secure_url);
  }

  if (logged) {
    return(
      <div className="make-centered">
        <h1>You are now logged in : { admin }</h1>

        <div className="type-container">
          <h2>Upload Image</h2>

          <ul className="type-list">
            <li onClick={() => console.log('pressed')} className="type type-1">Wedding</li>
            <li className="type type-2">Hairstyle</li>
            <li className="type type-3">Commercial</li>
            <li className="type type-4">Portfolio</li>
          </ul>

        </div>


      </div>
    );
  } else {
    return (<div className="admin">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h2>Admin Login</h2>
            <form onSubmit={(e) => adminLogin(e)}>
              <div className="form-group">
                <label>Username</label>
                <input name="username" type="username" className="form-control" required="required" placeholder="Username" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input name='password' type="password" required="required" className="form-control" placeholder="Password"/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
  );}

}

export default Admin;



//<label htmlFor="file-input"></label>
//<input onChange={onChange} id="file-input" type="file"></input>
