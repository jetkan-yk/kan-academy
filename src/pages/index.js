import { Link } from "gatsby";
import * as React from "react";
import Hero from "../components/home/hero";
import Layout from "../components/layout";

function IndexPage() {
  return (
    <Layout pageTitle="AI Engineer & Full Stack Developer">
      <Hero />
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
    </Layout>
  );
}

export default IndexPage;
