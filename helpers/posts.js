const express = require('express')
const {faker} = require('@faker-js/faker')


const generatePost = () => {
    const post = {
        title: faker.lorem.words(7),
        body: faker.lorem.sentence(500)
    }
    return post
}

module.exports = {
    generatePost
}

