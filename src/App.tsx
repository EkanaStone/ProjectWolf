import ListGroup from "./components/ListGroup";
import { ButtonHTMLAttributes } from "react";

function App() {
  const items = ["New Yor", "San Francisco", "Paris", "Tokyo"];

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
