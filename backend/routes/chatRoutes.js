const express = require('express')
const router = express.Router()
const protect = require('../middleware/authMiddleware')
const {accessChat, fetchChats , createGroupChat, renameGroupChat, removeFromGroup, addToGroup} = require('../controller/chatController')
// const fetchChats = require('../controller/chatController')
// const createGroupChat = require('../controller/chatController')

router.route('/').post(protect, accessChat)
router.route('/').get(protect, fetchChats)
router.route('/group').post(protect, createGroupChat)
router.route('/rename').put(protect, renameGroupChat)
router.route('/add').put(protect, addToGroup)
router.route('/remove').put(protect ,removeFromGroup)
module.exports = router