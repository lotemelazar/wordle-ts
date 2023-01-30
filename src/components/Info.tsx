import React from 'react';

function Info(props: any): JSX.Element {
  if (!props.showHelpModal) {
    return <></>;
  }

  return (
    <>
      <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>How To Play</h2>
            <p>Guess the Wordle in 6 Guesses</p>
          </div>
          <div className="modal-body">
            <ul>
              <li>Each guess must be a valid 5-letter word</li>
              <br />
              <li>In each guess you can add or delete a letter, once you add the fifth letter, your guess will be submitted automatically.</li>
              <br />
              <li>The color of the tiles will change to show how close your guess was to the word.</li>
            </ul>
            <ul className="list-color-map">
              <li>
                <span className="modal-color green">Green</span> The letter is in the correct spot.
              </li>
              <br />
              <li>
                <span className="modal-color yellow">Yellow</span> The letter is in the word but in the wrong spot.
              </li>
              <br />
              <li>
                <span className="modal-color gray">Grey</span> The letter is not in the word.
              </li>
            </ul>
          </div>
          <div className="modal-footer">
            <button className="close-help-btn" onClick={props.onClose}>
              close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Info;
