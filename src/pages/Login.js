import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../database/firebaseConfig";
import { useDispatch } from "react-redux";
import { setUserID } from "../redux/userSlice";
import Logo from "../assets/main/Logo.png";
import "./styles/Login.css";

function Login() {
  let [buttonText, setButtonText] = useState("Show");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const HandleClick = () => {
    setButtonText(showPassword === true ? "Show" : "Hide");
    setShowPassword((prev) => !prev);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      const uid = userCredential.user.uid;
      dispatch(setUserID(uid));
      console.log("User logged in:", userCredential.user);
      alert("User Logged in Successfully!");
      navigate("/");
      console.log(uid);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <div>
      <div>
        <div className="leftContainer">
          <h1 id="loginText">Login to Your Account</h1>
          <p id="loginUsingSocial">Login using social networks</p>

          <div id="socialIcons">
            <Link to="/" className="fa fa-google" />
            <Link to="/" className="fa fa-facebook" />
          </div>

          <p id="loginUsingSocial">OR</p>

          <form onSubmit={handleLogin}>
            <div id="usernameID">
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="username"
                required
                id="usernameInput"
              />
            </div>

            <div id="passwordID">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                maxLength="16"
                placeholder="Password"
                name="password"
                required
                id="passwordInput"
              />
              <button
                type="button"
                className="toggleButton"
                onClick={HandleClick}
              >
                {buttonText}
              </button>
            </div>

            <button type="submit" id="submitButton">
              Sign In
            </button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        </div>

        <div className="rightContainer">
          <img src={Logo} id="Logo" alt="Logo" />
          <h1 id="newHere">New Here?</h1>
          <p id="SignUpText">Sign Up to explore more from CoinCidence!</p>
          <p className="offers">-Save and Track Your Learning Progress</p>
          <p className="offers">-Earn Certifications in Finance Skills</p>
          <p className="offers">& Much More!</p>
          <Link to="/signup">
            <button type="submit" id="signUpButton">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
