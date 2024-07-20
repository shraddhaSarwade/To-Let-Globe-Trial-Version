import React, { useState } from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import "../../style/blog/BlogCard.css";
import DateCategory from "./DateCategory";
import Views from "./Views";
import Likes from "./Likes";
import AuthorDetails from "./AuthorDetails";
// import axios from "axios";
import axios from "./axiosConfig";
import { useNavigate } from "react-router-dom";

//Component to display a Blog Card in all Blogs Page
const BlogCard = ({
  id,
  title,
  author,
  content,
  image,
  role,
  category,
  views,
  likes,
  date,
  intro,
  updateLikes,
  setUpdateLikes,
}) => {
  // console.log(process.env.REACT_APP_BACKEND);
  const navigate = useNavigate();

  // const [like, setLikes] = useState(0);
  // const [liked, setLiked] = useState(false);

  const [isLiked, setLike] = useState(false);

  // const handleLikes = () => {
  //   if (liked) {
  //     setLikes(like - 1);
  //   } else {
  //     setLikes(like + 1);
  //   }
  //   setLiked(!liked);
  // };

  const handleLikes = async () => {
    if (isLiked === false) {
      // if (updateLikes === false) {
      const dataToDB = {
        id: id,
        title: title,
        author: author,
        content: content,
        image: image,
        role: role,
        category: category,
        views: views,
        likes: likes + 1,
        date: date,
        intro: intro,
      };
      await axios
        .post(`/blogs/updateLikes/${id}`, dataToDB)
        .then((response) => {
          // console.log("Success:", response.data);
          // Redirect to the /blogs page
          setLike(!isLiked);
          setUpdateLikes(!updateLikes);
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle error actions, e.g., show error message
        });
    } else {
      const dataToDB = {
        id: id,
        title: title,
        author: author,
        content: content,
        image: image,
        role: role,
        category: category,
        views: views,
        likes: likes - 1,
        date: date,
        intro: intro,
      };
      await axios
        .post(`/blogs/updateLikes/${id}`, dataToDB)
        .then((response) => {
          // console.log("Success:", response.data);
          // Redirect to the /blogs page
          setLike(!isLiked);
          setUpdateLikes(!updateLikes);
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle error actions, e.g., show error message
        });
    }
  };

  const handleViews = async () => {
    const dataToDB = {
      id: id,
      title: title,
      author: author,
      content: content,
      image: image,
      role: role,
      category: category,
      views: views + 1,
      likes: likes,
      date: date,
      intro: intro,
    };

    const resp = await axios.post(
      process.env.REACT_APP_API_URL + `/blogs/updateViews/${id}`,
      dataToDB
    );
    // console.log("Success:", response.data);
    navigate(`/showBlog/${id}`);
  };

  return (
    <div className="card" style={{ width: "30%", height: "70vh" }}>
      {/* <div class="card" style={{ width: "30%" }}> */}
      <img
        src={image}
        className="card-img-top"
        alt="..."
        // height="40%"
        // style={{ objectFit: "cover" }}
      />

      <div className="row">
        <div className="card-body" id="#nopadding">
          <p className="card-text">
            <DateCategory date={date} category={category} />
          </p>

          <div
            style={{
              height: "20vh",
              overflow: "hidden",
              //   textOverflow: "ellipses",
              //   whiteSpace: "nowrap",
            }}
          >
            <h5 className="card-title">{title}</h5>
            <p
              className="card-text"
              style={{
                height: "20vh",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginBottom: "16px",
              }}
            >
              {intro}
            </p>
          </div>

          <div>
            {/* <a class="readmore btn" onClick={handleViews} href={`/showBlog/${id}`}> */}
            <a className="readmore" onClick={handleViews}>
              Read More <TrendingFlatIcon />
            </a>
          </div>

          <div className="container-fluid p-0">
            <div className="row d-flex">
              <div className="col-8 pr-0">
                <AuthorDetails author={author} role={role} />
              </div>
              <div className="col-4 p-0 d-flex justify-content-between">
                <div className="col-6 p-0 d-inline">
                  <Views views={views} />
                </div>
                <div className="col-5 p-0 d-inline">
                  <Likes
                    isLiked={isLiked}
                    // updateLikes={updateLikes}
                    likes={likes}
                    handleLikes={handleLikes}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* 
          <div
            className="my-4 cursor-pointer"
            onClick={() => {
              if (isUserLiked) setTotalLikes((prev) => prev - 1);
              if (!isUserLiked) setTotalLikes((prev) => prev + 1);
              setIsUserLiked(!isUserLiked);
              toggleLikeHandler();
            }}
          >
            {isUserLiked ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-[#3cbcb1]" />
            )}
          </div>
          <p className="text-sm text-gray-400"> {totalLikes} Likes</p> */}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
