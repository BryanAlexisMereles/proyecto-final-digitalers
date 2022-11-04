const express = require('express')
const { generatePost } = require('../helpers/posts')
const routerDev = express.Router()
const Post = require('../models/posts')

// TODO: Llevar a controlador
routerDev.get('/db/fresh', async (req,res = express.response) => {
    try {
        
        const nuevoPost = generatePost()
        
        const post = new Post(nuevoPost)

        await post.save()

        const posts = await Post.find({}).count()

        res.send(`<h1> Insertado en la db - Post: ${nuevoPost.title} </h1>
                <p>${nuevoPost.body}</p>
                <br>
                <p> Total: ${posts} </p>`)

    } catch (error) {
        res.send('fallamos')
        console.log(error)
    }
})

routerDev.get('/db/clear', async (req,res = express.response) => {
    try {
        const posts = await Post.deleteMany()
        res.send("Se eliminaron todos los posts")
    } catch (error) {
        res.send("Hubo un error")
        console.log(error)
    }
})

module.exports = {
    routerDev
}