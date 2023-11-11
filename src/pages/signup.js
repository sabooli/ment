import React, { useState } from "react";
import Signupimg from "../icons/Group 1312.png";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaYahoo } from "react-icons/fa";
import emailValidator from "email-validator";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleRepeatPasswordChange = (event) => {
    setRepeatPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValidEmail = emailValidator.validate(username);
    const isPasswordValid = password.length >= 8;


    if (isValidEmail && isPasswordValid) {
      if (password !== repeatPassword) {
        setErrorMessage("Passwords do not match");
      } else {
        fetch("https://portals.mentalland.com/api/V1/auth/users_register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            email: username,
            password: password,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            if (data.status) {
              alert(data.message);
              window.location.href = "/";
            } else {
              setErrorMessage("You have registered before");
            }
          })
          .catch((error) => {
            console.log(error);
            setErrorMessage("Failed to sign up");
          });
      }
    } else {
      if (!isValidEmail) {
        setErrorMessage("Enter a valid email address");
      } else {
        setErrorMessage("Password must be at least 8 characters long");
      }
    }
  };

  return (
    <div>
      <div className="loginpage">
        <div>
          <img src={Signupimg} className="loginimg" alt="mentalland sign up" />
        </div>
        <form className="logincadre">
          <div className="welcome text-center mb-5">Create Account</div>
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
            <div>
              <div className="label-log mt-5">Repeat Password</div>
              <input
                type="password"
                className="input"
                value={repeatPassword}
                onChange={handleRepeatPasswordChange}
                required
              />
            </div>
            {errorMessage && (
              <div className="error text-start mt-1">{errorMessage}</div>
            )}
          </div>

          <div className="text-center mb-5">
            <button
              type="submit"
              onClick={handleSubmit}
              className="mt-5 loginButton"
            >
              Create Account
            </button>
          </div>
          <hr className="hr" />
          <div className="forgot text-center mt-5">
            {" "}
            <span>Already have an account? </span>
            <Link to="/pages/login" className="signupnow">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
