import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const CopyToClip = ({ text }) => {
  const [clipboardState, setClipboardState] = useState(false);

  const handleCopy = () => {
    setClipboardState(true);
    setTimeout(() => {
      setClipboardState(false);
    }, 5000);
  };

  return (
    <div>
      <div className="copy-item">
        <CopyToClipboard
          className="copy"
          text={text}
          onCopy={handleCopy}
        >
          <div className="contain">
            <p>{text}</p>
          </div>
        </CopyToClipboard>
        <p className="leftLaOruAdi">{clipboardState && "Copied to clipboard!"}</p>
      </div>
      <br />
      <div className="desc">
          <div className="leftOram"></div>
          This endpoint will provide all bikes available as response
        </div>
    </div>
  );
};

export default CopyToClip;
