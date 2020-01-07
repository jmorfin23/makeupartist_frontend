import React, { Component} from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './views/home';
import Header from './components/header';
import About from './views/about';


class App extends Component {
  render() {
    return (
      <div className="App">
      {/* Header goes below here */}
      {/* Header goes above */}
      <Switch>
      <Route exact path={['/' ,'/home']} render={() =>
        <Home />
       } />
       <Route exact path={'/about'} render={() =>
         <About />
        } />
      </Switch>

      </div>
    );
  }
}

export default App;
