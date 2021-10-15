import * as React from "react";
import Page from "../components/page";

function AboutMePage() {
  return (
    <Page pageTitle="About Me">
      <section>
        <h1>Who am I</h1>
        <p>More stuff about me here.</p>
      </section>
      <section>
        <h1>My Resume</h1>
      </section>
    </Page>
  );
}

export default AboutMePage;
