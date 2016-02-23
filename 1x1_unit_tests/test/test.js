// Import the expect library.
var expect = require('chai').expect;
// Import our rectangle class
var colorRectangle = require('../sketch').colorRectangle;

describe('colorRectangle tests', function() {

  // beforeEach is a special function that is similar to the setup function in
  // p5.js.  The major difference it that this function runs before each it()
  // test you create instead of running just once before the draw loop
  // beforeEach lets you setup the objects you want to test in an easy fasion.
  beforeEach(function () {
      testRect = new colorRectangle()
  });

  it('should be an object', function(done) {
    expect(testRect).to.be.a('object');
    done();
  });

});



