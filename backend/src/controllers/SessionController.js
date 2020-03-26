const connection = require('../database/connection');

module.exports = {
     async create(req, resp){
          const {id} = req.body;
          const ong = await connection('ongs').where('id', id).select('nome').first();
          if(!ong){
               return resp.status(400).json({erro:"Não foi encontrado esse id"});
          }
          return resp.json(ong);
     }
}