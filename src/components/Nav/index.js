import React from 'react';

function Nav(props) {
  const {

  } = props;

  return (
    
    <nav className="nav flex-row px-1 text-center">
      <div>
        <ul className="list-group list-group-horizontal flex-row my-auto">
          <li className="list-group-item hvr">
            <a data-testid="link m-2 p-2" className="nav-link" href="/react-portfolio">
              Ian Englehart
            </a>
          </li>
          <li className="list-group-item hvr">
            <a data-testid="link m-2 p-2" className="nav-link" href="/react-portfolio/portfolio">
              Projects
            </a>
          </li>
          <li className="list-group-item hvr">
            <a data-testid="link m-2 p-2" className="nav-link" href="/react-portfolio/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}

export default Nav;