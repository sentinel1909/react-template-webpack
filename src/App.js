// Root React app

import React from "react";

import Test from "./content/test.mdx";

function App() {
  return (
    <main>
      <h1>Welcome to a React Template App</h1>
      <h2>(bundling courtesy of Webpack)</h2>
      <h3>Date: {new Date().toDateString()}</h3>
      <Test />
    </main>
  );
}

export default App;
