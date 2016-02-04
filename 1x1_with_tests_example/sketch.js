// the goal of this prototype is to have a box
// iterate over 256**3 colors
// this is just a toy for a future project
"use strict";

var colorValueIncrease = 1
var density = 10
var fillColor
var rect1

function setup() {
  pixelDensity(density)
  createCanvas(100, 100);
  background(0);
  //noStroke();
  //noLoop();
  frameRate(200000)
  fillColor = color(0, 0, 0, 255)
  rect1 = new colorRectangle(fillColor, 0, 0, 99, 99, colorValueIncrease)
}

function draw() {
  fill(rect1.currentColor)
  rect1.increaseFillColor()
  rect(rect1.xCoord, rect1.yCoord, rect1.rectWidth, rect1.rectHeight)
}

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

function colorRectangle(baseColor, xCoord, yCoord, rectWidth, rectHeight, colorValueIncrease) {
  // Class for storing rectangle data.
  // args:
  //    baseColor: the initial color for the rectangle.
  //    xCoord: the x coordinate of the rectangles top left corner.
  //    yCoord: the y coordinate of the rectangles top left corner.
  //    rectWidth:  the width of the rectangle.
  //    rectHeight: the height of the rectangle.
  //    colorValueIncrease: the amount to increase the color values by.

    this.currentColor = baseColor;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.rectWidth = rectWidth;
    this.rectHeight = rectHeight;
    this.colorValueIncrease = colorValueIncrease
}

colorRectangle.prototype.increaseFillColor = function(increase, fillColor) {
  // increase the first color channel by one.  If that channel
  // is now >= 255 then increment the next color channel.  Repeat for second
  // and third channel.
  this.currentColor.levels[0] += this.colorValueIncrease

  if (this.currentColor.levels[0] > 255) {
    this.currentColor.levels[0] = 0
    this.currentColor.levels[1] += this.colorValueIncrease
  }
  if (this.currentColor.levels[1] > 255) {
    this.currentColor.levels[1] = 0
    this.currentColor.levels[2] += this.colorValueIncrease
  }
}

module.exports.colorRectangle = colorRectangle;