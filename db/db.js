const Sequelize = require('sequelize');

const EC2_IP = 'localhost'
const DB_URI = `postgres://${EC2_IP}:5432/reservations`;
const sequelize = new Sequelize(DB_URI);

sequelize
  .authenticate()
  .then(() => {
    console.log('db connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

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

// const Availability = sequelize.define('availability',
//   {
//     id: {
//       type: Sequelize.INTEGER,
//       primaryKey: true
//     },
//     rest_id: {
//       type: Sequelize.INTEGER,
//     },
//     time: {
//       type: Sequelize.STRING,
//     },
//     seats: {
//       type: Sequelize.INTEGER,
//     }
//   },
//   {
//     timestamps: false,
//   });

module.exports = {
  // Availability,
  Restaurant,
};
