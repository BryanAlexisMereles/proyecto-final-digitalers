const express = require('express')

const getRootController = (req,res = express.response) => {
   try {
    res.render('index',
    {
    })

} catch (error) {
    console.log(error)
}
}



module.exports = {
    getRootController
}