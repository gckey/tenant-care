
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
  if (data && data.user && data.user.id) {
    localStorage.setItem("user_id", data.user.id);
    props.setUserInfo(data);
    navigate("/maintenance-request");
} else {
    console.error('Invalid data structure:', data);
    // Handle the error case
}


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
      <h4>TenantCare App</h4>
      <h4>Please Log In</h4>
      <form onSubmit={handleLogin}>
      <div>
      <label>
          <h4>Email *</h4>
          <input
            className="input_1"
            type="text"
            name="username"
            value={emailVal}
            onChange={e => setEmailVal(e.target.value)}             
            placeholder="alice@example.com"
          />
        <br />
          <h4>Password *</h4>
          <input
            className="input_1"
            type="password"
            name="password"
            value={passwordVal}
            onChange={e => setPasswordVal(e.target.value)}
            placeholder="Password"
          />
        </label>
        </div>
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