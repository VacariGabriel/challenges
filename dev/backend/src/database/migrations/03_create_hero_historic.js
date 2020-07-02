async function up(knex) {
  return knex.schema.createTable('hero_historic', (table) => {
    table.increments('id').primary();
    table
      .integer('id_historic')
      .notNullable()
      .references('id')
      .inTable('historic');
    table.integer('id_hero').notNullable().references('id').inTable('hero');
  });
}

async function down(knex) {
  return knex.schema.dropTable('hero_historic');
}

module.exports = {
  up,
  down,
};
