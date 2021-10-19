import * as React from "react";
import Layout from "../components/layout";

function AboutMePage() {
  return (
    <Layout pageTitle="About Me">
      <section>
        <h1>Who am I</h1>
        <p>More stuff about me here.</p>
      </section>
      <section>
        <h1>My Resume</h1>
      </section>
    </Layout>
  );
}

export default AboutMePage;
