const conexao = require("../database/connection");


class AluguelController {
    index(req, res) {
        const sql = "SELECT * FROM carros;";
        conexao.query(sql, (error, result) => {
            if (error) {
                res.status(404).json(error)
            }
            else{
                res.status(200).json(result)
            }
        })
    }
    show(req, res) {
        const sql = "SELECT * FROM carros WHERE status=disponivel;"
        conexao.query(sql, (error, result) => {
            if (error) {
                res.status(404).json(error)
            }
            else{
                res.status(200).json({"Carros disponiveis": result})
            }
        })
    }
    
    alugar(req, res) {

    }
}



module.exports =  new AluguelController