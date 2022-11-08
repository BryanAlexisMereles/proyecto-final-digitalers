const express = require('express')
const { getPosts, showPosts } = require('../controllers/posts')
const routerPosts = express.Router()

routerPosts.get('/posts', getPosts)
routerPosts.get('/posts/:slug', showPosts)


module.exports = {
    routerPosts
}