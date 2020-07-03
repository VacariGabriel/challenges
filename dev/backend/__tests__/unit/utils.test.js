const generateToken = require('../../src/utils/token');
const haversineCalc = require('../../src/utils/haversine');

const HERO = {
  login: 'sait',
  lat: 53.6062532721887,
  lng: -2.121395227451485,
};

const THREAT = {
  lat: 53.6062532721887,
  lng: -2.121395227451485,
};

describe('Tests for utils', () => {
  it('should generate token with login', () => {
    const token = generateToken(HERO.login);

    expect(token);
  });

  it('should calculate distance between hero and threat', () => {
    const distance = haversineCalc(THREAT.lat, THREAT.lng, HERO.lat, HERO.lng);

    expect(distance);
  });
});
