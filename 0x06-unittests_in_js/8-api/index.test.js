const request = require('supertest');
const app = require('./index');
const { expect } = require('chai');

describe('Integration tests for API', () => {
  it('should return 200 status and correct message for GET /', async () => {
    const res = await request(app).get('/');
    expect(res.status).to.equal(200);
    expect(res.text).to.equal('Welcome to the payment system');
  });
});
