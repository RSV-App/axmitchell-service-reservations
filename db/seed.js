const fs = require('fs');
const faker = require('faker');

const booked = () => faker.random.number({
  min: 3,
  max: 15,
});

const seats = () => faker.random.number({
  min: 2,
  max: 10,
});

const seatsForAllTimeWindows = () => {
  let allSeats = '';
  for (var i = 0; i < 11; i++) {
    if (i !== 10) {
      allSeats += seats() + ',';
    } else {
      allSeats += seats();
    }
  }
  return allSeats;
}

const createRestaurants = () => {
  const restaurantStream = fs.createWriteStream('10MilRestaurants.csv', { flags: 'a' });
  for (let i = 0; i < 10000000; i++) {
    let restaurant = '';
    restaurant += "'" + faker.lorem.word() + "'" + ',';
    restaurant += booked() + ','
    restaurant += seatsForAllTimeWindows() + '\n';
    restaurantStream.write(restaurant);
  }
  restaurantStream.end();
  restaurantStream.on('finish', () => {
    console.log('stream finished')
  })
  restaurantStream.on('error', () => {
    console.log('error in stream');
  })
}

createRestaurants()

// in psql: COPY restaurants FROM 'absolute path to seeded file' DELIMETER ',' ;