import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Home from "./views/home";
import Header from "./components/header";
import About from "./views/about";
import Footer from "./components/footer";
import Services from "./views/services";
import Portfolio from "./views/portfolio";
import Blog from "./views/blog";
import Contact from "./views/contact";
import Post1 from "./views/blog/post1";
import Admin from "./views/admin";
import Login from "./views/login";
import { connect } from "react-redux";
import { fetchImages } from "./actions/imageActions.js";
import { fetchBlogPosts } from "./actions/blogActions.js";
import Reset from "./views/reset";
import Passwords from "./views/passwords";
import ErrorNotification from "./components/errorNotification";

class App extends Component {
  componentDidMount() {
    // check local storage for token
    console.log("app component did mount");
    // console.log(this.props);
    //retrieve portfolio images from backend
    // this.props.fetchImages();
    // console.log(this.props);
    //retrieve blog posts from backend
    // this.props.fetchBlogPosts();
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('should component update');
  //   return false
  // }
  componentDidUpdate(prevProps, prevState) {
    console.log("app component did update");
    // console.log(this.props);
  }

  //ROUTE ISSUE DISPLAYING ADMIN PAGE AND LOGIN PAGES
  //route causes a redux state refresh - need to prevent this
  render() {
    console.log("inside app render ");
    console.log(this.props);
    return (
      <div className="App">
        <ErrorNotification />
        <Header page={this.props.location.pathname} />
        <Switch>
          <Route exact path="/admin/home">
            {this.props.user.isLogged ? (
              <Admin />
            ) : (
              <Redirect to="/admin/login" />
            )}
          </Route>
          <Route exact path={"/admin/login"} render={() => <Login />} />
          <Route exact path={["/", "/home"]} render={() => <Home />} />
          <Route exact path={"/about"} render={() => <About />} />
          <Route exact path={"/services"} render={() => <Services />} />
          <Route exact path={"/portfolio"} render={() => <Portfolio />} />
          <Route exact path={"/blog"} render={() => <Blog />} />
          <Route exact path={"/contact"} render={() => <Contact />} />
          <Route exact path={"/reset"} render={() => <Reset />} />
          <Route
            path={"/reset_password=:token"}
            render={({ match }) => <Passwords info={match} />}
          />
          <Route path={"/blog/:post"} render={() => <Post1 />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

//Proptypes
App.propTypes = {
  images: PropTypes.shape({
    data: PropTypes.array
  }),
  blogposts: PropTypes.shape({
    data: PropTypes.array
  })
};

//using this to map to props
const mapStateToProps = state => ({
  error: state.error,
  images: state.images.items,
  blogposts: state.blogposts,
  user: state.user
});

export default withRouter(
  connect(mapStateToProps, { fetchBlogPosts, fetchImages })(App)
);
