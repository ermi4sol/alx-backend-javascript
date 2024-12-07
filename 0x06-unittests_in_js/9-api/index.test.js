const request = require('supertest');
const app = require('./index');
const { expect } = require('chai');

describe('Integration tests for advanced API endpoints', () => {
  describe('GET /', () => {
    it('should return 200 and welcome message', async () => {
      const res = await request(app).get('/');
      expect(res.status).to.equal(200);
      expect(res.text).to.equal('Welcome to the payment system');
    });
  });

  describe('GET /cart/:id', () => {
    it('should return 200 and payment methods for a valid cart ID', async () => {
      const res = await request(app).get('/cart/123');
      expect(res.status).to.equal(200);
      expect(res.text).to.equal('Payment methods for cart 123');
    });

    it('should return 404 for an invalid cart ID', async () => {
      const res = await request(app).get('/cart/abc');
      expect(res.status).to.equal(404);
      expect(res.text).to.equal('Invalid cart ID');
    });
  });
});
