const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')
const accessChat = require('../controller/chatController')
const fetchChats = require('../controller/chatController')

router.route('/').post(protect, accessChat)
router.route('/').get(protect, fetchChats)

module.exports = router