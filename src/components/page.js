import * as React from "react";

function Page({ pageTitle, children }) {
  return (
    <main>
      <title>Jet Kan | {pageTitle}</title>
      {children}
    </main>
  );
}

export default Page;
