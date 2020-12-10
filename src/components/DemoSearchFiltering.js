import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState(["bbb", "abb", "aab", "aaa"]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    setFiltered(data.filter((item) => item.slice(0, input.length) === input));
  }, [input, data]);

  return (
    <div className="App">
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <div>
        {input
          ? filtered.map((item, index) => <div key={index}>{item}</div>)
          : null}
      </div>
    </div>
  );
}
