// Root React app

import React from "react";

import Test from "./content/test.mdx";

function App() {
  return (
    <div>
      <h2>Welcome to React App</h2>
      <h3>Date: {new Date().toDateString()}</h3>
      <Test />
    </div>
  );
}

export default App;
