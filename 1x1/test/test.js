"use strict";
var expect = chai.expect;
var should = chai.should();

class mockColor {
    constructor(red, green, blue, alpha) {
        this.levels = [];
        this.levels[0] = red;
        this.levels[1] = green;
        this.levels[2] = blue;
        this.levels[3] = alpha;
    }
}

describe('colorRectangle Unit Tests', function() {
    beforeEach(function() {
        //fillColor = new mockColor(0, 0, 0, 255);
        xCoord=0;
        //var yCoord = 0;
        //var rectWidth = 99;
        //var rectHeight = 99;
        //var colorValueIncrease = 1;
        //testRect = new colorRectangle(fillColor, xCoord, yCoord, rectWidth, rectHeight, colorValueIncrease)
    });

    it('should exist', function() {
        console.log('asdf')
    });


    it('should init values without mutation', function() {
        //expect(5).to.equal(fillColor)
        expect(xCoord).to.equal(xCoord)
        expect(testRect.yCoord).to.equal(yCoord)
        expect(testRect.rectWidth).to.equal(rectWidth)
        expect(testRect.rectHeight).to.equal(rectHeight)
        expect(testRect.colorValueIncrease).to.equal(colorValueIncrease)
    });



});


