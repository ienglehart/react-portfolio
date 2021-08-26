import React from 'react';

function Nav(props) {
  const {

  } = props;

  return (
    
    <nav className="nav flex-row px-1 bg-light text-center">
      <h3 className="place-center mx-3 mt-1 pr-6">
        Ian Englehart
      </h3>
      <div>
        <ul className="list-group list-group-horizontal flex-row my-auto">
          <li className="list-group-item mx-2">
            <a data-testid="link m-2 p-2" href="/react-portfolio">
              About Me
            </a>
          </li>
          <li className="list-group-item mx-2">
            <a data-testid="link m-2 p-2" href="/react-portfolio/portfolio">
              Projects
            </a>
          </li>
          <li className="list-group-item mx-2">
            <a data-testid="link m-2 p-2" href="/react-portfolio/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}

export default Nav;