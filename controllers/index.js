const express = require('express')
const { statusModel } = require("../models")

const getRootController = (req,res = express.response) => {
    res.status(200).send(statusModel)
}


module.exports = {
    getRootController
}