import * as React from "react";
import Hero from "../components/home/hero";
import Projects from "../components/home/projects";
import Layout from "../components/layout";

function IndexPage() {
  return (
    <Layout pageTitle="AI Engineer & Full Stack Developer">
      <Hero />
      <Projects />
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
