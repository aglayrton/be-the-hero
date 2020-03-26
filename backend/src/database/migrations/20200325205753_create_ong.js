
//é o metodo que cria a tabela
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table){
     table.string('id').primary();
     table.string('nome').notNullable();         
     table.string('email').notNullable();   
     table.string('whatsapp').notNullable();   
     table.string('city').notNullable();   
     table.string('uf', 2).notNullable();   
  });
};
//caso algo dê errado
exports.down = function(knex) {
  knex.schema.dropTable('ongs');
};
