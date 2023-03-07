import React, { useContext, useEffect } from 'react';
import { string } from 'yargs';
import { AppContext } from '../App';
import { generateWordSet, checkGuess, letterExists, letterIsCorrect } from '../Requests/server-req';

interface myLetter {
  rowNumber: number;
  letterPos: number;
}

const Letter: React.FC<myLetter> = ({ rowNumber, letterPos }) => {
  const { board, currAttempt, correctWordInd, correctWord, setGreenLetters, setYellowLetters, setGreyLetters } = useContext(AppContext);
  const letter: string = board[rowNumber][letterPos].toLowerCase();
  let isCorrect = letter === correctWord[letterPos];
  let isExists = !isCorrect && letter !== '' && correctWord.includes(letter);
  let letterState = '';
  if (currAttempt.rowNum > rowNumber) {
    letterState = isCorrect ? 'correct' : isExists ? 'exists' : 'error';
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

//////////////////////////////////////////////////////////////////////////////////

// import React, { useContext, useEffect } from 'react';
// import { string } from 'yargs';
// import { AppContext } from '../App';
// import { generateWordSet, checkGuess, letterExists, letterIsCorrect } from '../Requests/server-req';

// interface myLetter {
//   rowNumber: number;
//   letterPos: number;
// }

// const Letter: React.FC<myLetter> = ({ rowNumber, letterPos }) => {
//   const { board, currAttempt, correctWordInd, correctWord, setGreenLetters, setYellowLetters, setGreyLetters } = useContext(AppContext);
//   const letter: string = board[rowNumber][letterPos].toLowerCase();
//   let isCorrect = false;
//   let isExists = false;
//   letterIsCorrect(correctWordInd, String(letterPos), letter).then((ans) => {
//     if (ans === true) {
//       isCorrect = true;
//     }
//   });

//   letterExists(correctWordInd, letter).then((ans) => {
//     if (ans === true) {
//       isExists = true;
//     }
//   });

//   //  letter === correctWord[letterPos];
//   isExists = !isCorrect && letter !== '' && isExists;
//   const ind = rowNumber * 2 + letterPos;
//   let letterState = '';
//   if (currAttempt.rowNum > rowNumber) {
//     letterState = isCorrect ? 'correct' : isExists ? 'exists' : 'error';
//   }
//   useEffect(() => {
//     if (isCorrect) {
//       setGreenLetters((prev: any) => [...prev, letter]);
//     } else if (isExists) {
//       setYellowLetters((prev: any) => [...prev, letter]);
//     } else if (!isExists && !isCorrect) {
//       setGreyLetters((prev: any) => [...prev, letter]);
//     }
//   }, [currAttempt.rowNum]);

//   return (
//     <div className="letter" tabIndex={ind} id={letterState}>
//       {letter.toUpperCase()}
//     </div>
//   );
// };
// export default Letter;
