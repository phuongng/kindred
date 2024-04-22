import React, { useState } from "react";
import "./signin-up_css/login.css";
//import social media icons
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"; 
import Logo from "../image/favicon.png";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="login">
        <div className="top_login">
          <h1 className="logo_name">
            <img className="logo" src={Logo} alt="Kindred Logo" />
            Kindred
          </h1>
          <p>Caring Connections, Compassionate Care</p>

          <div className="button_section">
            <button className="signin-button">Sign in</button>
            <button className="registration-button">
              <a href="/registration">Register</a>
            </button>
          </div>
        </div>

        <div className="bottom_login">
          <form className="login_form">
            <div>
              <label htmlFor="email">Email address:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Enter email"
              />
            </div>

            <div className="password-input">
              <label htmlFor="password">Password:</label>
              <div className="password-with-toggle">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  required
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="toggle-password"
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>
            </div>

            <p className="forgot_password">
              <a href="#">Forgot password?</a>
            </p>

            <div className="signin-option">
              <button id="signin-big-button" className="big-button">
                Sign In
              </button>

              <p>Other sign in option</p>

              <div className="social_media_icons">
                <FaFacebookF className="facebook-icon" />
                <FaGoogle className="google-icon" />
                <FaApple className="apple-icon" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
