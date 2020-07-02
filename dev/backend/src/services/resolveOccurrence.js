const priority = require('./priority.json');
const haversineCalc = require('../utils/haversine');
const knex = require('../database/connection');

async function getHerois(rank) {
  const herois = await knex('hero')
    .where({ rank })
    .select('id', 'name', 'lat', 'lng', 'rank');
  return herois;
}

async function saveThreat(threat) {
  const id = await knex('threat').insert({
    name: threat.monsterName,
    lat: threat.location[0].lat,
    lng: threat.location[0].lng,
    rank: threat.dangerLevel,
  });

  return id;
}

async function saveHistoric(threatId, heroId) {
  const id = await knex('historic').insert({
    id_hero: heroId,
    id_threat: threatId,
  });

  return id;
}

async function saveHeroHistoric(historicId, heroId) {
  const id = knex('hero_historic').insert({
    id_historic: historicId,
    id_hero: heroId,
  });

  return id;
}

async function heroForOccurrence(data) {
  const [heroThreat] = priority.priorities.filter((threat) => {
    if (threat.dangerLevel === data.dangerLevel) {
      return threat;
    }
  });

  const heroes = await getHerois(heroThreat.rank);

  const heroDefeatThreat = heroes
    .map((hero) => {
      return {
        ...hero,
        distance: haversineCalc(
          data.location[0].lat,
          data.location[0].lng,
          hero.lat,
          hero.lng
        ),
      };
    })
    .reduce((final, current) => {
      return current.distance < final.distance ? current : final;
    });

  delete heroDefeatThreat.distance;

  const idAmeaca = await saveThreat(data);
  const idHistorico = await saveHistoric(idAmeaca, heroDefeatThreat.id);
  await saveHeroHistoric(idHistorico, heroDefeatThreat.id);
}

module.exports = heroForOccurrence;
