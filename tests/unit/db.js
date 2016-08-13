
var expect = require('chai').expect;
var Users = require('../../server-dist/db/models/userModel').Users;

describe('Postgres unit tests', function() {

  it('should retrieves all users', function(done) {
    User.findAll().then(function(users) {
      expect(users).to.be.an('array');
      done();
    }); 
  });
});