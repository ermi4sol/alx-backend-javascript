const request = require('supertest');
const app = require('./index');
const { expect } = require('chai');

describe('Deep integration tests for API endpoints', () => {
  describe('GET /', () => {
    it('should return 200 and welcome message', async () => {
      const res = await request(app).get('/');
      expect(res.status).to.equal(200);
      expect(res.text).to.equal('Welcome to the payment system');
    });
  });

  describe('GET /cart/:id', () => {
    it('should return 200 and payment methods for a valid cart ID', async () => {
      const res = await request(app).get('/cart/456');
      expect(res.status).to.equal(200);
      expect(res.text).to.equal('Payment methods for cart 456');
    });

    it('should return 404 for an invalid cart ID', async () => {
      const res = await request(app).get('/cart/not-a-number');
      expect(res.status).to.equal(404);
      expect(res.text).to.equal('Invalid cart ID');
    });
  });

  describe('POST /login', () => {
    it('should return 200 and a welcome message for valid userName', async () => {
      const res = await request(app).post('/login').send({ userName: 'JohnDoe' });
      expect(res.status).to.equal(200);
      expect(res.text).to.equal('Welcome JohnDoe');
    });

    it('should return 400 for missing userName in request body', async () => {
      const res = await request(app).post('/login').send({});
      expect(res.status).to.equal(400);
      expect(res.text).to.equal('Missing userName');
    });
  });

  describe('GET /available_payments', () => {
    it('should return 200 and available payment methods', async () => {
      const res = await request(app).get('/available_payments');
      expect(res.status).to.equal(200);
      expect(res.body).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
    });
  });
});
