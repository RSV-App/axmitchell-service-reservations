# freeSeats

> A user can search for a restaurant based on location, cuisine, or restaurant’s name and visit the restaurant’s page to get an overview of what the restaurant has to offer like photos of their dishes, their menu options, customers’ reviews, and be able to make a reservation.

## Table of Contents

1. [Seeding Database](#SeedingDatabase)
1. [Usage](#Usage)

### Seeding Database
- Before seeding, make sure to npm install
- Log into postgres from terminal: postgres -u root -p
- Enter password if set up with one
- If 'reservations' database exists in postgres: drop database reservations;
- Create database in postgres: create database reservations;
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
