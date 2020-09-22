import React, { Component } from "react";
import "./App.css";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Home from "./views/home";
import Header from "./components/header";
import About from "./views/about";
import Footer from "./components/footer";
import Services from "./views/services";
import Portfolio from "./views/portfolio";
import Blog from "./views/blog";
import Contact from "./views/contact";
import Post from "./views/blog/post";
import Admin from "./views/admin";
import Login from "./views/login";
import { connect } from "react-redux";
import { fetchImages } from "./actions/imageActions.js";
import { fetchBlogPosts } from "./actions/blogActions.js";
import Reset from "./views/reset";
import Passwords from "./views/passwords";
import ErrorNotification from "./components/errorNotification";
import Four04 from "./components/404_Page";
import { animateScroll as scroll } from "react-scroll";
import Loader from "./components/loading";
import Notification from "./components/notification";

class App extends Component {
  render() {
    // scroll to top //
    this.props.history.listen((location, action) => {
      scroll.scrollToTop();
    });
    //this.props.user.isLogged = true;
    return (
      <div className="App">
        {this.props.isLoading ? <Loader /> : null}
        <ErrorNotification />
        <Notification />
        <Header path={this.props.location.pathname} />
        <Switch>
          <Route exact path={"/admin/home"}>
            {this.props.user.isLogged ? (
              <Admin />
            ) : (
              <Redirect to="/admin/login" />
            )}
          </Route>
          <Route exact path={"/admin/login"}>
            {this.props.user.isLogged ? (
              <Redirect to="/admin/home" />
            ) : (
              <Login />
            )}
          </Route>
          <Route exact path={["/", "/home"]} render={() => <Home />} />
          <Route exact path={"/about"} render={() => <About />} />
          <Route exact path={"/services"} render={() => <Services />} />
          <Route exact path={"/portfolio"} render={() => <Portfolio />} />
          <Route exact path={"/blog"} render={() => <Blog />} />
          <Route path={"/blog/:post"} render={() => <Post />} />
          <Route exact path={"/contact"} render={() => <Contact />} />
          <Route exact path={"/reset"} render={() => <Reset />} />
          <Route path={"/reset_password/:token"} render={() => <Passwords />} />
          {/* No match -> Return 404 */}
          <Route render={() => <Four04 />} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

//using this to map to props
const mapStateToProps = state => ({
  user: state.user,
  isLoading: state.loading.isLoading
});

export default withRouter(
  connect(mapStateToProps, { fetchBlogPosts, fetchImages })(App)
);
