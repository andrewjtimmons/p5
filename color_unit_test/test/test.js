// Import the expect library.  This is what allows us to check our code.
// You can check out the full documentation at http://chaijs.com/api/bdd/
var expect = require('chai').expect;
// Import our rectangle class
var ColorIncreaser = require('../sketch').ColorIncreaser;

describe('ColorIncreaser tests', function() {

  // beforeEach is a special function that is similar to the setup function in
  // p5.js.  The major difference it that this function runs before each it()
  // test you create instead of running just once before the draw loop
  // beforeEach lets you setup the objects you want to test in an easy fasion.
  beforeEach(function() {
      var colorValueIncrease = 1;
      colorIncreaser = new ColorIncreaser(colorValueIncrease);
  });

  it('should be an object', function(done) {
    expect(colorIncreaser).to.be.a('object');
    done();
  });

  it('should store initial values without mutation', function(done) {
    expect(colorIncreaser.colorValueIncrease).to.be.equal(1);
    done();
  });

});

