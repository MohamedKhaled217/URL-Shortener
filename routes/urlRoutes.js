const express = require('express')
const router = express.Router()
const urlController = require('../controllers/urlController')

router.get('/', urlController.getHome)

router.post('/', urlController.addNewUrl)

router.get('/:alias', urlController.shorturlHandling)

router.delete('/delete/:id', urlController.deleteUrl)

module.exports = router