const express = require('express');
const cors = require('cors');
const userRoutes = require('./app/routes/users');
const userMasterRoutes = require('./app/routes/userMaster');

const app = express()



app.use(express.json())
app.use(cors())

//rotas
app.use('/api', userRoutes)
app.use('/api/master', userMasterRoutes)

module.exports = app