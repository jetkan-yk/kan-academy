import * as React from "react";
import Contact from "../components/home/contact";
import Hero from "../components/home/hero";
import Path from "../components/home/path";
import Layout from "../components/layout";

function IndexPage() {
  return (
    <Layout pageTitle="AI Engineer & Full Stack Developer">
      <Hero />
      <Path />
      <Contact />
    </Layout>
  );
}

export default IndexPage;
