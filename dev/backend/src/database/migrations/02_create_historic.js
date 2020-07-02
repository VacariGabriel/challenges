async function up(knex) {
  return knex.schema.createTable('historic', (table) => {
    table.increments('id').primary();
    table.integer('id_hero').notNullable().references('id').inTable('hero');
    table.integer('id_threat').notNullable().references('id').inTable('threat');
  });
}

async function down(knex) {
  return knex.schema.dropTable('historic');
}

module.exports = {
  up,
  down,
};
