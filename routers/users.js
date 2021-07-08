const express = require("express");
const Posts = require("../models/post");

const router = express.Router();

router.get("/main", async (req, res, next) => {
  try {
    const { category } = req.query;
    const posts = await Posts.find({ category }).sort("-_id");
    res.json({ posts : posts });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get("/main/:usersId", async (req, res) => {
  const { usersId } = req.params;
  users = await Users.findOne({ usersId: usersId });
  res.json({ detail: users });
});

module.exports = router;