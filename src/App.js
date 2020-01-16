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

class App extends Component {
  constructor(props) {
    super(props);
  }

  newsletterSignUp = async () => {
    console.log("newsletter func");

    const URL = "http://127.0.0.1:5000/api/newsletter";

    let response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

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

export default App;
