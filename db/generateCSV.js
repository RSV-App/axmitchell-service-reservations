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

const availableTimes = ['6:00pm','6:15pm','6:30pm','6:45pm','7:00pm','7:15pm','7:30pm','7:45pm','8:00pm','8:15pm','8:30pm'];

const restaurantStream = fs.createWriteStream('./generatedData/10MilRestaurants.csv', { flags: 'a' });
const availabilitiesStream = fs.createWriteStream('./generatedData/110MilAvailabilities.csv', { flags: 'a' });

const promiseToDrain = (writeStream, data) => {
  if (!writeStream.write(data)) {
    return new Promise(resolve => {
      writeStream.once('drain', resolve);
    })
  }
}

const generateRestaurantsAndAvailabilities = async (amount) => {
  let restaurantKey = 1;
  let availabilityKey = 1;
  while (restaurantKey <= amount) {
    let restaurant = `${restaurantKey},${faker.lorem.word()},${tablesBookedSoFar()}\n`;
    let restaurantPromise = promiseToDrain(restaurantStream, restaurant)
    if (restaurantPromise) {
      await restaurantPromise;
    }
    for (var i = 0; i < availableTimes.length; i++) {
      let availability = `${availabilityKey},${availableTimes[i]},${seatsAvailable()},${restaurantKey}\n`;
      let availabilityPromise = promiseToDrain(availabilitiesStream, availability)
      if (availabilityPromise) {
        await availabilityPromise;
      }
      availabilityKey++;
    }
    restaurantKey++
  }
}

generateRestaurantsAndAvailabilities(10000000)
  .then(()=>{
    console.log('finished generating csv files')
  })