import React, { useState } from "react";
import CopyToClipboard from "../components/copyToClip";
import Snippet from "../components/Snippet";
import Sample from "../components/Sample";

const Documentation = () => {
  return (
    <div className="docs">
      <CopyToClipboard text="localhost:8080/bikes?price={price}&mileage={mileage}&groundClearance={groundClearance}&category={category}" />
      <h2>Example usage</h2>
      <br />
      <Snippet text="https://bikeapi-1.onrender.com/bikes?price=120000&mileage=20&groundClearance=170&category=Cafe Racer" />
      <Sample />
      {/* <Snippet text="https://bikeapi-1.onrender.com/bikes?price=120000&mileage=20&groundClearance=170&category=Cafe Racer" /> */}
    </div>
  );
};

export default Documentation;
