const request = require('supertest');
const app = require('../../src/server');

describe('Authentication', () => {
  it('should authenticate with valid credentials', async () => {
    const heroi = {
      login: 'flashzin',
      senha: '123',
    };

    const response = await request(app).post('/login').send({
      login: heroi.login,
      password: heroi.senha,
    });

    expect(response.status).toBe(200);
  });

  it("shouldn't authenticate with invalid credentials", async () => {
    const heroi = {
      login: 'flashzin',
      senha: 'wrong',
    };

    const response = await request(app).post('/login').send({
      login: heroi.login,
      password: heroi.senha,
    });

    expect(response.status).toBe(400);
  });
});
