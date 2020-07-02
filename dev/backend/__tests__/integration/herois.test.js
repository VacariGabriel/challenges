const request = require('supertest');
const app = require('../../src/server');
const generateToken = require('../../src/utils/token');

const HERO = {
  name: 'Flash-test',
  login: 'flash-test',
  password: '123123',
  lat: -23.5629,
  lng: -46.6544,
  rank: 'S',
};

const HERO_UPDATE = { id: 1, name: 'Flash - Atualizado', rank: 'B' };

describe('Tests for heroes', () => {
  it("shouldn't access authorized routes without token", async () => {
    const response = await request(app).get('/authorized/herois');

    expect(response.status).toBe(401);
  });

  it('should create new hero - 201', async () => {
    const response = await request(app)
      .post('/authorized/herois')
      .set('Authorization', `Bearer ${generateToken(HERO.login)}`)
      .send({
        name: HERO.name,
        login: HERO.login,
        password: HERO.password,
        lat: HERO.lat,
        lng: HERO.lng,
        rank: HERO.rank,
      });

    expect(response.status).toBe(201);
  });

  it("shouldn't create hero without a property - 400", async () => {
    const response = await request(app)
      .post('/authorized/herois')
      .set('Authorization', `Bearer ${generateToken(HERO.login)}`)
      .send({
        name: HERO.name,
        login: HERO.login,
        password: HERO.password,
        rank: HERO.rank,
      });

    expect(response.status).toBe(400);
  });

  it('should get all heroes - 200', async () => {
    const response = await request(app)
      .get('/authorized/herois')
      .set('Authorization', `Bearer ${generateToken(HERO.login)}`);

    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('name');
  });

  it("shouldn't delete hero by id - 204", async () => {
    const id = 100;

    const response = await request(app)
      .delete('/authorized/herois')
      .set('Authorization', `Bearer ${generateToken(HERO.login)}`)
      .send({
        id,
      });

    expect(response.status).toBe(204);
  });

  it('should update hero - 200', async () => {
    const response = await request(app)
      .put('/authorized/herois')
      .set('Authorization', `Bearer ${generateToken(HERO.login)}`)
      .send({
        id: HERO_UPDATE.id,
        name: HERO_UPDATE.name,
        rank: HERO_UPDATE.rank,
      });

    expect(response.status).toBe(200);
  });

  it("shouldn't update 'heroi' - 200", async () => {
    const response = await request(app)
      .put('/authorized/herois')
      .set('Authorization', `Bearer ${generateToken(HERO.login)}`)
      .send({
        id: 10000,
        nome: HERO_UPDATE.nome,
        rank: HERO_UPDATE.rank,
      });

    expect(response.status).toBe(204);
  });
});
