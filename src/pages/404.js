import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

function NotFoundPage() {
  return (
    <main>
      <title>Jet Kan | Not found</title>
      <h1>Page not found</h1>
      <p>Oops! Something went wrong.</p>
      <Link to="/">Go home</Link>
      <br></br>
      <StaticImage src="../images/jerry-question-mark.jpg" alt="404" />
    </main>
  );
}

export default NotFoundPage;
