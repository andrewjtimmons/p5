// Import the expect library.
var expect = require('chai').expect;
//var colorRectangle = require('../sketch').colorRectangle;

// Create the variable we are going to test
var p5js = 'awesome';

// describe lets you comment on what this block of code is for.
describe('these are my first tests for p5js', function() {

  // it() lets you comment on what an individual test is about.
  it('should be a string', function(done) {
    // expect is the actual test.
    expect(p5js).to.be.a('string');
    // done tells the program the test is complete.
    done();
  });

  it('should be a awesome', function(done) {
    expect(p5js).to.equal('awesome');
    done();
  });

});



