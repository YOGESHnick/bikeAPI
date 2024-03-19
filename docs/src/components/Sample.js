import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const Sample = () => {
  const data = `{
    "_id": "65aa1d7556989fe375ab1432",
    "name": "Continental GT 650",
    "company": "Royal Enfield",
    "startingPrice": 379559,
    "fuelType": "Petrol",
    "category": "Cafe Racer",
    "mileage": 27,
    "fuelCapacity": 12.5,
    "kerbWeight": 214,
    "groundClearance": 174,
    "seatHeight": 804,
    "cc": 648,
    "__v": 0,
    "brakes": "Dual Channel ABS",
    "imageURL": "https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/continental-gt/colours/studio-shots/new/mr-clean/side-view.png",
    "website": "https://www.royalenfield.com/in/en/home"
  }`;

  return (
    <div>
      <SyntaxHighlighter language="json" >
        {data}
      </SyntaxHighlighter>
    </div>
  );
};

export default Sample;
