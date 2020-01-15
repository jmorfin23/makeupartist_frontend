import React, { Component, useState } from 'react';
import './index.css';


//== cloudinary presets for uploading images ==//
const CLOUDINARY_URL = 	'https://api.cloudinary.com/v1_1/dozvqlete/upload';
const CLOUDINARY_UPLOAD_PRESET = 'zzmnc51n';
//=============================================//

const Admin = () => {

  const [logged, setLogged] = useState(false);
  const [admin, setAdmin] = useState(null);
  const [uploadType, setUploadType] = useState(null);


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
      alert('You have successfully logged in.');
      setLogged(!logged);
      setAdmin(data.username);
    }

  }

  const uploadImage = async(imageURL) => {
    console.log('inside uploadimage');
    const URL1 = 'http://127.0.0.1:5000/api/image-save';
    console.log('this is the image url: ' + imageURL);
    let res = await fetch(URL1, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'image': imageURL,
        'admin': admin,
        'type': uploadType
      }
    });
    let returned = await res.json();

    console.log(returned);
  }

  const onChange = async(e) => {
    console.log('test1')
    let file = e.target.files[0];

    var formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    console.log('test2')
    //request
    let response = await fetch(CLOUDINARY_URL, {
      method: 'POST',
      body: formData
    });
    console.log('test3')
    let data = await response.json();
    console.log('test4')
    console.log(data);
    if (data.error) {
      alert(data.error.message);
      return;
    }
    //call uploadImage to add to profile pic to database
    uploadImage(data.secure_url);
    console.log('test5')
  }

  if (logged) {
    return(
      <div className="make-centered">
        <div className="type-container">
          <h2>Upload an Image</h2>

          { uploadType ? null : <p>Please select a type.</p> }

          <ul className="type-list">
            <li id="1" onClick={() => setUploadType('Wedding')} className="type type-1">Wedding</li>
            <li onClick={() => setUploadType('HairStyle')} className="type type-2">Hairstyle</li>
            <li onClick={() => setUploadType('Commercial')} className="type type-3">Commercial</li>
            <li onClick={() => setUploadType('Studio')} className="type type-4">Studio</li>
          </ul>
          <h3>{ uploadType ? 'Add image to: ' + uploadType : 'Type has not been selected.' }</h3>
          <div className="input-container">
            <div className="input-2">
              <label htmlFor="file-input"></label>
              <input onChange={onChange} type="file"></input>
            </div>
          </div>
        </div>


      </div>
    );
  } else {
    return (
          <div className="admin">
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
  );}

}

export default Admin;
