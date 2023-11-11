import React, { useState } from "react";
import Loginimg from "../icons/Group 1312 (1).png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaYahoo } from "react-icons/fa";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  fetch(" https://portals.mentalland.com/api/V1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: username,
      password: password,
      rememberMe: rememberMe,
    "status": true,
    "message": "با موفقیت وارد شدید",
    "Token_Access": "49|6aH3VrGgFEdKGqMBMLsun3pXnUyNZ88w9vkhXfpd"
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
       if (data.status) {
          alert(data.message);
         window.location.href = "#";
       } else {
         setErrorMessage("Username or password is not valid");  
       }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };

  return (
    <div>
      <div className="loginpage">
        <div>
          <img
            src={Loginimg}
            className="loginimg img-fluid"
            alt="login to mentalland"
          />
        </div>
        <form className="logincadre">
          <div className="welcome text-center mb-5">Welcome Back!</div>
          <div className="login-container">
            <a href="YOUR_GOOGLE_LOGIN_URL" className="login-btn google me-5">
              <FcGoogle className="login-icon" />
              <span className="login-text">Google</span>
            </a>
            <a href="YOUR_YAHOO_LOGIN_URL" className="login-btn yahoo">
              <FaYahoo className="login-icon-y" />
              <span className="login-text">Yahoo</span>
            </a>
          </div>
          <hr className="hr mt-5" />
          <div className="logindata">
            <div>
              <div className="label-log mt-5">Username</div>
              <input
                type="text"
                className="input"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>

            <div>
              <div className="label-log mt-5">Password</div>
              <input
                type="password"
                className="input"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            {errorMessage && (
              <div className="error text-start mt-1">{errorMessage}</div>
            )}
            <div className="remember-me text-start mt-4">
              <input
                type="checkbox"
                id="remember"
                className="checkbox"
                checked={rememberMe}
                onClick={handleRememberMeChange}
              />
              <label htmlFor="remember">Remember me</label>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-5 loginButton"
            >
              Login
            </button>
          </div>
          <div className="forgot text-center mt-5"> Forgot Password?</div>
          <hr className="hr mt-5" />
          <div className="forgot text-center mt-5">
            {" "}
            <span>Don't have an account? </span>
            <Link to="/pages/signup" className="signupnow">
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
