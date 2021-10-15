import * as React from "react";
import Page from "../components/page";

function IndexPage() {
  return (
    <Page pageTitle="AI Engineer & Full Stack Developer">
      <section>
        <h1>Welcome to Kan Academy!</h1>
        <p>
          I'm a NUS Computer Science undergraduate specialized in Artificial
          Intelligence. I love learning new things and sharing with people.
        </p>
      </section>
      <section>
        <h1>My Projects</h1>
        <ul>
          <li>Artificial Intelligence</li>
          <li>Software Engineering</li>
        </ul>
      </section>
    </Page>
  );
}

export default IndexPage;
