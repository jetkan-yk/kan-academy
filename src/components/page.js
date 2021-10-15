import * as React from "react";
import NavBar from "./navbar";

function Page({ pageTitle, children }) {
  return (
    <>
      <NavBar />
      <main>
        <title>Jet Kan | {pageTitle}</title>
        {children}
      </main>
    </>
  );
}

export default Page;
