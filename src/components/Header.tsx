import React from "react";
import Info from "./Info";

function Header(): JSX.Element {
  return (
    <header>
      <span>=</span>
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
