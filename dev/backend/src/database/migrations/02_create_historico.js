async function up(knex) {
  return knex.schema.createTable('historico', (table) => {
    table.increments('id').primary();
    table.integer('id_heroi').notNullable().references('id').inTable('herois');
    table.integer('id_ameaca').notNullable().references('id').inTable('ameaca');
  });
}

async function down(knex) {
  return knex.schema.dropTable('historico');
}

module.exports = {
  up,
  down,
};
