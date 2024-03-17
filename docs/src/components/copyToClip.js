import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyToClip = ({text}) => {
    const [clipboardState, setClipboardState] = useState(false);
  return (
    <div>
      <div className="copy-item">
        <CopyToClipboard
        className="copy"
          text={text}
          onCopy={() => setClipboardState(true)}
        >
          <p>
            Click to copy
            {clipboardState && (
              <span style={{ color: "black" }}>
                <br></br>copied
              </span>
            )}{" "}
          </p>
        </CopyToClipboard>

        <h2>Paste it here</h2>
        <textarea></textarea>
      </div>
    </div>
  );
};

export default CopyToClip;
