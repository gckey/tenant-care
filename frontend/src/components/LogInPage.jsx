
/**
 * 
 * @param {login} props 
 * @returns 
 */

import { useState } from "react";
import { useNavigate } from "react-router";


const LogInPage = (props) => {
  const navigate = useNavigate();
  const [emailVal, setEmailVal] = useState("");
  const [passwordVal, setPasswordVal] = useState("");

// const onSubmit = function(event) {
//   event.preventDefault();
//   emailVal && props.onLogInClicked(emailVal, passwordVal);//calls login func
// };
const handleLogin = async (event) => {
  event.preventDefault();
  const URL = "http://localhost:8080/api/login/";
  const settings = {
      method: "POST",
      body: JSON.stringify({
          email: emailVal,
          password: passwordVal
      }),
      headers: {
          "Content-type": "application/json"
      }
  }

  const response = await fetch(URL, settings);
  // console.log(response);
  const data = await response.json();
  // console.log(data);
  props.setUserInfo(data);
  navigate("/maintenance-request");

  if (data.success) {
      console.log('Login successful:', data.user);
      // Further actions on successful login (e.g., redirect, store user data)
  } else {
      console.log('Login failed:', data.message);
      // Handle login failure (e.g., show error message)
  }
}
  return (
    <div className="login-wrapper">
      <h2>Please Log In</h2>
      <form onSubmit={handleLogin}>
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