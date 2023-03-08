import React from 'react';
import Letter from './Letter';

function Board(): JSX.Element {
  return (
    <div className="board">
      <div className="row">
        <Letter rowNumber={0} letterPos={0}></Letter>
        <Letter rowNumber={0} letterPos={1}></Letter>
        <Letter rowNumber={0} letterPos={2}></Letter>
        <Letter rowNumber={0} letterPos={3}></Letter>
        <Letter rowNumber={0} letterPos={4}></Letter>
      </div>

      <div className="row">
        <Letter rowNumber={1} letterPos={0}></Letter>
        <Letter rowNumber={1} letterPos={1}></Letter>
        <Letter rowNumber={1} letterPos={2}></Letter>
        <Letter rowNumber={1} letterPos={3}></Letter>
        <Letter rowNumber={1} letterPos={4}></Letter>
      </div>

      <div className="row">
        <Letter rowNumber={2} letterPos={0}></Letter>
        <Letter rowNumber={2} letterPos={1}></Letter>
        <Letter rowNumber={2} letterPos={2}></Letter>
        <Letter rowNumber={2} letterPos={3}></Letter>
        <Letter rowNumber={2} letterPos={4}></Letter>
      </div>

      <div className="row">
        <Letter rowNumber={3} letterPos={0}></Letter>
        <Letter rowNumber={3} letterPos={1}></Letter>
        <Letter rowNumber={3} letterPos={2}></Letter>
        <Letter rowNumber={3} letterPos={3}></Letter>
        <Letter rowNumber={3} letterPos={4}></Letter>
      </div>

      <div className="row">
        <Letter rowNumber={4} letterPos={0}></Letter>
        <Letter rowNumber={4} letterPos={1}></Letter>
        <Letter rowNumber={4} letterPos={2}></Letter>
        <Letter rowNumber={4} letterPos={3}></Letter>
        <Letter rowNumber={4} letterPos={4}></Letter>
      </div>

      <div className="row">
        <Letter rowNumber={5} letterPos={0}></Letter>
        <Letter rowNumber={5} letterPos={1}></Letter>
        <Letter rowNumber={5} letterPos={2}></Letter>
        <Letter rowNumber={5} letterPos={3}></Letter>
        <Letter rowNumber={5} letterPos={4}></Letter>
      </div>
    </div>
  );
}
export default Board;
