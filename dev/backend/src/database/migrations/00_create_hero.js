async function up(knex) {
  return knex.schema.createTable('hero', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('login').notNullable();
    table.string('password').notNullable();
    table.decimal('lat').notNullable();
    table.decimal('lng').notNullable();
    table.string('rank').notNullable();
  });
}

async function down(knex) {
  return knex.schema.dropTable('hero');
}

module.exports = {
  up,
  down,
};
