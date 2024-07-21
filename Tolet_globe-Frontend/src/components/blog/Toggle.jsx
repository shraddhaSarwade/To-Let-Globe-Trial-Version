/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../style/blog/Toggle.css";
// import axios from "axios";
import axios from "./axiosConfig";
import { useNavigate } from "react-router-dom";

// Component to Render the Latest, Tending and Create Blog Buttons
function Toggle({ isLatest, handleClickLatest, handleClickTrending }) {
  const navigate = useNavigate();

  const handleCreateBlog = async () => {
    await axios
      .post("/createBlog/auth")
      .then((response) => {
        console.log("value of isAuth recd :", response.data);
        if (response.data.isAuth === false) {
          navigate("/createBlog");
        } else {
          alert("Please login as Content Creator to post a Blog!");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <div className="main-toggle outer my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-3" id="togglecontainer1">
            <button
              type="button"
              className={`btn custom btn-lg ${isLatest ? "active" : ""}`}
              onClick={handleClickLatest}
            >
              Latest
            </button>
            <button
              type="button"
              className={`btn custom btn-lg ${!isLatest ? "active" : ""}`}
              onClick={handleClickTrending}
            >
              Trending
            </button>
          </div>
        </div>
      </div>
      {/* <div className="col" id="togglecontainer2">
        <a
          type="button"
          className="btn custom btn-lg"
          id="createBlog"
          onClick={handleCreateBlog}
        >
          Create Blog
        </a>
      </div> */}
    </div>
  );
}

export default Toggle;
