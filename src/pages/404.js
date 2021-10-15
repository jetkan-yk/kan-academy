import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Page from "../components/page";

function NotFoundPage() {
  return (
    <Page pageTitle="Not Found">
      <h1>Page not found</h1>
      <p>Oops! Something went wrong.</p>
      <Link to="/">Go home</Link>
      <br></br>
      <StaticImage src="../images/jerry-question-mark.jpg" alt="404" />
    </Page>
  );
}

export default NotFoundPage;
