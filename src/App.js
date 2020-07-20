import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { placeholder, markdown } from "./markdown";

import "./styles.css";

export default function App() {
  const text = markdown;

  const [output, updateOutput] = useState(text);

  const handleChange = event => {
    updateOutput(event.target.value);
  };

  return (
    <div className="App">
      <div id="pageContainer">
        <textarea
          id="editor"
          placeholder={text}
          value={output}
          onChange={handleChange}
        />
        <div id="preview">
          <ReactMarkdown source={output} />
        </div>
      </div>
    </div>
  );
}
