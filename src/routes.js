import { Router } from "express";
import { createTable, insertPonto, updatePonto, selectPonto, selectPontos, deletePonto } from './Controller/ponto.js';

const router = Router();

router.get('/', (req,res)=>{
    res.json({
        "statusCode": 200,
        "msg": "Api Rodando"
    })
})

router.get('/ponto', selectPonto);
router.get('/pontos', selectPontos);
router.post('/ponto', insertPonto);
router.put('/ponto', updatePonto);
router.delete('/ponto', deletePonto);

export default router;