const fs = require('fs');
const faker = require('faker');

const tablesBookedSoFar = () => faker.random.number({
  min: 3,
  max: 15,
});

const seatsAvailable = () => faker.random.number({
  min: 2,
  max: 10,
});

const createRestaurants = () => {
  const restaurantStream = fs.createWriteStream('10MilRestaurants.csv', { flags: 'a' });
  for (let primaryKey = 0; primaryKey < 10000000; primaryKey++) {
    let restaurant = '';
    restaurant += primaryKey + ',';
    restaurant += "'" + faker.lorem.word() + "'" + ',';
    restaurant += tablesBookedSoFar()
    restaurantStream.write(restaurant);
  }
  restaurantStream.end();
  restaurantStream.on('finish', () => {
    console.log('restaurant stream finished')
  })
  restaurantStream.on('error', () => {
    console.log('error in restaurant stream');
  })
}

const createAvailableTimes = () => {
  const availableTimesStream = fs.createWriteStream('110MilAvailableTimes.csv', {flags: 'a'});
  const times = ['6:00pm','6:15pm','6:30pm','6:45pm','7:00pm','7:15pm','7:30pm','7:45pm','8:00pm','8:15pm','8:30pm'];
  let primaryKey = 0;
  for (let foreignKey = 0; foreignKey < 10000000; foreignKey++) {
    for (var i = 0; i < times.length; i++) {
      availableTime = '';
      availableTime += primaryKey + ',';
      availableTime += foreignKey + ',';
      availableTime += times[i] + ',';
      availableTime += seatsAvailable() + '\n';
      availableTimesStream.write(availableTime);
      primaryKey++;
    }
  }
  availableTimesStream.end()
  availableTimesStream.on('finish', () => {
    console.log('availableTimes stream finished');
  })
  availableTimesStream.on('error', () => {
    console.log('Error in availableTimes stream')
  });
}

// createRestaurants()
// in psql: COPY restaurants FROM 'absolute path to seeded csv file' DELIMETER ',' ;
createAvailableTimes()