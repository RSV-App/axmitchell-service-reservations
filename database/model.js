const Sequelize = require('sequelize')
const sequelize = require('./db.js');

const Restaurant = sequelize.define('restaurant', 
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    booked: {
      type: Sequelize.INTEGER,
    },
    "6:00 PM": {
      type: Sequelize.INTEGER,
    },
    "6:15 PM": {
      type: Sequelize.INTEGER,
    },
    "6:30 PM": {
      type: Sequelize.INTEGER,
    },
    "6:45 PM": {
      type: Sequelize.INTEGER,
    },
    "7:00 PM": {
      type: Sequelize.INTEGER,
    },
    "7:15 PM": {
      type: Sequelize.INTEGER,
    },
    "7:30 PM": {
      type: Sequelize.INTEGER,
    },
    "7:45 PM": {
      type: Sequelize.INTEGER,
    },
    "8:00 PM": {
      type: Sequelize.INTEGER,
    },
    "8:15 PM": {
      type: Sequelize.INTEGER,
    },
    "8:30 PM": {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  });

module.exports = {
  Restaurant,
};
