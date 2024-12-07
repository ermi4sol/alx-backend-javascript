const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello ALX!');
});

app.get('/students', (req, res) => {
  const databasePath = process.argv[2];
  
  res.write('This is the list of our students\n');
  
  countStudents(databasePath)
    .then(() => {
      res.end();
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
});

app.listen(port);

module.exports = app;