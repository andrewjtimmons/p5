
var expect = require("chai").expect;
var colorRectangle = require('../sketch').colorRectangle;

console.log(colorRectangle)
describe('please work', function() {
    beforeEach(function () {
        sample = 5;
    });

    it('should log a variable', function(done) {
        console.log(sample)
        done()
    });
});

function mockColor(red, green, blue, alpha) {
    // Mock of the color class from p5
    // Using 'use strict' to get class syntax was
    // causing errors in beforeEach, hence the old style js class.
    this.levels = [];
    this.levels[0] = red;
    this.levels[1] = green;
    this.levels[2] = blue;
    this.levels[3] = alpha;
}

describe('colorRectangle Unit Tests', function() {
    beforeEach(function () {
        fillColor = new mockColor(0, 0, 0, 255);
        xCoord=0;
        yCoord = 0;
        rectWidth = 99;
        rectHeight = 99;
        colorValueIncrease = 1;
        testRect = new colorRectangle(fillColor, xCoord, yCoord, rectWidth, rectHeight, colorValueIncrease)
    });


    it('should init values without mutation', function() {
        console.log(testRect)
        expect(testRect.currentColor).to.equal(fillColor)
        expect(testRect.xCoord).to.equal(xCoord)
        expect(testRect.yCoord).to.equal(yCoord)
        expect(testRect.rectWidth).to.equal(rectWidth)
        expect(testRect.rectHeight).to.equal(rectHeight)
        expect(testRect.colorValueIncrease).to.equal(colorValueIncrease)
    });



});