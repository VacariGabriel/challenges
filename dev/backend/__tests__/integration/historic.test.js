const request = require('supertest');
const app = require('../../src/server');
const { generateToken } = require('../../src/utils/token');

const LOGIN = 'flashzin';

describe('Tests for historic', () => {
  it("shouldn't access authorized routes without token", async () => {
    const response = await request(app).get('/authorized/historic');

    expect(response.status).toBe(401);
  });

  it('should get historic', async () => {
    const response = await request(app)
      .get('/authorized/historic')
      .set('Authorization', `Bearer ${generateToken(LOGIN)}`);

    expect(response.status).toBe(200);
    expect(response.body[0]).toHaveProperty('hero_name');
  });
});
