const conexao = require("../database/connection")
const bcrypt = require('bcrypt')

const CreateHash = (password) => {
    const saltRounds = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, saltRounds)
    return hash 
}


class UserController {
    store(req, res) {
        const data = {
            login: req.body.login,
            password: CreateHash(req.body.password)
        }
        const sql = "INSERT INTO usuarios SET ?;";
        conexao.query(sql, data, (error, result) => {
            if (error) {
                res.status(404).json(error)
            }
            else{
                res.status(200).json(result)
            }
        })
    }
    async login(req, res) {
        try{
            const {login, password} = req.body;
            const sql = "SELECT * FROM usuarios WHERE login=?;";
                conexao.query(sql, login, async (error, result) => {
                    if(error){
                        res.status(404).json({'error': `${error}`})
                    }
                    if(result.length > 0){
                        const hashFromDb = result[0].password;
    
                        const passwordMatch = await bcrypt.compare(password, hashFromDb)
                        if(passwordMatch){
                            res.status(200).json({"Status" : "Login bem-sucedido"})
                        }else{
                            res.status(401).json({"Status" : "Senha incorreta"})
                        }
    
                    }else{
                        res.status(200).json({"Status" : "Usuário não encontrado"})
                    }
                })
            }
        catch(error){
            res.status(500).json({"Erro": "Erro interno no servidor"})
            }
        }

}

module.exports = new UserController;