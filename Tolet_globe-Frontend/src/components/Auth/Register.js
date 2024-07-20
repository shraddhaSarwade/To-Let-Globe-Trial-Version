/* eslint-disable no-unused-vars */
import React, { useState } from "react";
//import Layout from "../Layout/Layout.jsx";
import "./../Auth/Auth.css";
// import toast from "react-hot-toast";
import axios from "../blog/axiosConfig";
import { useNavigate } from "react-router-dom";
import NavBar from "../NavBar";
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

    const response = await axios.post("/register", formData);
    console.log(response.data);
    alert("Registration Successful!");
    navigate("/blog");
  };

  return (
    <>
      <NavBar />

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
    </>
  );
};

export default Register;
