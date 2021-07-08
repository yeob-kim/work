const express = require("express");
const Posts = require("../models/post");
const User = require("../models/User")

const router = express.Router();

router.post("/write", async (req, res) => {
    const post = await Posts.create({
        title: req.body.title, 
        comment: req.body.comment, 
    })
    res.redirect('/main') 
});

router.post("/user", async (req, res) => {
    const { email, nickname, password, confirmPassword } = req.body;

    if (password !== confirmPassword ) {
        res.status(400).send({
            errorMessage: '패스워드가 일치하지 않습니다.'
        });
        return; // 일치하지 않으면 아래 코드는 실행할 필요가 없음.
    }
    const existUsers = await User.find({ 
        $or : [{ email }, { nickname }],
     });
    if (existUsers.length) {
        res.status(400).send({
            errorMessage: '이미 사용중인 이메일 또는 닉네임입니다'
        });
        return;
    }
    const user = new User({ email, nickname, password });
    await user.save();

    res.status(201).send();
});

module.exports = router;