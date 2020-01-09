import React, { Component } from 'react';


class Admin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  adminLogin = async(e) => {
    e.preventDefault();
    console.log('login pressed');


    //call api
    const URL = 'http://127.0.0.1:5000/api/admin-login';

    let response = await fetch(URL, {
      headers: {
        'Content-Type': 'application/json',
        'username': this.state.username,
        'password': this.state.password
      }
    });

    let data = await response.json();

    console.log(data);

    if (data.Success) {
      console.log('successfully logged in ')
    }
  }

  setUsername = (e) => {
    this.setState({ username: e.target.value });
  }
  setPassword = (e) => {
    this.setState({password: e.target.value });
  }


  render() {
    return(
      <div className="admin">
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <h2>Admin Login</h2>
              <form onSubmit={this.adminLogin}>
                <div className="form-group">
                  <label>Username</label>
                  <input type="username" onChange={this.setUsername} className="form-control" required="required" placeholder="Username" value={this.state.username}/>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password</label>
                  <input type="password" onChange={this.setPassword} required="required" className="form-control" value={this.state.password} placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

export default Admin;
