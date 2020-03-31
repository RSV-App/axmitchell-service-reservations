const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const Availability = require('../db/db.js');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/:id', (req, res) => {
  if (!req.params.id) {
    res.status(400);
    res.end();
  } else {
    res.sendFile('index.html', { root: path.resolve(__dirname, '../public') });
  }
});

app.get('/:id/reservations', (req, res) => {
  const resID = Number(req.params.id);

  Availability.findOne({ where: { id: resID } })
    .then((main) => {
      res.status(200).send(main);
    })
    .catch((err) => {
      res.status(404).send('unable to retrieve from db: ', err);
    });
});

module.exports = app;
