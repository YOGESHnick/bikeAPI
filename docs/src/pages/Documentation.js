import React, { useState } from "react";
import CopyToClipboard from "../components/copyToClip";

const Documentation = () => {
  return (
    <div className="docs">
      <CopyToClipboard text="https://bikeapi-1.onrender.com/bikes" />
    </div>
  );
};

export default Documentation;
