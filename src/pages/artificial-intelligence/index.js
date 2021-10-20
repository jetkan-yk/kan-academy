import * as React from "react";
import Layout from "../../components/layout";

function AIPage() {
  return (
    <Layout pageTitle="Artificial Intelligence">
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
    </Layout>
  );
}

export default AIPage;
