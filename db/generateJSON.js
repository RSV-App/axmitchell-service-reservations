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

const restaurantStream = fs.createWriteStream('./generatedData/10MilRestaurants.json', {flags: 'a'});

const promiseToDrain = (writeStream, data) => {
  if (!writeStream.write(data)) {
    return new Promise(resolve => {
      writeStream.once('drain', resolve);
    });
  }
};

const generateRestaurantJSON = async (amount) => {
  let restaurantId = 1;
  restaurantStream.write('[');
  while (restaurantId <= amount) {
    let restaurant = {};
    restaurant.id = restaurantId;
    restaurant.name = faker.lorem.word();
    restaurant.booked = tablesBookedSoFar();
    restaurant.availabilities = {
      '6:00pm': seatsAvailable(),
      '6:15pm': seatsAvailable(),
      '6:30pm': seatsAvailable(),
      '6:45pm': seatsAvailable(),
      '7:00pm': seatsAvailable(),
      '7:15pm': seatsAvailable(),
      '7:30pm': seatsAvailable(),
      '7:45pm': seatsAvailable(),
      '8:00pm': seatsAvailable(),
      '8:15pm': seatsAvailable(),
      '8:30pm': seatsAvailable()
    };
    let stringifiedRestaurant = JSON.stringify(restaurant);
    if (restaurantId < amount) {
      stringifiedRestaurant += ','
    }
    const promise = promiseToDrain(restaurantStream, stringifiedRestaurant);
    if (promise) {
      await promise;
    }
    restaurantId++
  }
  restaurantStream.write(']');
}

generateRestaurantJSON(10000000)
  .then(() => {
    console.log('finished generating JSON file')
  })