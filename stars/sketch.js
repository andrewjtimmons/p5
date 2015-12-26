var points = []

function setup() {
  // Sets the screen to be 640 pixels wide and 360 pixels high
  createCanvas(720, 400);
  for (var i = 0; i < 10000; i++) {
    newPoint = [random(width), random(height)]
    points.push(newPoint)

  }
}

function draw() {
  // Set the background to black and turn off the fill color
  background(0);
  noFill();
  stroke(255);

  //remove a star and add a new one for twinkle effect
  points.shift()
  newPoint = [random(width), random(height)]
  points.push(newPoint)

  //draw the stars
  for (var p of points){
    point(p[0], p[1])
  }
}