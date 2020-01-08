import React, { Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './views/home';
import Header from './components/header';
import About from './views/about';
import Footer from './components/footer';
import Services from './views/services';
import SingleService from './views/services/singleservice';
import Portfolio from './views/portfolio';
import Blog from './views/blog';
import Contact from './views/contact';


class App extends Component {
  render() {
    return (
      <div className="App">
      {/* Header goes below here */}
      <Header />
      {/* Header goes above */}
      <Switch>
      <Route exact path={['/' ,'/home']} render={() =>
        <Home />
       } />
       <Route exact path={'/about'} render={() =>
         <About />
        } />
      <Route exact path={'/services'} render={() =>
        <Services />
         } />
      <Route exact path={'/singleservice'} render={() =>
        <SingleService />
        } />
      <Route exact path={'/portfolio'} render={() =>
        <Portfolio />
        } />
      <Route exact path={'/blog'} render={() =>
        <Blog />
        } />
      <Route exact path={'/contact'} render={() =>
        <Contact />
        } />
      </Switch>
      {/* footer goes below here */}
      <Footer />
      {/* footer goes below here */}

      </div>
    );
  }
}

export default App;
