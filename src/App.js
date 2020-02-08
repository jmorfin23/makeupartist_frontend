import React, { Component } from "react";
import "./App.css";
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
        {/* Header goes below here */}
        <Header />
        {/* Header goes above */}
        <Switch>
          <Route exact path={"/admin"} render={() => <Admin />} />
          <Route exact path={["/", "/home"]} render={() => <Home />} />
          <Route exact path={"/about"} render={() => <About />} />
          <Route exact path={"/services"} render={() => <Services />} />
          <Route exact path={"/portfolio"} render={() => <Portfolio />} />
          <Route exact path={"/blog"} render={() => <Blog />} />
          <Route exact path={"/contact"} render={() => <Contact />} />
          <Route
            exact
            path={"/post:id"}
            render={data => <Post1 data={data} />}
          />
          <Route exact path={"/leftsidebar"} render={() => <LeftSideBar />} />
        </Switch>
        {/* footer goes below here */}
        <Footer />
        {/* footer goes below here */}
      </div>
    );
  }
}

//using this to map to props
const mapStateToProps = state => ({
  images: state.images.items,
  blogposts: state.blogposts.items,
  user: state.user.items
});

export default connect(mapStateToProps, { fetchBlogPosts, fetchImages })(App);
