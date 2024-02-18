const express = require('express')
const router = express.Router()
const {registerUser} = require('../controller/userController')
const {loginUser} = require('../controller/userController')
const {getAllUsers} = require('../controller/userController')
const protect = require('../middleware/authMiddleware')

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/').get(protect, getAllUsers)



module.exports = router
