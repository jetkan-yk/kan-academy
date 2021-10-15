import * as React from "react";
import Footer from "./footer";
import NavBar from "./navbar";

function Page({ pageTitle, children }) {
  return (
    <>
      <NavBar />
      <main>
        <title>Jet Kan | {pageTitle}</title>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Page;
