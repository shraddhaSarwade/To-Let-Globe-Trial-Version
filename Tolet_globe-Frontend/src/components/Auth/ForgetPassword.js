import React, { useState } from "react";
import "./../Auth/Auth.css";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  //form funtion
  const handleSubmit = async (e) => {
    e.preventDefault(); //to prevent refreshing of the page while submitting the register form
    try {
      const res = await axios.post("/api/v1/auth/forget-password", {
        email,
        newPassword,
        answer,
      });
      if (res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
    console.log(email, newPassword);
  };
  return (
    <>
      <NavBar />
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="login_form_container">
            <div className="reset_form">
              <h3>RESET PASSWORD</h3>
              <div className="input_group">
                <i className="fa fa-user" />
                <input
                  type="email"
                  placeholder="Email"
                  className="input_text"
                  autoComplete="off"
                  id="exampleInputEmail1"
                  value={email}
                  onChange={(e) => setAnswer(e.target.value)}
                  required
                />
              </div>
              <div className="input_group">
                <i className="fa fa-question-circle" />
                <input
                  type="text"
                  placeholder="Your first School"
                  className="input_text"
                  autoComplete="off"
                  id="exampleInputEmail1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input_group">
                <i className="fa fa-unlock-alt" />
                <input
                  type="password"
                  placeholder="Password"
                  className="input_text"
                  autoComplete="off"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  id="exampleInputPassword1"
                  required
                />
              </div>
              <div className="button_group" id="reset_button">
                <button type="submit">RESET</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ForgetPassword;
