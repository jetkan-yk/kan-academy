import { Link } from "gatsby";
import * as React from "react";
import Page from "../components/page";

function IndexPage() {
  return (
    <Page pageTitle="AI Engineer & Full Stack Developer">
      <section>
        <h1>Hi, my name is Jet Kan</h1>
        <p>-Tag line here-</p>
      </section>
      <section>
        <p>
          I'm a NUS Computer Science undergraduate specializing in Artificial
          Intelligence. I love learning new things and sharing with people.
        </p>
      </section>
      <section>
        <h1>My Projects</h1>
        <ul>
          <li>
            <Link to="/artificial-intelligence">Artificial Intelligence</Link>
          </li>
          <li>
            <Link to="/software-engineering">Software Engineering</Link>
          </li>
        </ul>
      </section>
      <section>
        <h1>Get In Touch</h1>
        <p>
          I'm graduating by December 2021 and am actively looking for
          opportunities in the AI field. Feel free to say hi!
        </p>
        <a href="mailto: jetkan.yk@gmail.com">Say Hi</a>
      </section>
    </Page>
  );
}

export default IndexPage;
