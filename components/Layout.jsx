/* | Layout.jsx | FATIMAH MOHAMMED RANA | 301342519 | SEPT 27 2024 */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <>

      <h1 id = "title"> Portfolio</h1>
      <img id="favicon" src="/prodRana.jpg" alt="logo" className="faviconLogo" />
      <nav>
      | <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/education">Services</Link> | <Link to="/project">Project</Link>| <Link to="/contact">Contact</Link>
      </nav>
         <br/>
      <hr />
      
    </>
  );
}


