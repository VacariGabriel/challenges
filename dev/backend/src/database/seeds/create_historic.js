async function seed(knex) {
  await knex('historic').insert([
    {
      hero_name: 'Genos',
      hero_rank: 'S',
      threat_name: 'Very Strong Threat',
      threat_rank: 'God',
    },
    {
      hero_name: 'Máscara Doce',
      hero_rank: 'A',
      threat_name: 'Medium Threat',
      threat_rank: 'Dragon',
    },
    {
      hero_name: 'Mumen Rider',
      hero_rank: 'B',
      threat_name: 'Weak Threat',
      threat_rank: 'Tiger',
    },
    {
      hero_name: 'Saitma',
      hero_rank: 'C',
      threat_name: 'Very Weak Threat',
      threat_rank: 'Wolf',
    },
  ]);
}

module.exports = {
  seed,
};
