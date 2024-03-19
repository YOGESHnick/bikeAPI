import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Snippet = ({ text }) => {
    const [clipboardState, setClipboardState] = useState(false);
    const handleCopy = () => {
        setClipboardState(true);
        setTimeout(() => {
          setClipboardState(false);
        }, 5000);
      };
  return (
    <div>
      <div className="copyToClip">
      <div className="copy-item">
        <CopyToClipboard className="copy" text={text} onCopy={handleCopy}>
          <div className="contain">
            {/* <p>
              localhost:8080/bikes?price=
              <p className="curly">{"{price}"}</p>&mileage=
              <p className="curly">{"{mileage}"}</p>&groundClearance=
              <p className="curly">{"{groundClearance}"}</p>&category=
              <p className="curly">{"{category}"}</p>
            </p> */}
            <p>{text}</p>
          </div>
        </CopyToClipboard>
        </div>
        </div>
    </div>
  );
}

export default Snippet;
