// the goal of this prototype is to have a box
// iterate over 256**3 colors
// this is just a toy for a future project

var increase = 1
var density = 10
var fillColor

function setup() {
  pixelDensity(density)
  createCanvas(100,100);
  background(0);
  //noStroke();
  //noLoop();
  frameRate(200000)

  fillColor = color(0,0,0, 255)

}

function draw() {
  fill(fillColor)
  rect(0, 0, 99, 99)
  increaseFillColor(increase, fillColor)
}

function increaseFillColor(increase, fillColor) {
  // increase the first color channel by one.  If channel
  // is now >= 255 then increment the next color channel.
  fillColor.levels[0] += increase

  if (fillColor.levels[0] > 255) {
    fillColor.levels[0] = 0
    fillColor.levels[1] += increase
    noLoop()
  }
  if (fillColor.levels[1] > 255) {
    fillColor.levels[1] = 0
    fillColor.levels[2] += increase
  }
}