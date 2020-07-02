async function up(knex) {
  return knex.schema.createTable('historic', (table) => {
    table.increments('id').primary();
    table.string('hero_name').notNullable();
    table.string('hero_rank').notNullable();
    table.string('threat_name').notNullable();
    table.string('threat_rank').notNullable();
  });
}

async function down(knex) {
  return knex.schema.dropTable('historic');
}

module.exports = {
  up,
  down,
};
