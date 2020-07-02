async function up(knex) {
  return knex.schema.createTable('threat', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.decimal('lat').notNullable();
    table.decimal('lng').notNullable();
    table.string('rank').notNullable();
  });
}

async function down(knex) {
  return knex.schema.dropTable('threat');
}

module.exports = {
  up,
  down,
};
