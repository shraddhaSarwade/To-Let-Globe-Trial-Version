import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FaHeart, FaRegHeart, FaLongArrowAltRight } from "react-icons/fa";

// Component to Display the Likes of the blog
function Likes({ isLiked, likes, handleLikes }) {
  // function Likes({ updateLikes, likes, handleLikes }) {
  return (
    <>
      {/* <IconButton
        style={{ color: "#9da2af", fontSize: "medium" }}
        // id="visicon"
        onClick={handleLikes}
        color={likes ? "error" : "default"}
      >
        {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
      </IconButton> */}
      <span onClick={handleLikes}>
        {isLiked ? (
          // {updateLikes ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart className="text-[#3cbcb1]" />
        )}
      </span>

      <span> </span>
      <span style={{ color: "#9da2af" }}>{likes}</span>
    </>
  );
}

export default Likes;

// function LikeButton() {

//   return (
//     <div>
//       <IconButton onClick={handleLike} color={liked ? 'error' : 'default'}>
//         {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
//       </IconButton>
//       <p>{likes} {likes === 1 ? 'Like' : 'Likes'}</p>
//     </div>
//   );
// }

// export default LikeButton;
