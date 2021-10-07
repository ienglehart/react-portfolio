import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About/index';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
  return (
    <Router>
      <div>
      <Nav/>
      <Switch>
        <Route path="/react-portfolio/" exact component={About} />
        <Route path="/react-portfolio/portfolio" component={Projects} />
        <Route path="/react-portfolio/contact" component={Contact} />
      </Switch>
      </div>
    </Router>
  );
  }
}

export default App;