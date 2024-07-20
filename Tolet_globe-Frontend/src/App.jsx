import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { NavBar } from "./components/NavBar";
// import { Nav } from './components/nav';

// import { Home } from './components/home/home';
import { Layout } from "./components/layout";
import { Contact } from "./components/contact/contactus";
// import { BlogPage1 } from "./components/blog/blogpage1";
// import { BlogPage2 } from "./components/blog/blogpage2";
// import { BlogPage3 } from "./components/blog/blogpage3";
// import { BlogPage4 } from "./components/blog/blogpage4";
// import { BlogPage5 } from "./components/blog/blogpage5";
// import { BlogPage6 } from "./components/blog/blogpage6";
// import { Blog } from './components/blog/blog';
import { BlogMain } from "./components/blog/blogmain";
import { AboutUs } from "./components/about/aboutus";
import { Property } from "./components/property/property";
import "bootstrap/dist/css/bootstrap.css";
//import Login from './components/login/Login';
// import { Service } from "./components/service";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import ForgetPassword from "./components/Auth/ForgetPassword";
import Adminpropertylisting from "./components/Adminpropertylisting";
import Listing from "./components/property/Listing";
import NotFound from "./components/property/NotFound";
import Dashboard from "./components/dashboard";
import User from "./User";
import Admin from "./Admin";
import Adimdisplayblog from "./components/Adimndisplayblog";
import Adminblog from "./components/Adminblog";
import Showblog from "./components/Showblog";
import Flow2a from "./components/property/Flow2-1/Flow2a1";
import Flow22 from "./components/property/Flow2-2/Flow2a2";
import Flow2c from "./components/property/Flow2-3/Flow2a3";
import Flow2d from "./components/property/Flow2-4/Flow2a4";
import Flow2e from "./components/property/Flow2-5/Flow2a";
import Flow2f from "./components/property/Flow2-6/Flow2a6";
import Flow2g from "./components/property/Flow2-7/Flow2a7";
import Flow2h from "./components/property/Flow2-8/Flow2a8";
import Blog from "./components/blog/Blog";
import CreateBlog from "./components/blog/CreateBlog";
import ServicePage from "./components/ServicePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route path="/blog" element={<BlogMain />} />
          {/* <Route path="/blog/blogpage-1" element={<BlogPage1 />} />
          <Route path="/blog/blogpage-2" element={<BlogPage2 />} />
          <Route path="/blog/blogpage-3" element={<BlogPage3 />} />
          <Route path="/blog/blogpage-4" element={<BlogPage4 />} />
          <Route path="/blog/blogpage-5" element={<BlogPage5 />} />
          <Route path="/blog/blogpage-6" element={<BlogPage6 />} /> */}
          <Route path="/service" element={<ServicePage />} />
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/property" element={<Adminpropertylisting />} />
          <Route path="/admin/" element={<Adimdisplayblog />} />
          <Route path="/admin/showblog" element={<Showblog />} />
          <Route path="/admin/postblog" element={<Adminblog />} />
          <Route path="/flow2a1" element={<Flow2a />} />
          <Route path="/flow2a2" element={<Flow22 />} />
          <Route path="/flow2a3" element={<Flow2c />} />
          <Route path="/flow2a4" element={<Flow2d />} />
          <Route path="/flow2a5" element={<Flow2e />} />
          <Route path="/flow2a6" element={<Flow2f />} />
          <Route path="/flow2a7" element={<Flow2g />} />
          <Route path="/flow2a8" element={<Flow2h />} />
          {/* Route to display specific blog */}
          <Route path="/showBlog/:id" element={<Blog />} />
          {/* Route to display create blog page */}
          <Route path="/createBlog" element={<CreateBlog />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
