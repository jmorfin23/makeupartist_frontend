import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./views/home";
import Header from "./components/header";
import About from "./views/about";
import Footer from "./components/footer";
import Services from "./views/services";
import SingleService from "./views/services/singleservice";
import Portfolio from "./views/portfolio";
import Blog from "./views/blog";
import Contact from "./views/contact";
import Post1 from "./views/blog/post1";
import LeftSideBar from "./views/blog/leftsidebar";
import Admin from "./views/admin";
import { connect } from "react-redux";
import { fetchImages } from "./actions/imageActions.js";

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchImages();
  }
  render() {
    const images = this.props.images.data;
    console.log(images);

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
          <Route
            exact
            path={"/singleservice"}
            render={() => <SingleService />}
          />
          <Route exact path={"/portfolio"} render={() => <Portfolio />} />
          <Route exact path={"/blog"} render={() => <Blog />} />
          <Route exact path={"/contact"} render={() => <Contact />} />
          <Route exact path={"/post1"} render={() => <Post1 />} />
          <Route exact path={"/leftsidebar"} render={() => <LeftSideBar />} />
        </Switch>
        {/* footer goes below here */}
        <Footer />
        {/* footer goes below here */}
      </div>
    );
  }
}

//using this to map to our component
const mapStateToProps = state => ({
  images: state.images.items
});

export default connect(mapStateToProps, { fetchImages })(App);
