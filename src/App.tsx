import Header from './components/Header';
import Welcome from './components/Welcome';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import React, { useState, createContext, useEffect } from 'react';
import { boardDefault } from './Words';
import { checkGuess } from './Requests/server-req';
import './App.css';
import GameOver from './components/Gameover';

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
  const [correctWordInd, setCorrectWordInd] = useState('');
  const [greenLetters, setGreenLetters] = useState([]);
  const [yellowLetters, setYellowLetters] = useState([]);
  const [greyLetters, setGreyLetters] = useState([]);
  const [gameOver, setGameOver] = useState({ gameOver: false, guessed: false });
  useEffect(() => {}, [page]);

  const handleFormLoginOpen = (value: boolean) => {
    setFormLoginOpen(value);
  };

  const onSelectLetter = (keyVal: any) => {
    if (formLoginOpen) {
      return;
    }
    const newBoard = [...board];

    if (currAttempt.letterPos === 4) {
      newBoard[currAttempt.rowNum][currAttempt.letterPos] = keyVal;
      setBoard(newBoard);
      let currWord = '';
      for (let i = 0; i < 5; i++) {
        currWord += board[currAttempt.rowNum][i];
      }

      checkGuess(correctWordInd, currWord.toLowerCase()).then((ans) => {
        if (ans === true) {
          setGameOver({ gameOver: true, guessed: true });
        } else if (currAttempt.rowNum === 5) {
          setGameOver({ gameOver: true, guessed: false });
        }
      });

      setCurrAttempt({ rowNum: currAttempt.rowNum + 1, letterPos: 0 });
    } else {
      newBoard[currAttempt.rowNum][currAttempt.letterPos] = keyVal;
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, letterPos: currAttempt.letterPos + 1 });
    }
  };

  const onDelete = () => {
    return;
  };

  return (
    <div className="App">
      {page === 'welcome' && (
        <>
          <Header handleFormLoginOpen={handleFormLoginOpen}></Header>
          <Welcome setPage={setPage} setCorrectWordInd={setCorrectWordInd} />
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
                correctWordInd,
                greenLetters,
                setGreenLetters,
                yellowLetters,
                setYellowLetters,
                greyLetters,
                setGreyLetters,
                gameOver,
                setGameOver,
              }}
            >
              <Header handleFormLoginOpen={handleFormLoginOpen}></Header>
              <Board></Board>
              {gameOver.gameOver ? <GameOver></GameOver> : <Keyboard></Keyboard>}
            </AppContext.Provider>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
