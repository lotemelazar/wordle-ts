import logo from "./logo.svg";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import React, { useState, createContext, useEffect } from "react";

import "./App.css";

export const AppContext = createContext("");

function App() {
  const [page, setPage] = useState("welcome");

  const onSelectLetter = () => {};

  return (
    <div className="App">
      {page == "welcome" && (
        <>
          <Welcome setPage={setPage} />
        </>
      )}

      {page == "game" && (
        <>
          <div className="container">
            <Header></Header>
            <Board></Board>
            <Keyboard></Keyboard>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
