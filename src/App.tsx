import Header from './components/Header';
import Welcome from './components/Welcome';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import React, { useState, createContext, useEffect } from 'react';
import { boardDefault, generateWordSet } from './Words';

import './App.css';

export const AppContext = createContext<any | null>(null);

export interface position {
  rowNumber: number;
  letterPos: number;
}

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({
    rowNum: 0,
    letterPos: 0,
  });
  const [page, setPage] = useState('welcome');
  const [formLoginOpen, setFormLoginOpen] = useState<boolean>(false);
  const [correctWord, setCorrectWord] = useState('');
  const [greenLetters, setGreenLetters] = useState([]);
  const [yellowLetters, setYellowLetters] = useState([]);
  const [greyLetters, setGreyLetters] = useState([]);

  useEffect(() => {
    setCorrectWord(generateWordSet().wordToGuess);
  }, []);

  const handleFormLoginOpen = (value: boolean) => {
    setFormLoginOpen(value);
  };

  const onSelectLetter = (keyVal: any) => {
    if (formLoginOpen) {
      return;
    }

    const newBoard = [...board];
    if (currAttempt.rowNum > 5) {
      alert('done');
      return;
    }
    if (currAttempt.letterPos === 4) {
      newBoard[currAttempt.rowNum][currAttempt.letterPos] = keyVal;
      setBoard(newBoard);

      setCurrAttempt({ rowNum: currAttempt.rowNum + 1, letterPos: 0 });
    } else {
      newBoard[currAttempt.rowNum][currAttempt.letterPos] = keyVal;
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
    }
  };

  const onDelete = () => {
    if (currAttempt.letterPos === 0) return;
    const newBoard = [...board];
    newBoard[currAttempt.rowNum][currAttempt.letterPos - 1] = '';
    setBoard(newBoard);
    setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos - 1 });
  };

  return (
    <div className="App">
      {page === 'welcome' && (
        <>
          <Header handleFormLoginOpen={handleFormLoginOpen}></Header>
          <Welcome setPage={setPage} />
        </>
      )}

      {page === 'game' && (
        <>
          <div className="container">
            <AppContext.Provider
              value={{
                board,
                setBoard,
                currAttempt,
                setCurrAttempt,
                onSelectLetter,
                onDelete,
                correctWord,
                greenLetters,
                setGreenLetters,
                yellowLetters,
                setYellowLetters,
                greyLetters,
                setGreyLetters,
              }}
            >
              <Header handleFormLoginOpen={handleFormLoginOpen}></Header>
              <Board></Board>
              <Keyboard></Keyboard>
            </AppContext.Provider>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
