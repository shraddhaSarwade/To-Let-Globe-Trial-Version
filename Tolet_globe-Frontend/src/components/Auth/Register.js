/* eslint-disable no-unused-vars */
import React, { useState } from "react";
//import Layout from "../Layout/Layout.jsx";
import "./../Auth/Auth.css";
// import toast from "react-hot-toast";
import axios from "../blog/axiosConfig";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { AccountCircle, Lock, Person } from "@mui/icons-material";
import Link from "@mui/material/Link";

const Register = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [phone, setPhone] = useState("");
  // const [address, setAddress] = useState("");
  // const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const response = await axios.post(
      process.env.REACT_APP_API_URL + "/register",
      formData
    );
    alert("Registration Successful!");
    navigate("/blogs");
  };

  //form funtion
  // const handleSubmit = async (e) => {
  //   e.preventDefault(); //to prevent refreshing of the page while submitting the register form
  //   try {
  //     const res = await axios.post("/api/v1/auth/register", {
  //       name,
  //       email,
  //       password,
  //       phone,
  //       address,
  //       answer,
  //     });
  //     if (res.data.success) {
  //       toast.success(res.data.message);
  //       navigate("/login");
  //     } else {
  //       toast.error(res.data.message);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error("Something went wrong");
  //   }
  //   console.log(name, email, password, phone, address);
  // };
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="register_form_container">
          <div className="register_form">
            <h2>Register</h2>
            <div className="input_group">
              <i className="fa fa-user" />
              <input
                type="text"
                placeholder="Username"
                className="input_text"
                autoComplete="off"
                id="exampleInputUser1"
                value={formData.username}
                name="username"
                onChange={handleChange}
                required
              />
            </div>
            <div className="input_group">
              <i className="fa fa-envelope" />
              <input
                type="email"
                placeholder="Email"
                className="input_text"
                autoComplete="off"
                id="exampleInputEmail1"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input_group">
              <i className="fa fa-unlock-alt" />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                id="exampleInputPassword1"
                required
                name="password"
                className="input_text"
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <Person className="icon" />
              <FormControl fullWidth className="form-control">
                <InputLabel htmlFor="role">Role</InputLabel>
                <Select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  label="Role"
                  id="role"
                  disableunderline="true"
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="content-creator">Content Creator</MenuItem>
                  <MenuItem value="landlord">Landlord</MenuItem>
                  <MenuItem value="tenant">Tenant</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="register_button">
              <button type="submit">REGISTER</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
