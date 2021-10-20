import * as React from "react";
import Contact from "../components/home/contact";
import Hero from "../components/home/hero";
import Projects from "../components/home/projects";
import Layout from "../components/layout";

function IndexPage() {
  return (
    <Layout pageTitle="AI Engineer & Full Stack Developer">
      <Hero />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default IndexPage;
