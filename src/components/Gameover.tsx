import React, { useContext } from 'react';
import { AppContext } from '../App';

function GameOver(): JSX.Element {
  const { gameOver, currAttempt, correctWord } = useContext(AppContext);
  return (
    <div className="gameOver">
      <h3>{gameOver.guessed ? 'You Correctly Guessed The Wordle' : 'You Failed To Guess The Word'}</h3>
      <h1>Correct Word: {correctWord.toUpperCase()}</h1>
      {gameOver.guessed && <h3>You guessed in {currAttempt.rowNum} attempts</h3>}
    </div>
  );
}

export default GameOver;
