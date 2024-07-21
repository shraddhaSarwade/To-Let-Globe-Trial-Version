/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
//import Layout from "../Layout/Layout.jsx";
import "./../Auth/Auth.css";
import toast from "react-hot-toast";
import axios from "../blog/axiosConfig";
import { useNavigate, useLocation } from "react-router-dom";
//import { useAuth } from '../../context/auth';
import NavBar from "../NavBar";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  //const [auth, setAuth] = useAuth();

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (evt) => {
    setLoginData({ ...loginData, [evt.target.name]: evt.target.value });
  };
  const location = useLocation();
  const navigate = useNavigate();

  const handleFocus = (e) => {
    e.target.previousElementSibling.classList.add("glowIcon");
  };

  const handleBlur = (e) => {
    e.target.previousElementSibling.classList.remove("glowIcon");
  };

  const inputs = document.querySelectorAll(".input_text");
  inputs.forEach((input) => {
    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);
  });

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await axios
      .post("/login", loginData)
      .then((response) => {
        console.log("Logged In",response.data);
        if (response.data.isLogin === false) {
          alert("Invalid Credentials! Please Try Again");
        } else {
          console.log(response.data.isLogin);
          alert("Login Successful!");
          navigate("/blog");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <NavBar />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="login_form_container">
            <div className="login_form">
              <h2>Login</h2>
              <div className="input_group">
                <i className="fa fa-user" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input_text"
                  autoComplete="off"
                  id="exampleInputEmail1"
                  value={loginData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input_group">
                <i className="fa fa-unlock-alt" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input_text"
                  autoComplete="off"
                  value={loginData.password}
                  onChange={handleChange}
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div className="button_group" id="login_button">
                <button type="submit" onSubmit={handleSubmit}>
                  LOGIN
                </button>
              </div>
              <div className="fotter">
                <a href="#" onClick={() => navigate("/forget-password")}>
                  Forgot Password ?
                </a>
                <a href="#" onClick={() => navigate("/register")}>
                  Register
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
