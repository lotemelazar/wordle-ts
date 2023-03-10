import React, { useState } from 'react';
import Login from './Login';
import Info from './Info';

type Props = {
  handleFormLoginOpen: (value: boolean) => void;
};

function Header(props: Props): JSX.Element {
  const { handleFormLoginOpen } = props;
  const [showHelpModal, setShowHelpModal] = useState<boolean>(false);
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false);
  const [login, setLogin] = useState<boolean>(false);
  const [username, setUsername] = useState('');
  const [formLoginOpen, setFormLoginOpen] = useState<boolean>(false);

  const onSubmit = (username: string) => {
    setUsername(username);
    setLogin(true);
    setShowLoginModal(false);
    setFormLoginOpen(false);
    handleFormLoginOpen(false);
    localStorage.setItem('username', username);
  };

  const handleLogout = () => {
    setLogin(false);
    setUsername('');
    localStorage.removeItem('username');
  };
  const handleLogin = () => {
    setShowLoginModal(true);
    setFormLoginOpen(true);
    handleFormLoginOpen(true);
  };
  return (
    <>
      <header>
        {!login ? (
          <button onClick={handleLogin} className="login-logout">
            login
          </button>
        ) : (
          <button onClick={handleLogout} className="login-logout">
            logout
          </button>
        )}

        <Login onClose={onSubmit} showLoginModal={showLoginModal}></Login>
        {login ? <p className="w-user">Welcome, {username}</p> : <p className="w-user">Welcome, guest</p>}

        <h1 id="h1">Wordle</h1>
        <span className="info" onClick={() => setShowHelpModal(true)}>
          ⓘ
        </span>
        <Info onClose={() => setShowHelpModal(false)} showHelpModal={showHelpModal}></Info>
      </header>
    </>
  );
}
export default Header;
