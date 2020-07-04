const request = require('supertest');
const app = require('../../src/server');
const { generateToken } = require('../../src/utils/token');

const HERO = {
  id: 4,
  name: 'Saitama',
  login: 'sait',
  password: '123123',
  lat: -23.5629,
  lng: -46.6544,
  rank: 'S',
};

const HERO_UPDATE = { id: 1, name: 'Saitama - Update', rank: 'B' };

describe('Tests for heroes', () => {
  it("shouldn't access authorized routes without token", async () => {
    const response = await request(app).get('/authorized/heroes');

    expect(response.status).toBe(401);
  });

  it("shouldn't create hero without a property - 400", async () => {
    const response = await request(app).post('/hero').send({
      name: HERO.name,
      login: HERO.login,
      password: HERO.password,
      rank: HERO.rank,
    });

    expect(response.status).toBe(400);
  });

  it('should get all heroes - 200', async () => {
    const response = await request(app)
      .get('/authorized/heroes')
      .set('Authorization', `Bearer ${generateToken(HERO.login)}`);

    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('name');
  });

  it("shouldn't delete hero by nonexistent id - 204", async () => {
    const id = 100;

    const response = await request(app)
      .delete('/authorized/heroes')
      .set('Authorization', `Bearer ${generateToken(HERO.login)}`)
      .send({
        id,
      });

    expect(response.status).toBe(400);
  });

  it("shouldn't delete if it's not your own id", async () => {
    const anotherId = 18;
    const response = await request(app)
      .delete('/authorized/heroes')
      .set('Authorization', `Bearer ${generateToken(HERO.login)}`)
      .send({
        anotherId,
      });

    expect(response.status).toBe(400);
  });

  it('should update hero - 200', async () => {
    const response = await request(app)
      .put('/authorized/heroes')
      .set('Authorization', `Bearer ${generateToken(HERO.login)}`)
      .send({
        id: HERO.id,
        name: HERO_UPDATE.name,
        rank: HERO_UPDATE.rank,
      });

    expect(response.status).toBe(200);
  });

  it("shouldn't update if it's not your own id - 200", async () => {
    const response = await request(app)
      .put('/authorized/heroes')
      .set('Authorization', `Bearer ${generateToken(HERO.login)}`)
      .send({
        id: 10000,
        name: HERO_UPDATE.name,
        rank: HERO_UPDATE.rank,
      });

    expect(response.status).toBe(400);
  });
});
