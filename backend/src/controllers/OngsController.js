const crypto = require('crypto');
const connection = require('../database/connection');

//Exportando os metodos assicronos
module.exports ={ 
     async index(req, resp){
          const ong = await connection('ongs').select('*');
          resp.json(ong);
     },

     async create(req, resp){
          const id = crypto.randomBytes(4).toString('HEX');
          const {nome, email, whatsapp, city, uf} = req.body;
          await connection('ongs').insert({
               id,
               nome, 
               email, 
               whatsapp, 
               city, 
               uf
          })

          resp.json({id})
     }
}