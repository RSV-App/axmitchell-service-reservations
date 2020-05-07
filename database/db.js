const Sequelize = require('sequelize');

const EC2_Address = '';
const dbName = '';
const dbUser = ''
const dbUserPassword = '';

const sequelize = new Sequelize(dbName, dbUser, dbUserPassword, {
  host: EC2_Address,
  dialect: 'postgres',
  port: 5432,
  maxConcurrentQueries: 1000,
  logging: false,
  pool: {
    max: 2,
    min: 0,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('db connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;