import React from 'react';
import { generateWordSet } from '../Requests/server-req';

function Welcome(props: any): JSX.Element {
  const handleStartBtn = () => {
    props.setPage('game');
    generateWordSet().then((word) => {
      props.setCorrectWord(word);
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
