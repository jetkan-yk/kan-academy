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
          <Link to="/ai">Artificial Intelligence</Link>
        </li>
        <li>
          <Link to="/swe">Software Engineering</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
