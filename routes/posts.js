const express = require('express')
const Post = require('../models/posts')
const routerPosts = express.Router()

routerPosts.get('/posts', async (req,res) => {
    try {

        const posts = await Post.find({}).lean()
        const title = "Listado de Post" 
        res.render('posts',
        {
            title,
            posts
        })

    } catch (error) {
        console.log(error)
    }
})

module.exports = {
    routerPosts
}