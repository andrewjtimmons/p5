// Show all possible color combinatinos for a 4x4 grid.
//
// Each color has 256**3 possible combinations
// This means this 4x4 grid has 256**48 combinations
// At 60 fps this takes 4.26666 seconds (256/60) to loop through the red color
// channel of the first square.
// That means it takes (256**3/60) seconds to loop through the first square.
//
// For all squares at 60 frames per second it will take
// 256**(3*16)/60/60 = 1.0945e+112 seconds
// 256**(3*16)/60/60/60 = 1.824167e+110 hours
// 256**(3*16)/60/60/60/24 = 7.600696e+108 days
// 256**(3*16)/60/60/60/24/365 = 2.082382e+106 years
//
//
// For refernce the universe will probably die in the big rip in about 20
// billion years
// http://phys.org/news/2015-06-cosmic-stickiness-favors-big-rip.html

"use strict";

var colorValueIncrease = 1
var density = 10
var fillColor
var rectangleArray

function setup() {
  pixelDensity(density)
  createCanvas(400, 400);
  background(0);
  noStroke();
  frameRate(60);
  // the number at the end of rect is the x,y coordinate of the rectangle.
  // first row of rectangles
  var rect11 = new colorRectangle(getRandomColorRGB(), 0, 0, 100, 100, colorValueIncrease, true)
  var rect21 = new colorRectangle(getRandomColorRGB(), 100, 0, 100, 100, colorValueIncrease, false)
  var rect31 = new colorRectangle(getRandomColorRGB(), 200, 0, 100, 100, colorValueIncrease, false)
  var rect41 = new colorRectangle(getRandomColorRGB(), 300, 0, 100, 100, colorValueIncrease, false)
  // second row of rectangles
  var rect12 = new colorRectangle(getRandomColorRGB(), 0, 100, 100, 100, colorValueIncrease, false)
  var rect22 = new colorRectangle(getRandomColorRGB(), 100, 100, 100, 100, colorValueIncrease, false)
  var rect32 = new colorRectangle(getRandomColorRGB(), 200, 100, 100, 100, colorValueIncrease, false)
  var rect42 = new colorRectangle(getRandomColorRGB(), 300, 100, 100, 100, colorValueIncrease, false)
  // third row of rectangles
  var rect13 = new colorRectangle(getRandomColorRGB(), 0, 200, 100, 100, colorValueIncrease, false)
  var rect23 = new colorRectangle(getRandomColorRGB(), 100, 200, 100, 100, colorValueIncrease, false)
  var rect33 = new colorRectangle(getRandomColorRGB(), 200, 200, 100, 100, colorValueIncrease, false)
  var rect43 = new colorRectangle(getRandomColorRGB(), 300, 200, 100, 100, colorValueIncrease, false)
  // fourth row of rectangles
  var rect14 = new colorRectangle(getRandomColorRGB(), 0, 300, 100, 100, colorValueIncrease, false)
  var rect24 = new colorRectangle(getRandomColorRGB(), 100, 300, 100, 100, colorValueIncrease, false)
  var rect34 = new colorRectangle(getRandomColorRGB(), 200, 300, 100, 100, colorValueIncrease, false)
  var rect44 = new colorRectangle(getRandomColorRGB(), 300, 300, 100, 100, colorValueIncrease, false)

  // put all rectangles in an array in order for looping over
  rectangleArray = [rect11, rect21, rect31, rect41,
                    rect12, rect22, rect32, rect42,
                    rect13, rect23, rect33, rect43,
                    rect14, rect24, rect34, rect44]
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

function getRandomColorRGB() {
  // generates random values for rgb and returns a p5 color object
  var r = Math.round(random(0,255))
  var g = Math.round(random(0,255))
  var b = Math.round(random(0,255))
  return color(r,g,b,255)
}

// This is raise an error in the console, but is needed for  testing.
// The error it fires on index.html will not effect the sketch or cause failure.
module.exports.colorRectangle = colorRectangle;