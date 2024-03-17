import React, { useState } from "react";
import CopyToClipboard from "../components/copyToClip";

const Documentation = () => {
  return (
    <div className="docs">
      <CopyToClipboard text="try this" />
    </div>
  );
};

export default Documentation;
