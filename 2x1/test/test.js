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

    it('should init values without mutation', function(done) {
        console.log(testRect)
        expect(testRect.currentColor).to.equal(fillColor)
        expect(testRect.xCoord).to.equal(xCoord)
        expect(testRect.yCoord).to.equal(yCoord)
        expect(testRect.rectWidth).to.equal(rectWidth)
        expect(testRect.rectHeight).to.equal(rectHeight)
        expect(testRect.colorValueIncrease).to.equal(colorValueIncrease)
        done();
    });

    it('should have levels of 255 for red, and 0 for green and blue after calling increaseFillColor 255 times', function(done) {
        //it is 256^1 - 1 because it starts with the color black
        for (var count = 0; count < 255; count += 1) {
            testRect.increaseFillColor()
        }
        expect(testRect.currentColor.levels[0]).to.equal(255)
        expect(testRect.currentColor.levels[1]).to.equal(0)
        expect(testRect.currentColor.levels[2]).to.equal(0)
        expect(testRect.numColorsSoFar).to.equal(256)
        done();
    });

    it('should have levels of 255 for red, and 255 for green and blue after calling increaseFillColor 65535 (256**2 -1) times', function(done) {
        //it is 256^2 - 1 because it starts with the color black
        for (var count = 0; count < 65535; count += 1) {
            testRect.increaseFillColor()
        }
        expect(testRect.currentColor.levels[0]).to.equal(255)
        expect(testRect.currentColor.levels[1]).to.equal(255)
        expect(testRect.currentColor.levels[2]).to.equal(0)
        expect(testRect.numColorsSoFar).to.equal(65536)
        done();
    });

    it('should have levels of 255 for red, green, and blue after calling increaseFillColor 16777215 times (256 to the power of 3 - 1)', function(done) {
        //it is 256^3 - 1 because it starts with the color black
        for (var count = 0; count < 16777215; count += 1) {
            testRect.increaseFillColor()
        }
        expect(testRect.currentColor.levels[0]).to.equal(255)
        expect(testRect.currentColor.levels[1]).to.equal(255)
        expect(testRect.currentColor.levels[2]).to.equal(255)
        expect(testRect.numColorsSoFar).to.equal(16777216)
        done();
    });

});