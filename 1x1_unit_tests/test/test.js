// Import the expect library.
var expect = require('chai').expect;
// Import our rectangle class
var colorRectangle = require('../sketch').colorRectangle;

function mockColor(red, green, blue) {
    // Mock of the color class from p5
    this.levels = [];
    this.levels[0] = red;
    this.levels[1] = green;
    this.levels[2] = blue;
}

describe('colorRectangle tests', function() {

  // beforeEach is a special function that is similar to the setup function in
  // p5.js.  The major difference it that this function runs before each it()
  // test you create instead of running just once before the draw loop
  // beforeEach lets you setup the objects you want to test in an easy fasion.
  beforeEach(function() {
      var xCoord = 0;
      var yCoord = 0;
      var rectWidth = 500;
      var rectHeight = 500
      var colorValueIncrease = 1
      var fillColor = new mockColor(0, 0, 0);
      testRect = new colorRectangle(xCoord, yCoord, rectWidth, rectHeight,
        colorValueIncrease, fillColor);
  });

  it('should be an object', function(done) {
    expect(testRect).to.be.a('object');
    done();
  });

  it('should initialize without mutation', function(done) {
    expect(testRect.xCoord).to.equal(0);
    expect(testRect.yCoord).to.equal(0);
    expect(testRect.rectWidth).to.equal(500);
    expect(testRect.rectHeight).to.equal(500);
    expect(testRect.colorValueIncrease).to.equal(1);
    expect(testRect.fillColor.levels).to.equal([0, 0, 0])
    done();
  });


});



