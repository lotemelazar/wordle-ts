import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import { letterExists, letterIsCorrect } from '../Requests/server-req';

interface myLetter {
  rowNumber: number;
  letterPos: number;
}

const Letter: React.FC<myLetter> = ({ rowNumber, letterPos }) => {
  const { board, currAttempt, correctWordInd, setGreenLetters, setYellowLetters, setGreyLetters } = useContext(AppContext);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isExists, setIsExists] = useState(false);
  const letter: string = board[rowNumber][letterPos].toLowerCase();

  if (letter !== '' && correctWordInd !== '') {
    console.log(correctWordInd);
    letterIsCorrect(correctWordInd, String(letterPos), letter).then((ans) => {
      if (ans === true) {
        setIsCorrect(true);
      }
    });
    letterExists(correctWordInd, letter).then((res) => {
      if (res === true && !isCorrect) {
        setIsExists(true);
      }
    });
  }
  let letterState = '';
  if (currAttempt.rowNum > rowNumber) {
    letterState = isCorrect ? 'correct' : isExists ? 'exists' : 'error';
    console.log(letter, letterState, letterPos);
  }
  useEffect(() => {
    if (isCorrect) {
      setGreenLetters((prev: any) => [...prev, letter]);
    } else if (isExists) {
      setYellowLetters((prev: any) => [...prev, letter]);
    } else if (!isExists && !isCorrect) {
      setGreyLetters((prev: any) => [...prev, letter]);
    }
  }, [currAttempt.rowNum]);

  return (
    <div className="letter" id={letterState}>
      {letter.toUpperCase()}
    </div>
  );
};
export default Letter;
