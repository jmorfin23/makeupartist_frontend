import React, { Component } from 'react';
import { useSelector } from 'react-redux';


const Admin = () => {

  const loggedIn = useSelector(state => state.logged);

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
      console.log('successfully logged in ')

    }
  }

    return(
      <div className="admin">
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
    );
}

export default Admin;
