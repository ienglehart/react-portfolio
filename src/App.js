import React from 'react';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Switch } from "react-router";

const showAbout = () => {
  if (window.location.pathname === "/react-portfolio/"){
    return <About />
  }
}
const showProjects = () => {
  if (window.location.pathname === "/react-portfolio/portfolio"){
    return <Projects />
  }
}
const showContact = () => {
  if (window.location.pathname === "/react-portfolio/contact"){
    return <Contact />
  }
}

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        {showAbout()}
        {showProjects()}
        {showContact()}
      </main> 
    </div>
  );
}

export default App;