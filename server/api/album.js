const express = require('express')
const router = express.Router()
const {Album, Artist, Song} = require('../db/index.js')

router.get('/', async(req,res,next) => {
    try {
        let albums = await Album.findAll({
            include: {
                model: Artist
            }
        })
        res.send(albums)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async(req,res,next) => {
    try {
        let album = await Album.findByPk(req.params.id, {
            include: [{ model: Artist },{ model: Song }]
        })
        res.send(album)
    } catch (err) {
        next(err)
    } 
})

module.exports = router