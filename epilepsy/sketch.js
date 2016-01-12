var background_value = 0
function setup() {
  createCanvas(720, 400);
}

function draw() {
  background(background_value);
  background_value += 1
  if (background_value > 255) {
    background_value = 0
  }
  noStroke();
  var fill_hue = random(0, 255)
  var fill_sat = random(0, 255)
  var fill_brightness = random(0, 255)
  for (var i = 0; i < height; i += 20) {
    fill(fill_hue, fill_sat, random(15, 255));
    rect(0, i, width, 10);
    fill(random(235,255));
    rect(i, 0, 10, height);
  }
}