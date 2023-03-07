import { openDb } from "../configDB.js";

export async function createTable(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS ponto (id INTEGER PRIMARY KEY, nome_funcionario TEXT, hora_entrada TIME DEFAULT NULL, hora_saida TIME DEFAULT NULL, data DATE NOT NULL)')
    })
}

export async function selectPonto(req,res){
    openDb().then(db=>{
        db.all('SELECT * FROM ponto')
       .then(ponto=> res.json(ponto))
   });
}

export async function selectPontos(req,res){
   let id = req.body.id
    openDb().then(db=>{
        db.get('SELECT * FROM ponto WHERE id=?', [id])
       .then(pontos=> res.json(pontos))
   });
}
//está invertido, pontos pega 1 só e ponto pega todos

export async function insertPonto(req, res){
    let ponto = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO ponto (nome_funcionario, hora_entrada, hora_saida, data) VALUES (?,?,?,?)', [ponto.nome_funcionario, ponto.hora_entrada, ponto.hora_saida, ponto.data]);
    });
    res.json({
        "statusCode":200
    })
}

export async function updatePonto(req, res){
    let ponto = req.body;
    openDb().then(db=>{
        db.run('UPDATE ponto SET nome_funcionario=?, hora_entrada=?, hora_saida=?, data=? WHERE id=?', [ponto.nome_funcionario, ponto.hora_entrada, ponto.hora_saida, ponto.data, ponto.id]);
    })
    res.json({
        "statusCode":200
    })
}

export async function deletePonto(req, res){
    let id = req.body.id;
     openDb().then(db=>{
         db.get('DELETE FROM ponto WHERE id=?', [id])
        .then(res=>res)
    });
    res.json({
        "statusCode":200
    })
}