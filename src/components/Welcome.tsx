import React from 'react';
import { generateWordInd } from '../Requests/server-req';

function Welcome(props: any): JSX.Element {
  const handleStartBtn = () => {
    props.setPage('game');
    generateWordInd().then((wordInd) => {
      if (wordInd !== '') {
        props.setCorrectWordInd(wordInd);
      }
    });
  };

  return (
    <>
      <div className="welcome">
        <h1>Welcome User!</h1>
        <button className="btn" onClick={handleStartBtn}>
          Start!
        </button>
      </div>
    </>
  );
}

export default Welcome;
