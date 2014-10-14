'use strict';

var ZombieNamefier = require('../');

require('chai').should();

describe('Zombie Namifier', function () {

  before(function () {
    ZombieNamefier.should.be.ok;
  });
  describe('Name generator', function () {

    it('should be able to generate a random name', function () {
      var bob1 = ZombieNamefier('bob');
      var bob2 = ZombieNamefier('bob');

      bob1.should.not.be.eql(bob2);
    });
  });
});