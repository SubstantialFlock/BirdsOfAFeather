
var expect = require('chai').expect;
var assert = require('chai').assert;
var Assertion = require('chai').Assertion;
var AssertionError = require('chai').AssertionError;
var request = require('request');

describe('Server Integration', function() {

  it('should respond to GET request to server with a 200 status code', (done) => {
    request('http://localhost:3000', (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should respond to GET request with unknown endpoint with a 404 status code', (done) => {
    request('http://localhost:3000/unknown', (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});