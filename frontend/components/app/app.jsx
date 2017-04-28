import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from '../greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <header>
      <div >
        <div className="nav_bar">
          <Link to="/" className="header-link">
            <h1 className="header_font">Noteit
              <img src="" className="header-image"/>
            </h1>
          </Link>
          <GreetingContainer />
        </div>
      </div>
    </header>

    {children}
    <footer>
      <div className="nav_bar">
        <span>
          <h3>Website designed by Ujwala Aaduru</h3>
        </span>
        <span>
          <a href="https://github.com/aaduru">
            <img src="http://res.cloudinary.com/dzmqqopi9/image/upload/v1485187130/GitHub_xqwzee.png" className="footer-image" />GitHub</a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/ujwala-aaduru-91578334">
              <img src="https://res.cloudinary.com/dzmqqopi9/image/upload/v1485187121/linkedin_hcue5i.png" className="footer-image" />Linkedin</a>
            </span>
      </div>
    </footer>
  </div>
);

export default App;
