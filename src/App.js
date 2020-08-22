import React, { Component } from "react";
import "./App.css";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import Home from "./views/home";
import Header from "./components/header";
import About from "./views/about";
import Footer from "./components/footer";
import Services from "./views/services";
import Portfolio from "./views/portfolio";
import Blog from "./views/blog";
import Contact from "./views/contact";
import Post1 from "./views/blog/post1";
import LeftSideBar from "./views/blog/leftsidebar";
import Admin from "./views/admin";
import { connect } from "react-redux";
import { fetchImages } from "./actions/imageActions.js";
import { fetchBlogPosts } from "./actions/blogActions.js";
import Reset from "./views/reset";
import Passwords from "./views/passwords";
import ErrorNotification from "./components/errorNotification";

class App extends Component {
  componentDidMount() {
    //retrieve portfolio images from backend
    this.props.fetchImages();

    //retrieve blog posts from backend
    this.props.fetchBlogPosts();
  }
  render() {
    return (
      <div className="App">
        <ErrorNotification />
        <Header />
        <Switch>
          <Route exact path={"/admin"} render={() => <Admin />} />
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
          <Route path={"/:post"} render={() => <Post1 />} />
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
  user: state.user.items
});

export default connect(mapStateToProps, { fetchBlogPosts, fetchImages })(App);
