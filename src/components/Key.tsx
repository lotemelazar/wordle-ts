import React, { useContext } from 'react';
import { AppContext } from '../App';

function Key({ keyVal, state }: any) {
  const { onSelectLetter, onDelete } = useContext(AppContext);
  const selectLetter = () => {
    if (keyVal === 'DELETE') {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div className="key" id={state} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
