import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";

function NavBar() {
  const data = useStaticQuery(graphql`
    query {
      file(extension: { eq: "pdf" }, name: { eq: "resume" }) {
        publicURL
      }
    }
  `);

  const resumeUrl = data.file.publicURL;

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
          <a href={resumeUrl}>Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
