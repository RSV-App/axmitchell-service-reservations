require('newrelic')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const db = require('../database/model.js');
const PUBLIC_DIR = path.join(__dirname, '..', '/public');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use('/:id', express.static(PUBLIC_DIR));

app.get('/:id/reservations', (req, res) => {
  const resID = Number(req.params.id);
  db.Restaurant.findOne({ where: { id: resID } })
    .then((data) => {res.status(200).send(data)})
    .catch((err) => {
      res.status(500).send('unable to retrieve from db: ', err)
    })
});

module.exports = app;

