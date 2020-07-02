async function seed(knex) {
  await knex('hero').insert([
    {
      name: 'Flash',
      login: 'flashzin',
      password: '$2a$10$jnI0D6uZB4ER0PYpQ8tK7ONDA/7bMWY2.AMjqlGxYm3JnytbeJRV6',
      lat: -23.5629,
      lng: -46.6544,
      rank: 'S',
    },
    {
      name: 'Batman',
      login: 'bat',
      password: '$2a$10$jnI0D6uZB4ER0PYpQ8tK7ONDA/7bMWY2.AMjqlGxYm3JnytbeJRV6',
      lat: -29.695807,
      lng: -51.235771,
      rank: 'A',
    },
    {
      name: 'Batman',
      login: 'bat',
      password: '$2a$10$jnI0D6uZB4ER0PYpQ8tK7ONDA/7bMWY2.AMjqlGxYm3JnytbeJRV6',
      lat: -29.695807,
      lng: -51.235771,
      rank: 'B',
    },
    {
      name: 'Batman',
      login: 'bat',
      password: '$2a$10$jnI0D6uZB4ER0PYpQ8tK7ONDA/7bMWY2.AMjqlGxYm3JnytbeJRV6',
      lat: 53.6062532721887,
      lng: -2.121395227451485,
      rank: 'C',
    },
  ]);
}

module.exports = {
  seed,
};
