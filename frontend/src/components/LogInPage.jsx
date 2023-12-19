
/**
 * 
 * @param {login} props 
 * @returns 
 */

import { useState } from "react";
// import { Link } from "react-router";
// import { useHistory } from "react-router-dom";

const LogInPage = (props) => {
  const [emailVal, setEmailVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");

const onSubmit = function(event) {
  event.preventDefault();
  emailVal && props.onLogInClicked(emailVal, passwordVal);//calls login func
};

  return (
    <div className="login-wrapper">
      <h2>Please Log In</h2>
      <form onSubmit={onSubmit}>
      <label>
          <p>Enter email or username</p>
          <input
            type="text"
            name="username"
            value={emailVal}
            onChange={e => setEmailVal(e.target.value)}             
            placeholder="alice@example.com"
          />
        </label>
        
        <label>
          <p>Enter password</p>
          <input
            type="password"
            name="password"
            value={passwordVal}
            onChange={e => setPasswordVal(e.target.value)}
            placeholder="Password"
          />
        </label>
        <br />
        <p className="submit">
          <button
            disabled={!emailVal || !passwordVal }//btn enabled whn both email & password has a value 
            type="submit"
            name="button">Log In
          </button>
        </p>
        <button>Forgot password?</button>
        <p className="submit">
          <button 
            type="submit"
            name="button">Don't have an account? Sign Up
          </button>
        </p>
      </form>
    </div>
  );
};

export default LogInPage;