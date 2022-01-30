// Root React app

import React from "react";

import Test from "./content/test.mdx";

import styles from "./styles/app.module.css";

function App() {
  return (
    <main className={styles.container}>
      <h1>Welcome to a React Template App</h1>
      <h2>(bundling courtesy of Webpack)</h2>
      <h3>Date: {new Date().toDateString()}</h3>
      <Test />
    </main>
  );
}

export default App;
