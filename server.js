const express = require('express')
const {engine} = require('express-handlebars')
require('dotenv').config()

const { dbConnection } = require('./database/config')
const routerIndex = require('./routes')
const { routerDev } = require('./routes/db')
const { routerPosts } = require('./routes/posts')



// Inicializo la app de express
const app = express()

// Inicializando base de datos
dbConnection() 

//Template Engine
app.engine('hbs', engine({extname: '.hbs'}))
app.set('view engine', 'hbs')
app.set('views', './views')

//Middlewares
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//Routes
app.use('/', routerPosts)
app.use('/', routerIndex)
//Routes solo para dev
if(process.env.ENV_DEV) {
    app.use('/', routerDev)
}

const PORT = process.env.PORT
app.listen(PORT, err => {

    if (err) throw new Error('Ocurrio un problema con el servidor', err)
    console.log("Servidor express escuchando en el puerto",PORT)

})