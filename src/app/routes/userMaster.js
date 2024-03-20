const express = require('express')
const UserMasterController = require('../controllers/UserMasterController')
const userMasterRoutes = express.Router()

userMasterRoutes.get('/users', UserMasterController.index)
userMasterRoutes.delete('/user', UserMasterController.delete)



module.exports = userMasterRoutes