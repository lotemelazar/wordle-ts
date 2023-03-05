import React, { useContext, useEffect } from 'react';
import { AppContext } from '../App';

interface myLetter {
  rowNumber: number;
  letterPos: number;
}

const Letter: React.FC<myLetter> = ({ rowNumber, letterPos }) => {
  const { board, currAttempt, correctWord, setGreenLetters, setYellowLetters, setGreyLetters } = useContext(AppContext);
  const letter = board[rowNumber][letterPos].toLowerCase();
  const correct = correctWord[letterPos] === letter;
  const ind = rowNumber * 2 + letterPos;
  const exists = !correct && letter !== '' && correctWord.includes(letter);
  let letterState = '';
  if (currAttempt.rowNum > rowNumber) {
    letterState = correct ? 'correct' : exists ? 'exists' : 'error';
  }
  useEffect(() => {
    if (correct) {
      setGreenLetters((prev: any) => [...prev, letter]);
    } else if (exists) {
      setYellowLetters((prev: any) => [...prev, letter]);
    } else if (!correctWord.includes(letter)) {
      setGreyLetters((prev: any) => [...prev, letter]);
    }
  }, [currAttempt.rowNum]);

  return (
    <div className="letter" tabIndex={ind} id={letterState}>
      {letter.toUpperCase()}
    </div>
  );
};
export default Letter;
