import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Layout } from "./components/layout";
import { Contact } from "./components/contact/contactus";
import { BlogPage1 } from "./components/blog/blogpage1";
import { BlogPage2 } from "./components/blog/blogpage2";
import { BlogPage3 } from "./components/blog/blogpage3";
import { BlogPage4 } from "./components/blog/blogpage4";
import { BlogPage5 } from "./components/blog/blogpage5";
import { BlogPage6 } from "./components/blog/blogpage6";
import { BlogMain } from "./components/blog/blogmain";
import { AboutUs } from "./components/about/aboutus";
import { Property } from "./components/property/property";
import "bootstrap/dist/css/bootstrap.css";
import { Service } from "./components/service";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import ForgetPassword from "./components/Auth/ForgetPassword";
import Adminpropertylisting from "./components/Adminpropertylisting";
import Listing from "./components/property/Listing";
import NotFound from "./components/property/NotFound";
import Flow2a from "./components/property/Flow2-1/Flow2a1";
import Flow22 from "./components/property/Flow2-2/Flow2a2";
import Flow2c from "./components/property/Flow2-3/Flow2a3";
import Flow2d from "./components/property/Flow2-4/Flow2a4";
import Flow2e from "./components/property/Flow2-5/Flow2a";
import Flow2f from "./components/property/Flow2-6/Flow2a6";
import Flow2g from "./components/property/Flow2-7/Flow2a7";
import Flow2h from "./components/property/Flow2-8/Flow2a8";

const User = () => {
  return (
    <div className="App">
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/blog" element={<BlogMain />} />
        <Route path="/blog/blogpage-1" element={<BlogPage1 />} />
        <Route path="/blog/blogpage-2" element={<BlogPage2 />} />
        <Route path="/blog/blogpage-3" element={<BlogPage3 />} />
        <Route path="/blog/blogpage-4" element={<BlogPage4 />} />
        <Route path="/blog/blogpage-5" element={<BlogPage5 />} />
        <Route path="/blog/blogpage-6" element={<BlogPage6 />} />
        <Route path="/service" element={<Service />} />
        <Route path="/property" element={<Property />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/about/" element={<AboutUs />} />
        <Route
          path="/adminpropertylisting"
          element={<Adminpropertylisting />}
        />
        <Route path="/listing" element={<Listing />} />
        <Route path="/nf" element={<NotFound />} />
        <Route path="/flow2a1" element={<Flow2a />} />
        <Route path="/flow2a2" element={<Flow22 />} />
        <Route path="/flow2a3" element={<Flow2c />} />
        <Route path="/flow2a4" element={<Flow2d />} />
        <Route path="/flow2a5" element={<Flow2e />} />
        <Route path="/flow2a6" element={<Flow2f />} />
        <Route path="/flow2a7" element={<Flow2g />} />
        <Route path="/flow2a8" element={<Flow2h />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default User;
