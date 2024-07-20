import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "./axiosConfig";
import "../../style/blog/CreateBlog.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import NavBar from "../NavBar";

// Component to Display Create Blog Form

function CreateBlog() {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    intro: "",
    image: "",
    content: "",
  });

  const handleReset = () => {
    setFormData({
      title: "",
      category: "",
      intro: "",
      image: null,
      content: "",
    });
    fileInputRef.current.value = "";
  };

  const handleChange = (evt) => {
    console.log(formData);
    setFormData((prev) => ({
      ...prev,
      [evt.target.name]: evt.target.value,
    }));
  };

  const handleFileChange = (evt) => {
    setFormData((prev) => ({ ...prev, image: evt.target.files[0] }));
  };

  const handleContentChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      content: value,
    }));
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault(); // Prevent the default form submission
    const response = await axios.post("/getUserData");

    let { username, role } = response.data;
    if (role === "content-creator") {
      role = "Content Creator";
    } else if (role === "admin") {
      role = "Admin";
    }

    const dataToDB = {
      ...formData,
      author: username,
      role: role,
      views: 0,
      likes: 0,
      date: new Date(),
    };

    console.log(dataToDB);
    const response2 = await axios.post("/blogs/new", dataToDB, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    // console.log(response2);
    navigate("/blog");
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <h3 className="text-center createBlog pt-5 pb-1">Create Blog</h3>

          <div className="col-6 offset-3">
            <form
              className="custom-form"
              onSubmit={handleSubmit}
              encType="multipart/form-data"
            >
              <div className="form-group my-3">
                <label htmlFor="title" className="custom-label mb-2">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control custom-input"
                  id="title"
                  placeholder="Title goes here!"
                  value={formData.title}
                  name="title"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group my-3">
                <label htmlFor="category" className="custom-label my-2">
                  Category
                </label>
                <select
                  className="form-control custom-input"
                  id="category"
                  value={formData.category}
                  name="category"
                  onChange={handleChange}
                >
                  <option>News & Events</option>
                  <option>Feature Updates</option>
                  <option>Brand Collaboration</option>
                  <option>Life at To-Let</option>
                  <option>Internship Campaigns</option>
                  <option>Giveaway & Offers</option>
                </select>
              </div>

              <div className="form-group my-3">
                <label htmlFor="intro" className="custom-label my-2">
                  Intro
                </label>
                <input
                  type="text"
                  className="form-control custom-input"
                  id="intro"
                  placeholder="Brief Introduction!"
                  value={formData.intro}
                  name="intro"
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="image" className="custom-label my-2 d-block">
                  Upload Image
                </label>
                <input
                  type="file"
                  className="form-control-file custom-input"
                  id="image"
                  // value={}
                  name="image"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  // value={}
                />
              </div>

              <div className="form-group">
                <label htmlFor="content" className="custom-label my-3">
                  Content
                </label>
                <ReactQuill
                  //   onChange={handleChange}
                  modules={CreateBlog.modules}
                  formats={CreateBlog.formats}
                  id="content"
                  value={formData.content}
                  name="content"
                  onChange={handleContentChange}
                />
              </div>

              <div className="my-3 d-flex justify-content-between">
                <button type="submit" className="btn btn-primary toLetButton">
                  Submit
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn btn-primary toLetButton"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

CreateBlog.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    [("bold", "italic", "underline", "strike", "blockquote")],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

CreateBlog.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default CreateBlog;
