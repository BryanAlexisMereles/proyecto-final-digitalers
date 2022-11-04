const express = require('express')
const {faker} = require('@faker-js/faker')


const generatePost = () => {
    const post = {
        title: faker.lorem.words(10),
        body: faker.lorem.sentence(12)
    }
    return post
}

module.exports = {
    generatePost
}

