# freeSeats

> A user can search for a restaurant based on location, cuisine, or restaurant’s name and visit the restaurant’s page to get an overview of what the restaurant has to offer like photos of their dishes, their menu options, customers’ reviews, and be able to make a reservation.

## Related Projects

  - Reservation: https://github.com/freeseats/wfong-service-reservations
  - Top-Bar: https://github.com/freeseats/exzerone-search-bar
  - Menu, Related Restaurants, Side-Bar: https://github.com/freeseats/Menu-Related-SideBar
  - Restaurant Photos: https://github.com/freeseats/matthewjdiaz1-photo-service
  - Reviews: https://github.com/freeseats/slhodak-reviews-and-impressions

## Table of Contents

1. [Seeding Database](#SeedingDatabase)
1. [Usage](#Usage)

### Seeding Database
- Before seeding, make sure to npm install
- Log into mySQL from terminal: mysql -u root -p
- Enter password if set up with one
- If 'reservations' database exists in mySQL: drop database reservations;
- Create database in mySQL: create database reservations;
- Select database: use reservations;
- Go to db/db.js to change your user and password on line 4
- Run script: npm run seed
- To check 'reservations' database: select * from restaurants;

## Usage

From within the root directory:
```sh
npm install
npm run build
npm start
```
- In a broswer, go to: localhost:3020/:id
- (ex) Choose from restaurants with ids from 1 to 100: localhost:3020/1