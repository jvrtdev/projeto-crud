const conexao = require("../database/connection");



class UserMasterController {
    index(req, res) {
        const sql = "SELECT * FROM usuarios;"
        conexao.query(sql, (error, result) => {
            if(error) {
                res.status(404).json(error)
            }
            else{
                res.status(200).json(result)
            }
        })
    }
    delete(req, res) {
        const login = req.body
        const sql = "DELETE FROM usuarios WHERE login=?;"
        conexao.query(sql, login, (error, result) => {
            if (error){
                res.status(404).json({'error': error})
            }
            else{
                res.status(200).json(result)
            }
        })
    }

}


module.exports = new UserMasterController;