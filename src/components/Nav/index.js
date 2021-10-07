import { React, Component } from 'react';
import { Link } from 'react-router-dom'

export default class Nav  extends Component {
  render(){
  return(
    <nav className="nav flex-row px-1 text-center">
      <div>
        <ul className="list-group list-group-horizontal flex-row my-auto">
          <li className="list-group-item hvr">
            <Link to='/react-portfolio/' data-testid="link m-2 p-2" className="nav-link">
              Ian Englehart
            </Link>
          </li>
          <li className="list-group-item hvr">
            <Link to='/react-portfolio/portfolio' data-testid="link m-2 p-2" className="nav-link">
              Projects
            </Link>
          </li>
          <li className="list-group-item hvr">
            <Link to='/react-portfolio/contact' data-testid="link m-2 p-2" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}
}
