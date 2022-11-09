const { request } = require('express')
const express = require('express')
const Post = require('../models/posts')


// posts
const getPosts = async (req,res = express.response) => {
    try {

        /* const posts = await Post.find({}).lean() */
        const posts = await Post.aggregate([
            {
              '$project': {
                'title':'$title',
                'slug':'$slug',
                'body': {
                  '$substrCP': [
                    '$body', 0, 500
                  ]
                }
              }
            }
          ])
        const title = "Listado de Post"
        res.render('posts',
        {
            title,
            posts
        })

    } catch (error) {
        console.log(error)
    }
}

// show

const showPosts = async (req = express.request,res = express.response) => {
    const post = await Post.findOne({slug:req.params.slug}).lean()
    if(post === null) 
    { 
      res.render('show', {
        title: 'No existe este post',
        descripcion: '<div class="d-flex justify-content-center"><img class="card" src="/img/nopost.png" width="250" height="250"></div>'
      }) 
    }
    else{
      res.render('show', {
        title: post.title,
        descripcion: post.body
      }) 
    }

}

const showPostsJson = async (req = express.request,res = express.response) => {
  const post = await Post.findOne({slug:req.params.slug}).lean()
  res.send(post)
}


module.exports = {
    getPosts,
    showPosts,
    showPostsJson
}