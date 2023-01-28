import Header from './components/Header';
import Welcome from './components/Welcome';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import React, { useState, createContext } from 'react';
import { boardDefault } from './Words';
import './App.css';

export const AppContext = createContext<any | null>(null);

export interface position {
  rowNumber: number;
  letterPos: number;
}

function App() {
  const correctWord = 'RIGHT';

  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({
    rowNum: 0,
    letterPos: 0,
  });

  const [page, setPage] = useState('welcome');

  const onSelectLetter = (keyVal: any) => {
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
              }}
            >
              <Header></Header>
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
