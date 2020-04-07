// const fs = require('fs');
// const faker = require('faker');

// const tablesBookedSoFar = () => faker.random.number({
//   min: 3,
//   max: 15,
// });

// const seatsAvailable = () => faker.random.number({
//   min: 2,
//   max: 10,
// });

// const availableTimes = ['6:00','6:15','6:30','6:45','7:00','7:15','7:30','7:45','8:00','8:15','8:30'];

// const restaurantStream = fs.createWriteStream('./generatedData/10MilRestaurants.csv', { flags: 'a' });
// const availabilitiesStream = fs.createWriteStream('./generatedData/110MilAvailabilities.csv', { flags: 'a' });

// const promiseToDrain = (writeStream, data) => {
//   if (!writeStream.write(data)) {
//     return new Promise(resolve => {
//       writeStream.once('drain', resolve);
//     })
//   }
// }

// const generateRestaurantsAndAvailabilities = async (amount) => {
//   let restaurantKey = 1;
//   let availabilityKey = 1;
//   while (restaurantKey <= amount) {
//     let restaurant = `${restaurantKey},${faker.lorem.word()},${tablesBookedSoFar()}\n`;
//     let restaurantPromise = promiseToDrain(restaurantStream, restaurant)
//     if (restaurantPromise) {
//       await restaurantPromise;
//     }
//     for (var i = 0; i < availableTimes.length; i++) {
//       let availability = `${availabilityKey},${availableTimes[i]} + ' PM',${seatsAvailable()},${restaurantKey}\n`;
//       let availabilityPromise = promiseToDrain(availabilitiesStream, availability)
//       if (availabilityPromise) {
//         await availabilityPromise;
//       }
//       availabilityKey++;
//     }
//     restaurantKey++
//   }
// }

// generateRestaurantsAndAvailabilities(10000000)
//   .then(()=>{
//     console.log('finished generating csv files')
//   })

const fs = require('fs');

const tablesBookedSoFar = () => (
  Math.floor(Math.random() * 12) + 3
);

const seatsAvailable = () => (
  Math.floor(Math.random() * 8) + 2
);

const restaurantStream = fs.createWriteStream(`${__dirname}/generatedData/10MilRestaurantsV2.csv`, { flags: 'a' });

const promiseToDrain = (writeStream, data) => {
  if (!writeStream.write(data)) {
    return new Promise(resolve => {
      writeStream.once('drain', resolve);
    })
  }
}

const generateRestaurants = async (amount) => {
  let restaurantKey = 1;
  while (restaurantKey <= amount) {
    let restaurant = `${restaurantKey},${tablesBookedSoFar()},`
    restaurant += `${seatsAvailable()},${seatsAvailable()},${seatsAvailable()},`
    restaurant += `${seatsAvailable()},${seatsAvailable()},${seatsAvailable()},`
    restaurant += `${seatsAvailable()},${seatsAvailable()},${seatsAvailable()},`
    restaurant += `${seatsAvailable()},${seatsAvailable()}\n`;
    let restaurantPromise = promiseToDrain(restaurantStream, restaurant)
    if (restaurantPromise) {
      await restaurantPromise;
    }
    restaurantKey++
  }
}

generateRestaurants(10000000)
  .then(()=>{
    console.log('finished generating csv file')
  })
  .catch((err) => {
    console.log('Error generating file:', err)
  })