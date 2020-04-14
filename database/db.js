const Sequelize = require('sequelize');

const EC2_IP = '';
const dbName = '';
const dbUser = ''
const dbUserPassword = '';

const sequelize = new Sequelize(dbName, dbUser, dbUserPassword, {
  host: `ec2-${EC2_IP}.us-west-2.compute.amazonaws.com`,
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