import * as React from "react";
import Footer from "./layout/footer";
import Header from "./layout/header";

function Layout({ pageTitle, children }) {
  return (
    <div id="root">
      <title>Jet Kan | {pageTitle}</title>
      <Header />
      <hr />
      <main>{children}</main>
      <hr />
      <Footer />
    </div>
  );
}

export default Layout;
