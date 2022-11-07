const express = require('express')

const getRootController = (req,res = express.response) => {
   /*  res.status(200).send(statusModel) */
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