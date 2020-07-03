const request = require('supertest');
const app = require('../../src/server');

const HERO = {
  login: 'sait',
  password: '123',
};

describe('Authentication', () => {
  it('should authenticate with valid credentials', async () => {
    const response = await request(app).post('/login').send({
      login: HERO.login,
      password: HERO.password,
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it("shouldn't authenticate with invalid credentials", async () => {
    const response = await request(app).post('/login').send({
      login: HERO.login,
      password: 'wrongPassword',
    });

    expect(response.status).toBe(401);
  });

  it("shouldn't login without login or password property", async () => {
    const response = await request(app).post('/login').send({
      password: HERO.password,
    });
    expect(response.status).toBe(400);
  });
});
