import React from "react";

interface myLetter {
  rowNumber: number;
  letterPos: number;
}

const Letter: React.FC<myLetter> = ({ rowNumber, letterPos }) => {
  const letter = "";
  return <div className="letter"></div>;
};
export default Letter;
