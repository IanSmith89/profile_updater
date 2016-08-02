'use strict';

process.env.NODE_ENV = 'test';

const assert = require('chai').assert;
const { suite, test } = require('mocha');
const request = require('supertest');

const server = require('../server');

suite('Server', () => {
  suite('Check username', () => {
    test('exists', (done) => {
      request(server)
        .get('/api/user/username_exists?username=bill')
        .expect('Content-Type', /json/)
        .expect('true', done);
    });

    test('does not exist', (done) => {
      request(server)
        .get('/api/user/username_exists?username=alex')
        .expect('Content-Type', /json/)
        .expect('false', done);
    });
  });

  suite('Check email', () => {
    test('exists', (done) => {
      request(server)
        .get('/api/user/email_exists?email=cate@test.com')
        .expect('Content-Type', /json/)
        .expect('true', done);
    });

    test('does not exist', (done) => {
      request(server)
        .get('/api/user/email_exists?email=fred@test.com')
        .expect('Content-Type', /json/)
        .expect('false', done);
    });
  });

  suite('User', () => {
    test('GET by id', (done) => {
      request(server)
        .get('/api/user/1')
        .expect('Content-Type', /json/)
        .expect({
          email: 'abby@test.com',
          id: 1,
          password: 'password',
          username: 'abby'
        }, done);
    });

    test('PUT by id', (done) => {
      request(server)
        .put('/api/user/1')
        .send({
          email: 'fred@test.com',
          username: 'fred'
        })
        .expect('Content-Type', /json/)
        .expect({
          email: 'fred@test.com',
          id: 1,
          password: 'password',
          username: 'fred'
        }, done);
    });
  });
});
