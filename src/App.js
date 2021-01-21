import React, { useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './App.css';

function App() {
  const [categories] = useState([
    {
      name: 'Portfolio',
      description: 'Portfolio of Web Development Projects i have completed',
    },
    { name: 'Projects', description: 'Portraits of people in my life' }
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav></Nav>
      <main>
        {!contactSelected ? (
          <>
            <Projects currentCategory={currentCategory}></Projects>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
    </div>
  );
}

export default App;
