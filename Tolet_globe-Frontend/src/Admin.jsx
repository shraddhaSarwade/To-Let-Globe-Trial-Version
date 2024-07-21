/* eslint-disable no-unused-vars */
import React from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import Adminblog from "./components/Adminblog";
import Adminpropertylisting from "./components/Adminpropertylisting";
import Admindisplayblog from "./components/Adimndisplayblog";
import Showblog from "./components/Showblog";
import { AdminNavbar } from "./components/AdminNavbar";
const Admin = () => {
  return (
    <div>
      <Routes>
        <Route path="/admin/" element={<Admindisplayblog />} />
        <Route path="/admin/postblog" element={<Adminblog />} />
        <Route path="/admin/property" element={<Adminpropertylisting />} />
        <Route path="/admin/showblog" element={<Showblog />} />
      </Routes>
    </div>
  );
};

export default Admin;
