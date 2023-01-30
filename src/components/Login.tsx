import React, { useState } from 'react';

function Login(props: any): JSX.Element {
  const [username, setUsername] = useState('');

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  if (!props.showLoginModal) {
    return <></>;
  }

  return (
    <>
      <form>
        <div className="login-modal">
          <div className="login-Form">
            <label htmlFor="nameInput">username</label>
            <input type="text" onChange={handleUsernameChange} /> <br />
            <button className="sum-btn" onClick={() => props.onClose(username)}>
              submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default Login;
