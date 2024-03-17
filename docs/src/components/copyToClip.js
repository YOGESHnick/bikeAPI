import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyToClip = ({ text }) => {
  const [clipboardState, setClipboardState] = useState(false);
  return (
    <div>
      <div className="copy-item">
        <CopyToClipboard
          className="copy"
          text={text}
          onCopy={() => setClipboardState(true)}
        >
          <div className="contain">
            <p>{text}</p>
            <p>{clipboardState && "copied"}</p>
          </div>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default CopyToClip;
