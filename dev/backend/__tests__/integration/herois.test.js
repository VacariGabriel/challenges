const request = require('supertest');
const app = require('../../src/server');

describe('CRUD herois', () => {
  it("should create new 'heroi' - 201", async () => {
    const heroi = {
      nome: 'Flash-test',
      login: 'flash-test',
      senha: '123123',
      lat: -23.5629,
      lng: -46.6544,
      rank: 'S',
    };

    const response = await request(app).post('/herois').send({
      nome: heroi.nome,
      login: heroi.login,
      senha: heroi.senha,
      lat: heroi.lat,
      lng: heroi.lng,
      rank: heroi.rank,
    });

    expect(response.status).toBe(201);
  });

  it("shouldn't create 'heroi' without a property - 400", async () => {
    const heroi = {
      nome: 'Flash-test',
      login: 'flash-test',
      senha: '123123',
      rank: 'S',
    };

    const response = await request(app).post('/herois').send({
      nome: heroi.nome,
      login: heroi.login,
      senha: heroi.senha,
      rank: heroi.rank,
    });

    expect(response.status).toBe(400);
  });

  it("should get all 'herois' - 200", async () => {
    const response = await request(app).get('/herois');

    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('nome');
  });

  it("shouldn't delete 'heroi' by id - 204", async () => {
    const id = 100;

    const response = await request(app).delete('/herois').send({
      id,
    });

    expect(response.status).toBe(204);
  });

  it("should update 'heroi' - 200", async () => {
    const newHeroi = { id: 1, nome: 'Flash - Atualizado', rank: 'B' };

    const response = await request(app).put('/herois').send({
      id: newHeroi.id,
      nome: newHeroi.nome,
      rank: newHeroi.rank,
    });

    expect(response.status).toBe(200);
  });

  it("shouldn't update 'heroi' - 200", async () => {
    const newHeroi = { id: 1000, nome: 'Flash - Atualizado', rank: 'B' };

    const response = await request(app).put('/herois').send({
      id: newHeroi.id,
      nome: newHeroi.nome,
      rank: newHeroi.rank,
    });

    expect(response.status).toBe(204);
  });
});
