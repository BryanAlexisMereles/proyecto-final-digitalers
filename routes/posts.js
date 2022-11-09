const express = require('express')
const { getPosts, showPosts, showPostsJson } = require('../controllers/posts')
const routerPosts = express.Router()

routerPosts.get('/posts', getPosts)
routerPosts.get('/posts/:slug', showPosts)
routerPosts.post('/posts/:slug', showPostsJson)


module.exports = {
    routerPosts
}