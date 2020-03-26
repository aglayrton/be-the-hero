const connection = require('../database/connection');

module.exports = {
     async index(req, resp){
          const {page = 1} = req.query;

          const[count] = await connection('incidents').count();
          
          const incidents = await connection('incidents')
          .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
          .limit(5)
          .offset((page-1)*5)
          .select([
               'incidents.*',
               'ongs.nome',
               'ongs.email',
               'ongs.whatsapp',
               'ongs.city',
               'ongs.uf'
          ]);

          resp.header('Total-Count', count['count(*)']);

          return resp.json(incidents);
     },
     async create(req, resp){
          const {tilte, description, value} = req.body;
          const ong_id = req.headers.authorization;
          //abaixo é a mesma coisa 
          const [id] = await connection('incidents').insert({
               tilte,
               description,
               value,
               ong_id
          });
          return resp.json({id});
     },
     async delete(req, resp){
          const{id} = req.params;
          const ong_id = req.headers.authorization;
          //puxa pelo o id do parametro com id que esta na tabela
          const incidents = await connection('incidents').where('id', id).select('ong_id').first();
          //compara os ong_id do banco com o que vem da requisição
          if(incidents.ong_id != ong_id){
               return resp.status(401).json({erro:'Operation no permited'});
          }
          //deleta os dados do registro do determinado id
          await connection('incidents').where('id', id).delete();
          return resp.status(201).send();
     }
}