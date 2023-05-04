//WOLF-APP
/*
import ListGroup from "./components/ListGroup";
import { ButtonHTMLAttributes } from "react";

function App() {
  const items = ["New York", "San Francisco", "Paris", "Tokyo"];

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button type="button" className="btn btn-primary btn-lg">
        Large button
      </button>
      <button type="button" className="btn btn-secondary btn-lg">
        Large button
      </button>
    </>
  );
}

export default App;
*/

//octocat check: 4

//turned ts into js 
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "San Francisco", "Paris", "Tokyo"];

  return (
    React.createElement("div", null,
      React.createElement("h1", null, "List"),
      React.createElement("ul", { className: "list-group" },
        items.map((item) => (
          React.createElement("li", { key: item }, item)
        ))
      ),
      React.createElement("button", { type: "button", className: "btn btn-primary btn-lg" }, "Large button"),
      React.createElement("button", { type: "button", className: "btn btn-secondary btn-lg" }, "Large button")
    )
  );
}

export default App;
