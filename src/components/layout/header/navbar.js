import * as React from "react";
import { Link } from "gatsby";

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about-me">About Me</Link>
        </li>
        <li>
          <Link to="/artificial-intelligence">Artificial Intelligence</Link>
        </li>
        <li>
          <Link to="/software-engineering">Software Engineering</Link>
        </li>
        <li>
          <a href="/resume.pdf">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
