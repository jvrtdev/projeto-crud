const express = require('express')
const UserController = require('../controllers/UserController')
const AluguelController = require('../controllers/AluguelController')
const userRoutes = express.Router()


userRoutes.post('/user/cadastro', UserController.store)
userRoutes.post('/user/login', UserController.login)
userRoutes.get('/carros', AluguelController.index)
userRoutes.get('/carros/disponiveis', AluguelController.show)

module.exports = userRoutes