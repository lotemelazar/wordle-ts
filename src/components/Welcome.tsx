import React from 'react';
import { generateWordSet, checkGuess, getCorrectWord } from '../Requests/server-req';

function Welcome(props: any): JSX.Element {
  const handleStartBtn = () => {
    // const ind = String(Math.floor(Math.random() * 66));
    generateWordSet().then((word) => {
      props.setCorrectWord(word);
    });
    props.setPage('game');
    props.setCorrectWordInd('5');
  };
  // const cw = getCorrectWord(ind);
  return (
    <>
      <div className="welcome">
        <h1>Welcome User!</h1>
        <button
          className="btn"
          onClick={
            handleStartBtn
            // props.setPage('game');
            // props.setCorrectWordInd(ind);
            // props.setCorrectWord(cw);
          }
        >
          Start!
        </button>
      </div>
    </>
  );
}

export default Welcome;
