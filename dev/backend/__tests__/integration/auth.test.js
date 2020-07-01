const request = require('supertest');
const server = require('../../src/server');

describe('Authentication', () => {
  it('should authenticate with valid credentials', async () => {
    const heroi = {
      login: 'flashzin',
      senha: 'example123',
    };

    const response = await request(server).post('/login').send({
      login: heroi.login,
      senha: heroi.senha,
    });

    expect(response.status).toBe(200);
  });
});
