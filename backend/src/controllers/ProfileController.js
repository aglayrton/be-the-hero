const connection = require('../database/connection');

module.exports = {
     async index(req, resp){
          const ong_id = req.headers.authorization;
          const incidents = await connection('incidents').where('ong_id', ong_id).select('*');
          //retorna todos os dados baseado no id da autorização
          return resp.json(incidents);
     }
}