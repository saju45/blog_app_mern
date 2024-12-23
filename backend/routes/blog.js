import express from "express";

const router = express();

// route to get all blogs

router.get("/", async (req, res) => {
  try {
    // const blogs = await Blog.find({});

    // res.json(blogs);
    res.status(200).send("Get all blogs");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

export default router;
