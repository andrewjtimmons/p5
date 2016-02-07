// the goal of this prototype is to have a box
// iterate over 256**3 colors
// this is just a toy for a future project
"use strict";

var colorValueIncrease = 1
var density = 10
var fillColor
var rect1
var rect2

function setup() {
  pixelDensity(density)
  createCanvas(200, 100);
  background(0);
  noStroke();
  //noLoop();
  frameRate(200000)
  fillColor = color(0, 0, 0, 255)
  rect1 = new colorRectangle(fillColor, 0, 0, 99, 99, colorValueIncrease)
  rect2 = new colorRectangle(fillColor, 100, 0, 99, 99, colorValueIncrease)
}

function draw() {
  fill(rect1.currentColor)
  rect1.increaseFillColor()
  rect(rect1.xCoord, rect1.yCoord, rect1.rectWidth, rect1.rectHeight)

  fill(rect2.currentColor)
  rect2.increaseFillColor()
  rect(rect2.xCoord, rect2.yCoord, rect2.rectWidth, rect2.rectHeight)
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
  // attrs:
  //    numColorsSoFar: count of how many different colors a rectangle has been.

    this.currentColor = baseColor;
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.rectWidth = rectWidth;
    this.rectHeight = rectHeight;
    this.colorValueIncrease = colorValueIncrease
    this.numColorsSoFar = 1 //starts as blakc
}

colorRectangle.prototype.increaseFillColor = function() {
  // increase the first color channel by one.  If that channel
  // is now >= 255 then increment the next color channel.  Repeat for second
  // and third channel

  this.currentColor.levels[0] += this.colorValueIncrease
  this.numColorsSoFar += 1

  if (this.currentColor.levels[0] > 255) {
    this.currentColor.levels[0] = 0
    this.currentColor.levels[1] += this.colorValueIncrease
  }
  if (this.currentColor.levels[1] > 255) {
    this.currentColor.levels[1] = 0
    this.currentColor.levels[2] += this.colorValueIncrease
  }
  if (this.currentColor.levels[2] > 255) {
    this.currentColor.levels[2] = 0
  }
}

module.exports.colorRectangle = colorRectangle;