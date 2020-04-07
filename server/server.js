const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const db = require('../db/db.js');
const PUBLIC_DIR = path.join(__dirname, '..', '/public');
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/:id', express.static(PUBLIC_DIR));

app.get('/:id/reservations', (req, res) => {
  const resID = Number(req.params.id);
  const restaurantQuery = db.Restaurant.findOne({ where: { id: resID } })
  // const availabilityQuery = db.Availability.findAll({ where: { rest_id: resID }, attributes: ["time", "seats"] })
  // Promise.all([restaurantQuery, availabilityQuery])
  //   .then(([restRes, availRes]) => {
  //     let restaurant = restRes.dataValues
  //     restaurant.times = {}
  //     availRes.forEach(res => {
  //       let { time, seats } = res;
  //       restaurant.times[time] = seats;
  //     })
  //     res.send(restaurant)
  //   })
  //   .catch((err) => (res.status(404).send('unable to retrieve from db: ', err)));
  restaurantQuery 
    .then((data) => {res.status(200).send(data)})
    .catch((err) => {
      res.status(500).send('unable to retrieve from db: ', err)
    })
});

module.exports = app;