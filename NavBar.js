import React from 'react';
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';

function Navbar() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

function Home() {
  return <h1>Welcome to the Home page!</h1>;
}

function About() {
  return <h1>Learn more about us!</h1>;
}

function Contact() {
  return <h1>Get in touch with us!</h1>;
}

export default Navbar;
