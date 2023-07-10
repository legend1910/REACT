import { useState } from "react";
import "./styles.css";
import React from "react";
const content = [
  ["London is the capital city of England"],
  ["Paris is the capital of France"],
  ["Tokyo is the capital of Japan"]
];
export default function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div id="tabs">
      <menu>
        <button
          className={activeIndex == 0 ? "active" : ""}
          onClick={() => setActiveIndex(0)}
        >
          London
        </button>
        <button
          className={activeIndex == 1 ? "active" : ""}
          onClick={() => setActiveIndex(1)}
        >
          Paris
        </button>
        <button
          className={activeIndex == 2 ? "active" : ""}
          onClick={() => setActiveIndex(2)}
        >
          Tokyo
        </button>
      </menu>
      <div id="tab-content">
        <ul>
          {content[activeIndex].map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
