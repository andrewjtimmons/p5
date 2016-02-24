// This is for a unit test tutorial.
// it should create a rectangle and allow you to iterate over
// every single color.
//
// colorValueIncrease sets the amount the color changes on each
// draw loop. Values greater than 255 will break the sketch.
// fillColor will be the color of the rectangle.
// rectangle will become an instance of our ColorIncreaser class.

var colorValueIncrease = 33
var fillColor
var colorIncreaser

function setup() {
  createCanvas(500, 500);
  background(0);
  fillColor = color(0, 0, 0, 255);
  noStroke();
  colorIncreaser = new ColorIncreaser(colorValueIncrease);
}

function draw() {
  fill(fillColor);
  rect(0, 0, 500, 500);

  // increment the red value
  fillColor.levels[0] += colorValueIncrease;
  // If the red value is maxed out increment the green value
  // and reset the red value.
  if (fillColor.levels[0] > 255) {
    fillColor.levels[0] = 0;
    fillColor.levels[1] += colorValueIncrease;
  }
  // If the green value is maxed out increment the blue value
  // and reset the green value.
  if (fillColor.levels[1] > 255) {
    fillColor.levels[1] = 0;
    fillColor.levels[2] += colorValueIncrease;
  }
  // If the blue value is maxed out reset the green value.
  if (fillColor.levels[2] > 255) {
    fillColor.levels[2] = 0;
  }
}

function ColorIncreaser(colorValueIncrease) {
  // Stores a value and a color and allows you to increase the color
  // by that value.
  this.colorValueIncrease = colorValueIncrease
}

module.exports.ColorIncreaser = ColorIncreaser;