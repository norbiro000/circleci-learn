const app = require('../index').fizzOrBuzz;

var assert = require('assert');
describe('Fizz or buzz Game', function() {
  describe('Send Param with', function() {
    it('1 should return fizz', function() {
      assert.equal(app(1), 'fizz');
    });
    it('2 should return buzz', function() {
      assert.equal(app(2), 'buzz');
    });
    it('3 should return fizz', function() {
      assert.equal(app(3), 'fizz');
    });
    it('4 should return buzz', function() {
      assert.equal(app(4), 'buzz');
    });
    it('5 should return fizz', function() {
      assert.equal(app(5), 'fizz');
    });
    it('6 should return buzz', function() {
      assert.equal(app(6), 'buzz');
    });
    it('7 should return fizz', function() {
      assert.equal(app(7), 'fizz');
    });
    it('8 should return buzz', function() {
      assert.equal(app(8), 'buzz');
    });
    it('9 should return fizz', function() {
      assert.equal(app(9), 'fizz');
    });
    it('10 should return buzz', function() {
      assert.equal(app(10), 'buzz');
    });
    it('11 should return fizz', function() {
      assert.equal(app(11), 'fizz');
    });
    it('12 should return buzz', function() {
      assert.equal(app(12), 'buzz');
    });
    it('13 should return fizz', function() {
      assert.equal(app(13), 'fizz');
    });
    it('14 should return buzz', function() {
      assert.equal(app(14), 'buzz');
    });
    it('15 should return fizzbuzz', function() {
      assert.equal(app(15), 'fizzbuzz');
    });
  });
});