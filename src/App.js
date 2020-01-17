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

//will probably have to use redux to store images
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    };
  }

  componentDidMount() {
    console.log("inside component did mount.");
    this.retrieveAllPosts();
  }

  retrieveAllPosts = async () => {
    const URL = "http://127.0.0.1:5000/api/retrieve-images";
    let response = await fetch(URL);
    let data = await response.json();

    if (data.error) {
      alert(data.error.message);
    }

    let d = data.success.data;
    console.log(d);
    for (let i = 0; i < d.length; i++) {
      this.setState(prevState => ({
        images: [...prevState.images, d[i]]
      }));
    }
    console.log(this.state.images);
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
