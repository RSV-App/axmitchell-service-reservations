-- CREATE SCHEMA seedtest
CREATE TABLE restaurants (
  id                int,
  booked            int,
);

CREATE TABLE available_times (
  id                int,
  rest_id           int,
  time              text,
  seats             int,
)