const mysql = require('mysql2')
require('dotenv').config()


const conexao = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

conexao.connect((error) => {
    if(error) {
        console.log('Erro ao conectar banco de dados', error)
        return
    }
    console.log("Conexão MySQL realizada com sucesso!")
})

module.exports = conexao