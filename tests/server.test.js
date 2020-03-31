const request = require('supertest');
const app = require('../server/server.js');

describe('Test the api path', () => {
  test('It should respond to the GET method', (done) => {
    request(app).get('/reservations/1').then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
