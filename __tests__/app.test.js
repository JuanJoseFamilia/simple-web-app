const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('should return Hello World', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello World!');
    expect(response.status).toBe(200);
  });
});
