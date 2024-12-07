const express = require('express');

const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;

  if (isNaN(Number(id))) {
    return res.status(404).send('Invalid cart ID');
  }

  res.status(200).send(`Payment methods for cart ${id}`);
});

app.post('/login', (req, res) => {
  const { userName } = req.body;

  if (!userName) {
    return res.status(400).send('Missing userName');
  }

  res.status(200).send(`Welcome ${userName}`);
});

app.get('/available_payments', (req, res) => {
  const availablePayments = {
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  };

  res.status(200).json(availablePayments);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});

module.exports = app;
