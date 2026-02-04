const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');

describe('Student CRUD Tests', () => {

  after(() => {
    mongoose.connection.close();
  });

  it('GET / should return 200', (done) => {
    request(app)
      .get('/')
      .expect(200, done);
  });

  it('POST /add should add student', (done) => {
    request(app)
      .post('/add')
      .send({ name: 'Test', marks: 90, cgpa: 9 })
      .expect(302, done);
  });
});
