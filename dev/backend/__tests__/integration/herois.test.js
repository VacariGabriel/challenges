const request = require('supertest');
const app = require('../../src/server');
const { generateToken } = require('../../src/controller/authController');
const knex = require('../../src/database/dbConfig');

const HEROI = {
  nome: 'Flash-test',
  login: 'flash-test',
  senha: '123123',
  lat: -23.5629,
  lng: -46.6544,
  rank: 'S',
};

const HEROI_UPDATE = { id: 1, nome: 'Flash - Atualizado', rank: 'B' };

describe('CRUD herois', () => {
  beforeAll(async () => {
    await knex.migrate.latest();
  });

  it("should create new 'heroi' - 201", async () => {
    const response = await request(app)
      .post('/authorized/herois')
      .set('Authorization', `Bearer ${generateToken(HEROI.login)}`)
      .send({
        nome: HEROI.nome,
        login: HEROI.login,
        senha: HEROI.senha,
        lat: HEROI.lat,
        lng: HEROI.lng,
        rank: HEROI.rank,
      });

    expect(response.status).toBe(201);
  });

  it("shouldn't create 'heroi' without a property - 400", async () => {
    const response = await request(app)
      .post('/authorized/herois')
      .set('Authorization', `Bearer ${generateToken(HEROI.login)}`)
      .send({
        nome: HEROI.nome,
        login: HEROI.login,
        senha: HEROI.senha,
        rank: HEROI.rank,
      });

    expect(response.status).toBe(400);
  });

  it("should get all 'herois' - 200", async () => {
    const response = await request(app)
      .get('/authorized/herois')
      .set('Authorization', `Bearer ${generateToken(HEROI.login)}`);

    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('nome');
  });

  it("shouldn't delete 'heroi' by id - 204", async () => {
    const id = 100;

    const response = await request(app)
      .delete('/authorized/herois')
      .set('Authorization', `Bearer ${generateToken(HEROI.login)}`)
      .send({
        id,
      });

    expect(response.status).toBe(204);
  });

  it("should update 'heroi' - 200", async () => {
    const response = await request(app)
      .put('/authorized/herois')
      .set('Authorization', `Bearer ${generateToken(HEROI.login)}`)
      .send({
        id: HEROI_UPDATE.id,
        nome: HEROI_UPDATE.nome,
        rank: HEROI_UPDATE.rank,
      });

    expect(response.status).toBe(200);
  });

  it("shouldn't update 'heroi' - 200", async () => {
    const response = await request(app)
      .put('/authorized/herois')
      .set('Authorization', `Bearer ${generateToken(HEROI.login)}`)
      .send({
        id: 10000,
        nome: HEROI_UPDATE.nome,
        rank: HEROI_UPDATE.rank,
      });

    expect(response.status).toBe(204);
  });
});
