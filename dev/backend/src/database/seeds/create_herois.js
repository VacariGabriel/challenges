async function seed(knex) {
  await knex('herois').insert([
    {
      nome: 'Flash',
      login: 'flashzin',
      senha: '$2a$10$jnI0D6uZB4ER0PYpQ8tK7ONDA/7bMWY2.AMjqlGxYm3JnytbeJRV6',
      lat: -23.5629,
      lng: -46.6544,
      rank: 'S',
    },
    {
      nome: 'Batman',
      login: 'bat',
      senha: '$2a$10$jnI0D6uZB4ER0PYpQ8tK7ONDA/7bMWY2.AMjqlGxYm3JnytbeJRV6',
      lat: -29.695807,
      lng: -51.235771,
      rank: 'A',
    },
  ]);
}

module.exports = {
  seed,
};
