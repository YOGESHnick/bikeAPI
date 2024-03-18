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
    <div className="copyToClip">
      <div className="copy-item">
        <CopyToClipboard
          className="copy"
          text={text}
          onCopy={handleCopy}
        >
          <div className="contain">
          <p>localhost:8080/bikes?price=<span className="curly">{'{price}'}</span>&mileage=<span className="curly">{'{mileage}'}</span>&groundClearance=<span className="curly">{'{groundClearance}'}</span>&category=<span className="curly">{'{category}'}</span></p>

          </div>
        </CopyToClipboard>
        <p className="leftLaOruAdi">{clipboardState && "Copied to clipboard!"}</p>
      </div>
      <br />
      <div className="desc">
          <div className="leftOram"></div>
          This endpoint will provide all bikes available as response
      </div>
      <br />
      <h4>Parameter</h4>
      <hr />
      <div className="params"></div>
    </div>
  );
};

export default CopyToClip;
