var numAngles = 7

function setup() {
  createCanvas(720, 400);
  noStroke();

}

function draw() {
  background(100);
  angles = generateAngles(numAngles)
  pieChart(300, angles);
}

function generateAngles(numAngles) {
  var angles = []
  var minAngle = 0
  for (var i = 0; i < numAngles; i++) {
    angle = int(random(minAngle, 60))
    minAngle = angle
    angles.push(angle)
  }
  return angles
}

function pieChart(diameter, data) {
  var lastAngle = 0;
  for (var i = 0; i < data.length; i++) {
    var gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle+radians(angles[i]));
    lastAngle += radians(angles[i]);
  }
}