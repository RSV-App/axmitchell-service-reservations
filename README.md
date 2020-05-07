#Reviews and Impressions Module

This module is part of the FreeSeats restaurant reservation app. It allows a user to make a reservation for the selected restaurant.

## Table of Contents

1. [Seeding Database](#SeedingDatabase)
1. [Usage](#Usage)

### Seeding Database
- Run script: npm run generateCSV
- Import generated csv file into Postgres database table, reservations

## Usage

From within the root directory:
```sh
npm install
npm run build
npm run start
```
- In a broswer, go to: localhost:3020/:id
- (ex) Choose from restaurants with ids from 1 to 10,000,000: localhost:3020/1
