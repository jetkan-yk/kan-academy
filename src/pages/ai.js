import * as React from "react";
import Page from "../components/page";

function AIPage() {
  return (
    <Page pageTitle="Artificial Intelligence">
      <section>
        <h1>Want to play a game?</h1>
        <p>Pick a game below and challenge my AI!</p>
      </section>
      <section>
        <ul>
          <li>Tic Tac Toe</li>
          <li>Game of Nim</li>
        </ul>
      </section>
    </Page>
  );
}

export default AIPage;
