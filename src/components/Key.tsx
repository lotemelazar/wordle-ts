import React, { useContext } from 'react';
import { AppContext } from '../App';

function Key({ keyVal }: any) {
  const { onSelectLetter, onDelete } = useContext(AppContext);

  const selectLetter = () => {
    if (keyVal === 'DELETE') {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

  return (
    <div className="key" id={keyVal} onClick={selectLetter}>
      {keyVal}
    </div>
  );
}

export default Key;
