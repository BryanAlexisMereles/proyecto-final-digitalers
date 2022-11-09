const mongoose = require('mongoose')
const slugify = require('slugify')

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    slug:{
        type: String,
        required: true,
        unique: true
    }
},
{
    versionKey: false
}
)

// NUEVO ESQUEMA PARA USUARIOS CON POSTS
/*
{
    {
        UserName:{"Carlos_5932"}
        Name:{"Carlos Alberto"}
        Password:{"12345678"}
        Email:{"carlitos@gmail.com"}
        EmailVer:{"UUID"} // /verification/UUID
        Verified:{TRUE}
        Mascotas:{}

        Posts:{
            Title:{""},
            body:{""},
            slug:{""}
            }
    }
    
}
*/


// Middleware .pre()
// TODO: Llevar este middleware a un archivo separado
postSchema.pre('validate', function(next){
    if(this.title){
        this.slug = slugify(this.title, {lower: true, strict: true})
    }
    next()
})

module.exports = mongoose.model('Post', postSchema)