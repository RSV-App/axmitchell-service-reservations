const fs = require('fs');

const tablesBookedSoFar = () => (
  Math.floor(Math.random() * 12) + 3
);

const seatsAvailable = () => (
  Math.floor(Math.random() * 8) + 2
);

const restaurantStream = fs.createWriteStream(`${__dirname}/generatedData/10MilRestaurants.csv`, { flags: 'a' });

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