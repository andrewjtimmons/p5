// the goal of this prototype is to have a box
// iterate over 256**3 colors
// and then increment the box next to it.
"use strict";

var colorValueIncrease = 1
var density = 10
var fillColor
var rectangleArray

function setup() {
  pixelDensity(density)
  createCanvas(800, 800);
  background(0);
  noStroke();
  //noLoop();
  frameRate(60);
  var rect1 = new colorRectangle(color(0, 0, 0, 255), 0, 0, 199, 199, colorValueIncrease, true)
  var rect2 = new colorRectangle(color(0, 0, 0, 255), 100, 0, 99, 99, colorValueIncrease, false)
  rectangleArray = [rect1, rect2]
}

function draw() {
  for (var index = 0; index < rectangleArray.length; index += 1) {
    var r = rectangleArray[index]
    //always increment the first rectangle, only increment the others if needed.
    if (r.alwaysIncrement === true){
      r.increaseFillColor()
    } else if (rectangleArray[index-1].increamentNextRectangle === true) {
      rectangleArray[index-1].increamentNextRectangle = false
      r.increaseFillColor()
    }
    console.log(r.currentColor)
    //draw it
    fill(r.currentColor)
    rect(r.xCoord, r.yCoord, r.rectWidth, r.rectHeight)
  }
}

function colorRectangle(baseColor, xCoord, yCoord, rectWidth, rectHeight, colorValueIncrease, alwaysIncrement) {
  // Class for storing rectangle data.
  // args:
  //    baseColor: the initial color for the rectangle.
  //    xCoord: the x coordinate of the rectangles top left corner.
  //    yCoord: the y coordinate of the rectangles top left corner.
  //    rectWidth:  the width of the rectangle.
  //    rectHeight: the height of the rectangle.
  //    colorValueIncrease: the amount to increase the color values by.
  //    alwaysIncrement:  tells program if rectangle should always increase or only at certain times
  // attrs:
  //    numColorsSoFar: count of how many different colors a rectangle has been.
  //    incrementNextRectangle: Tells the program it is time to increment the
  //        next rectangles fill color.
  this.currentColor = baseColor;
  this.xCoord = xCoord;
  this.yCoord = yCoord;
  this.rectWidth = rectWidth;
  this.rectHeight = rectHeight;
  this.colorValueIncrease = colorValueIncrease;
  this.alwaysIncrement = alwaysIncrement
  this.numColorsSoFar = 1; //starts as black
  this.increamentNextRectangle = false;
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
    this.currentColor.levels[2] = 0;
    this.increamentNextRectangle = true;
  }
}

// This is raise an error in the console, but is needed for our testing.
// The error it fires on index.html will not effect the sketch or cause failure.
module.exports.colorRectangle = colorRectangle;