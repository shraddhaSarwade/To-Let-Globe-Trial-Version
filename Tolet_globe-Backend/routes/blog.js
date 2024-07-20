const express = require("express");
const Blog = require("../models/Blog");
const multer = require("multer");
const router = express.Router();

// Set up multer for file storage in memory
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Convert image buffer to base64 string
const convertImageToBase64 = (buffer, mimetype) => {
  const base64Image = buffer.toString("base64");
  return `data:${mimetype};base64,${base64Image}`;
};

// Extract MIME type from base64 string
const getMimeTypeFromBase64 = (base64String) => {
  const match = base64String.match(/^data:(.*?);base64,/);
  return match ? match[1] : "image/jpeg";
};

// Convert base64 string to image and send as response
const convertBase64ToImage = (base64String, res) => {
  const imgBuffer = Buffer.from(base64String.split(",")[1], "base64");
  const mimeType = getMimeTypeFromBase64(base64String);
  res.writeHead(200, {
    "Content-Type": mimeType,
    "Content-Length": imgBuffer.length,
  });
  res.end(imgBuffer);
};

// Route to create a new blog post with image upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, content, author } = req.body;

    // Check if all required fields are provided
    if (!title || !content || !author || !req.file) {
      return res
        .status(400)
        .json({ error: "Title, content, author, and image are required" });
    }

    // Convert the image to a base64 string
    const base64Image = convertImageToBase64(
      req.file.buffer,
      req.file.mimetype
    );

    // Create a new blog post with base64 image string
    const newBlog = new Blog({
      title,
      content,
      author,
      img: base64Image, // Store base64 string with MIME type
    });

    // Save blog post to MongoDB
    await newBlog.save();

    return res
      .status(201)
      .json({ message: "Blog post created successfully", blog: newBlog });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    // Fetch all blogs from the database
    await Blog.findByIdAndDelete({ _id: req.params.id });
    // Respond with the fetched blogs as JSON
    res.status(200).json({ message: "Blog is deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// Route to fetch all blog posts
router.get("/", async (req, res) => {
  try {
    // Fetch all blogs from the database and sort them by createdAt in descending order
    const blogs = await Blog.find().sort({ createdAt: -1 });

    // Respond with the fetched blogs as JSON
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// Route to fetch a blog post by ID and return the image
router.get("/:id/image", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog || !blog.img) {
      return res.status(404).json({ message: "Blog post or image not found" });
    }

    // Convert the base64 string back to an image and send as response
    convertBase64ToImage(blog.img, res);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

module.exports = router;
