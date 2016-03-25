'use strict';

var app = require('../..');
import request from 'supertest';

var newInterest;

describe('Interest API:', function() {

  describe('GET /api/interests', function() {
    var interests;

    beforeEach(function(done) {
      request(app)
        .get('/api/interests')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          interests = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      interests.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/interests', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/interests')
        .send({
          name: 'New Interest',
          info: 'This is the brand new interest!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newInterest = res.body;
          done();
        });
    });

    it('should respond with the newly created interest', function() {
      newInterest.name.should.equal('New Interest');
      newInterest.info.should.equal('This is the brand new interest!!!');
    });

  });

  describe('GET /api/interests/:id', function() {
    var interest;

    beforeEach(function(done) {
      request(app)
        .get('/api/interests/' + newInterest._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          interest = res.body;
          done();
        });
    });

    afterEach(function() {
      interest = {};
    });

    it('should respond with the requested interest', function() {
      interest.name.should.equal('New Interest');
      interest.info.should.equal('This is the brand new interest!!!');
    });

  });

  describe('PUT /api/interests/:id', function() {
    var updatedInterest;

    beforeEach(function(done) {
      request(app)
        .put('/api/interests/' + newInterest._id)
        .send({
          name: 'Updated Interest',
          info: 'This is the updated interest!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedInterest = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedInterest = {};
    });

    it('should respond with the updated interest', function() {
      updatedInterest.name.should.equal('Updated Interest');
      updatedInterest.info.should.equal('This is the updated interest!!!');
    });

  });

  describe('DELETE /api/interests/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/interests/' + newInterest._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when interest does not exist', function(done) {
      request(app)
        .delete('/api/interests/' + newInterest._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
