async function up(knex) {
  return knex.schema.createTable('ameaca', (table) => {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.decimal('lat').notNullable();
    table.decimal('lng').notNullable();
    table.string('rank').notNullable();
  });
}

async function down(knex) {
  return knex.schema.dropTable('ameaca');
}

module.exports = {
  up,
  down,
};