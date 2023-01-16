import React from "react";
import Info from "./Info";

function Header(): JSX.Element {
  return (
    <header>
      <button id="login">log in</button>
      <h1>Wordle</h1>
      <span
        onClick={() => {
          <Info></Info>;
        }}
      >
        ⓘ
      </span>
    </header>
  );
}
export default Header;
