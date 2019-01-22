import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

// Create Button
// Import Button

function App() {
  return (
    <Fragment>
      <h1>Hello1</h1>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </Fragment>
  );
}

const rootElement = document.getElementById("root");

// ReactDOM.render( JSX expression, DOM element )
// 1st argument appended to 2nd argument
ReactDOM.render(<App />, rootElement);
