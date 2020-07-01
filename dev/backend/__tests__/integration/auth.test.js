const request = require('supertest');
const app = require('../../src/server');

describe('Authentication', () => {
  it('should authenticate with valid credentials', async () => {
    const heroi = {
      login: 'flashzin',
      senha: 'example123',
    };

    const response = await request(app).post('/login').send({
      login: heroi.login,
      senha: heroi.senha,
    });

    expect(response.status).toBe(200);
  });
});
