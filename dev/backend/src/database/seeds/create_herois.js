async function seed(knex) {
  await knex('herois').insert([
    { nome: 'Flash', lat: -23.5629, lng: -46.6544, rank: 'S' },
    { nome: 'Batman', lat: -29.695807, lng: -51.235771, rank: 'A' },
  ]);
}

module.exports = {
  seed,
};
