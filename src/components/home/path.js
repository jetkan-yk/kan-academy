import { Link } from "gatsby";
import * as React from "react";

function Path() {
  return (
    <section id="path">
      <h1>My Projects</h1>
      <Link to="/artificial-intelligence">Artificial Intelligence</Link>
      <br />
      <Link to="/software-engineering">Software Engineering</Link>
    </section>
  );
}
export default Path;
