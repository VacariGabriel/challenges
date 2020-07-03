async function seed(knex) {
  await knex('historic').insert([
    {
      hero_name: 'Flash',
      hero_rank: 'S',
      threat_name: 'Very Strong Threat',
      threat_rank: 'God',
    },
    {
      hero_name: 'Pantera Negra',
      hero_rank: 'A',
      threat_name: 'Medium Threat',
      threat_rank: 'God',
    },
    {
      hero_name: 'Superman',
      hero_rank: 'B',
      threat_name: 'Weak Threat',
      threat_rank: 'God',
    },
    {
      hero_name: 'Batman',
      hero_rank: 'C',
      threat_name: 'Very Weak Threat',
      threat_rank: 'God',
    },
  ]);
}

module.exports = {
  seed,
};
