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
      <section>
        <h1>Contact me</h1>
        <ul>
          <li>Email: jetkan.yk@gmail.com</li>
          <li>GitHub: https://github.com/jetkan-yk</li>
          <li>LinkedIn: https://www.linkedin.com/in/jet-kan-94916b222/</li>
        </ul>
      </section>
    </Page>
  );
}

export default AboutMePage;
