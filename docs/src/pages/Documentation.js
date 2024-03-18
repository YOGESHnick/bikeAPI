import React, { useState } from "react";
import CopyToClipboard from "../components/copyToClip";

const Documentation = () => {
  return (
    <div className="docs">
      <CopyToClipboard text="localhost:8080/bikes?price={price}&mileage={mileage}&groundClearance={groundClearance}&category={category}" />
    </div>
  );
};

export default Documentation;
