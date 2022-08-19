const router = require('express').Router()
const albumRoutes = require('./album.js')

// connect your API routes here!
router.use('/albums',albumRoutes)

module.exports = router
