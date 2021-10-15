import * as React from "react";
import Footer from "./footer";
import NavBar from "./navbar";

function Page({ pageTitle, children }) {
  return (
    <>
      <NavBar />
      <hr />
      <main>
        <title>Jet Kan | {pageTitle}</title>
        {children}
      </main>
      <hr />
      <Footer />
    </>
  );
}

export default Page;
