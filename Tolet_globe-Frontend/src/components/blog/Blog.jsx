import React, { useState, useEffect, useContext } from "react";
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
import MyContext from "../../context";

// Component to Display a Single Blog
function Blog() {
  const { id } = useParams();

  const [backendData, setBackendData] = useState([{}]);
  const { updateLikes, setUpdateLikes } = useContext(MyContext);

  const [] = useState();

  useEffect(() => {
    async function getDataFromBackend() {
      const blog = await axios.get(`/blogs/${id}`);
      setBackendData(blog.data);
    }
    getDataFromBackend();
  }, [updateLikes]);


  const handleLikeClick = async () => {
    if (updateLikes === false) {
      const dataToDB = {
        id: backendData.id,
        title: backendData.title,
        author: backendData.author,
        content: backendData.content,
        image: backendData.image,
        role: backendData.role,
        category: backendData.category,
        views: backendData.views,
        likes: backendData.likes + 1,
        date: backendData.date,
        intro: backendData.intro,
      };
      await axios
        .post(`/blogs/updateLikes/${id}`, dataToDB)
        .then((response) => {
          setUpdateLikes(!updateLikes);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    } else {
      const dataToDB = {
        id: backendData.id,
        title: backendData.title,
        author: backendData.author,
        content: backendData.content,
        image: backendData.image,
        role: backendData.role,
        category: backendData.category,
        views: backendData.views,
        likes: backendData.likes - 1,
        date: backendData.date,
        intro: backendData.intro,
      };
      await axios
        .post(`/blogs/updateLikes/${id}`, dataToDB)
        .then((response) => {
          setUpdateLikes(!updateLikes);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <>
      <NavBar />
      <div className="container" id="blogContainer">
        <DateCategory date={backendData.date} category={backendData.category} />
        <h1 className="my-3 blogtitle">{backendData.title}</h1>
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
            <div className="col-4 p-0 d-flex">
              <Views views={backendData.views} />
            </div>
            <div className="col-4 p-0 d-flex">
              <Likes
                isLiked={updateLikes}
                likes={backendData.likes}
                handleLikes={handleLikeClick}
              />
            </div>
          </div>
          <div className="col-2">
            <span className="text-decoration-underline text-right" id="read">
              6 min ago
            </span>
          </div>
        </div>

        <div className="row my-5" id="intro">
          {backendData.intro}
        </div>

        <div className="row">
          <img alt="image1" className="img-fluid" src={backendData.image} height="70vh" />
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
