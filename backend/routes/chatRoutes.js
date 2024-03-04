const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')
const {accessChat, fetchChats , createGroupChat} = require('../controller/chatController')
// const fetchChats = require('../controller/chatController')
// const createGroupChat = require('../controller/chatController')

router.route('/').post(protect, accessChat)
router.route('/').get(protect, fetchChats)
router.route('/group').post(protect, createGroupChat)

module.exports = router