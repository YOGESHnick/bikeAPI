import React, { useState } from "react";
import CopyToClipboard from "../components/copyToClip";
import Sample from "../components/Sample";

const Documentation = () => {
  return (
    <div className="docs">
      <CopyToClipboard text="localhost:8080/bikes?price={price}&mileage={mileage}&groundClearance={groundClearance}&category={category}" />
      
      <Sample />
    </div>
  );
};

export default Documentation;
