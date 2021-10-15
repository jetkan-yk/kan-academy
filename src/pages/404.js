import * as React from "react";
import { Link } from "gatsby";

function NotFoundPage() {
  return (
    <main>
      <title>Jet Kan | Not found</title>
      <h1>Page not found</h1>
      <p>
        Oops! Something went wrong.
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
}

export default NotFoundPage;
