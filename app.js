const express = require('express')
const mongoose = require('mongoose')
const Post = require("./models/post");
const User = require("./models/User")

const app = express()
const port = 5000

app.use(express.urlencoded({ extended: false })) 
app.use(express.json())

const connect = require('./schemas');
connect();

const makeUser = require("./routers/posts");
app.use("/api", [makeUser]);

const usersRouter = require("./routers/users");
const router = require('./routers/users');
app.use("/api", [usersRouter]);

const postsRouter = require("./routers/posts");
app.use("/api", [postsRouter]);

const repostsRouter = require("./routers/updates");
app.use("/api", [repostsRouter]);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/main', async (req, res) => {
    const list = await Post.find().sort({date: 'descending'})
    res.render('main', {list});
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/user', (req, res) => {
    res.render('user');
})

app.get('/write', (req, res) => {
    res.render('write');
})

app.get('/detail', (req, res) => {
    res.render('detail');
})

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})