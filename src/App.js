import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import Projects from './components/Projects/lameProjects';
import Contact from './components/Contact';
import About from './components/About/index';
import Footer from'./components/Footer/index';

class App extends Component {
  render(){
  return (
    <Router>
      <div>
      <Nav/>
      <Switch>
        <Route path="/" exact component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer/>
      </div>
    </Router>
  );
  }
}

export default App;