import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DateCategory from "./DateCategory";
import Views from "./Views";
import Likes from "./Likes";
import AuthorDetails from "./AuthorDetails";
import "../../style/blog/Blog.css";
// import axios from "axios";
// require("dotenv").config({ path: ".env" });
import axios from "./axiosConfig";
import NavBar from "../NavBar";

// Component to Display a Single Blog
function Blog() {
  const { id } = useParams();

  console.log(process.env.REACT_APP_API_URL);

  const [backendData, setBackendData] = useState([{}]);

  const []=useState()

  useEffect(() => {
    async function getDataFromBackend() {
      const blog = await axios.get(`/blogs/${id}`);
      setBackendData(blog.data);
    }
    getDataFromBackend();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container" id="blogContainer">
        <DateCategory date={backendData.date} category={backendData.category} />
        <h1 className="my-3">{backendData.title}</h1>
        <div className="row">
          <div className="col-2">
            <AuthorDetails
              author={backendData.author}
              role={backendData.role}
            />
          </div>
          <div className="col-10"></div>
        </div>
        <div
          className="row d-flex justify-content-between py-3 my-3"
          id="borderrow"
        >
          <div className="col-2 p-0 d-flex flex-start">
            {/* <div class="col-4 p-0 d-flex justify-content-between"> */}
            <div className="col-4 p-0 d-inline">
              <Views views={backendData.views} />
            </div>
            <div className="col-4 p-0 d-inline">
              <Likes likes={backendData.likes} />
            </div>
          </div>
          <div className="col-1">
            <span className="text-decoration-underline" id="read">
              6 min read
            </span>
          </div>
        </div>

        <div className="row my-5" id="intro">
          {backendData.intro}
        </div>

        <div className="row">
          <img className="img-fluid" src={backendData.image} height="70vh" />
        </div>

        <div
          className="row my-5"
          id="content"
          dangerouslySetInnerHTML={{ __html: backendData.content }}
        ></div>

        <div className="row">
          <a className="btn btn-large btn-primary toLetButton" href="/blog">
            Back to All Blogs
          </a>
        </div>
      </div>
    </>
  );
}

export default Blog;
