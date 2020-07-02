const request = require('supertest');
const app = require('../../src/server');
const knex = require('../../src/database/dbConfig');

describe('Authentication', () => {
  beforeAll(async () => {
    await knex.migrate.latest();
  });

  it('should authenticate with valid credentials', async () => {
    const heroi = {
      login: 'bat',
      senha: '123',
    };

    const response = await request(app).post('/login').send({
      login: heroi.login,
      password: heroi.senha,
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it("shouldn't authenticate with invalid credentials", async () => {
    const heroi = {
      login: 'bat',
      senha: 'wrong',
    };

    const response = await request(app).post('/login').send({
      login: heroi.login,
      password: heroi.senha,
    });

    expect(response.status).toBe(401);
  });
});
