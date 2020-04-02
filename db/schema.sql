-- CREATE SCHEMA seedtest
CREATE TABLE restaurants (
  id                serial primary key unique,
  name              varchar(30),
  booked            int,
  six               int,
  sixFifteen        int,   
  sixThirty         int,
  sixFortyFive      int,   
  seven             int,
  sevenFifteen      int,   
  sevenThirty       int,   
  sevenFortyFive    int,   
  eight             int,   
  eightFifteen      int,   
  eightThirty       int,   
);