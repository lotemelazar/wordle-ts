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
            <label htmlFor="nameInput">password</label>
            <input type="password" />
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

/////////////////////////////////////////////////////////////////////

// import React, { useState } from 'react';

// function Login(props: any): JSX.Element {
//   const [username, setUsername] = useState('');

//   const [value, setValue] = useState('');

//   //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//   //     setValue(event.target.value);
//   //   };

//   const handleUsernameChange = (event: any) => {
//     setUsername(event.target.value);
//     setValue(event.target.value);
//   };

//   if (!props.showLoginModal) {
//     return <></>;
//   }

//   return (
//     <>
//       <form>
//         <div className="login-modal">
//           <div className="login-Form">
//             <label htmlFor="nameInput">username</label>
//             <input type="text" value={value} onChange={handleUsernameChange} /> <br />
//             <label htmlFor="nameInput">password</label>
//             <input type="password" />
//             <button className="sum-btn" onClick={() => props.onClose(username)}>
//               submit
//             </button>
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }
// export default Login;
