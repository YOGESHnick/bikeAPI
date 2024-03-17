import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./App.css";

function App() {
  const [clipboardState, setClipboardState] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <CopyToClipboard
          text="adangommala"
          onCopy={() => setClipboardState(true)}
        >
          <button>
          Click to copy
            {clipboardState && (
              <span style={{ color: "yellow" }}>
                <br></br>copied
              </span>
            )}{" "}
          </button>
        </CopyToClipboard>

        <h2>Paste it here</h2>
        <textarea></textarea>
      </div>
    </div>
  );
}

export default App;
