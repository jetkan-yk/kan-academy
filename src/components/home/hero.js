import { Link } from "gatsby";
import * as React from "react";

function Hero() {
  return (
    <section id="hero">
      <h1>Hi, my name is Jet Kan</h1>
      <h2>-Tag line here-</h2>
      <p>
        I'm a NUS Computer Science undergraduate specializing in Artificial
        Intelligence. I love learning new things and sharing with people.
      </p>
      <Link to="/about-me">About Me</Link>
    </section>
  );
}
export default Hero;
