const express = require("express");
const Posts = require("../models/post");

const router = express.Router();

router.get("/detail/", async (req, res) => {
  console.log(req)
  const { repostId } = req.params;
  repost = await Posts.findOne({ _id: repostId });
  res.json('detail', { repost });
});
  
  module.exports = router;