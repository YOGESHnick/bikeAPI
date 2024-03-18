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
        <p className="leftLaOruAdi">
          {clipboardState && "Copied to clipboard!"}
        </p>
      </div>
      <br />
      <div className="desc">
        <div className="leftOram"></div>
        This endpoint will provide all bikes available as response
      </div>
      <br />
      <br />
      <h4>Parameters</h4>
      <hr />
      <div className="params">
        <table>
          <thead>
            <tr>
              <th>Parameter</th>
              {/* <th>Required</th> */}
              {/* <th>Description</th> */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="param" >price</td>
              <td className="necessity" >optional</td>
              <td>
                filters bikes based on price
              </td>
            </tr>
            <tr>
              <td className="param">mileage</td>
              <td className="necessity">optional</td>
              <td>
                filters bikes based on mileage
              </td>
            </tr>
            <tr>
              <td className="param">groundClearance</td>
              <td className="necessity">optional</td>
              <td>
                filters bikes based on ground-Clearance
              </td>
            </tr>
            <tr>
              <td className="param">category</td>
              <td className="necessity">optional</td>
              <td>
                filters bikes based on category
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CopyToClip;
