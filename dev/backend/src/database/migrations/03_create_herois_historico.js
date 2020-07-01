async function up(knex) {
  return knex.schema.createTable('historico_herois', (table) => {
    table.increments('id').primary();
    table
      .integer('id_historico')
      .notNullable()
      .references('id')
      .inTable('historico');
    table.integer('id_heroi').notNullable().references('id').inTable('herois');
  });
}

async function down(knex) {
  return knex.schema.dropTable('historico_herois');
}

module.exports = {
  up,
  down,
};
