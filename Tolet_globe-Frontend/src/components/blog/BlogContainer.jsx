/* eslint-disable array-callback-return */
import React, { useState, useEffect, useContext } from "react";
import "../../style/blog/BlogContanier.css";
// import BlogCard from "./BlogCard";
import BlogCard from "./BlogCard";
import Pagination from "./Pagination";
import Toggle from "./Toggle";
// import axios from "axios";
import MyContext from "../../context";

import axios from "./axiosConfig";

// Component to Display Six Blogs from all Blog Data in Card form
function BlogContainer() {
  const [backendData, setBackendData] = useState([{}]);

  const [isLatest, setIsLatest] = useState(true);

  const [currentPg, setCurrentPg] = useState(1);

  // const [updateLikes, setUpdateLikes] = useState(false);

  const { updateLikes, setUpdateLikes } = useContext(MyContext);

  async function getDataFromBackend() {
    const allBlogs = await axios.get("/blogs");
    setBackendData(allBlogs.data.reverse());
  }

  useEffect(() => {
    getDataFromBackend();
  }, [updateLikes]);

  const handleClickLatest = () => {
    getDataFromBackend();

    setIsLatest(true);
    paginate(1);
  };

  const handleClickTrending = () => {
    backendData.sort((a, b) => {
      const sumA = a.views + a.likes;
      const sumB = b.views + b.likes;

      if (sumA > sumB) {
        return -1;
      }
      if (sumA < sumB) {
        return 1;
      }
    });
    setBackendData(backendData);
    setIsLatest(false);
    paginate(1);
  };

  const indexOfLastBlog = 6 * currentPg;
  const indexOfFirstBlog = indexOfLastBlog - 6;
  const sixBlogData = backendData.slice(indexOfFirstBlog, indexOfLastBlog);

  const paginate = (pgNo) => {
    setCurrentPg(pgNo);
  };

  return (
    <>
      <Toggle
        isLatest={isLatest}
        handleClickLatest={handleClickLatest}
        handleClickTrending={handleClickTrending}
      />

      <div className="container BlogContainer">
        {sixBlogData.map((datapt, i) => (
          <BlogCard
            key={i}
            id={datapt._id}
            title={datapt.title}
            author={datapt.author}
            content={datapt.content}
            image={datapt.image}
            role={datapt.role}
            category={datapt.category}
            views={datapt.views}
            likes={datapt.likes}
            date={datapt.date}
            intro={datapt.intro}
            updateLikes={updateLikes}
            setUpdateLikes={setUpdateLikes}
          />
        ))}
      </div>
      <div 
      style={{marginTop:"20px"}}>

      <Pagination
        noOfBlogs={backendData.length}
        paginate={paginate}
        currentPg={currentPg}
      />
      </div>
    </>
  );
}

export default BlogContainer;
