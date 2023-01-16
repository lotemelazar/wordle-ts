// import React from "react";

import React, { useContext, useRef } from "react";

import { AppContext } from "../App";

interface myLetter {
  rowNumber: number;
  letterPos: number;
}

const Letter: React.FC<myLetter> = ({ rowNumber, letterPos }) => {
  const { board, focusOn, currAttempt, correctWord } = useContext(AppContext);
  const letter = board[rowNumber][letterPos];
  const correct = correctWord[letterPos] === letter;
  const exists = !correct && letter != "" && correctWord.includes(letter);

  let letterState = "";
  if (currAttempt.rowNum > rowNumber) {
    letterState = correct ? "correct" : exists ? "exists" : "error";
  }
  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};
export default Letter;
