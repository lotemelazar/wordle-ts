import React from "react";

// interface page {
//   setPage: ()=> {};
// }

function Welcome(props: any): JSX.Element {
  return (
    <div className="welcome">
      <h1>Welcome User!</h1>
      <button
        className="btn"
        onClick={() => {
          props.setPage("game");
        }}
      >
        Start!
      </button>
    </div>
  );
}

export default Welcome;
