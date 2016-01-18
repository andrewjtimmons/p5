function preload() {
  mySound = loadSound('assets/doorbell.mp3');
}

function setup() {
  createCanvas(100, 100);
  background(0, 255, 0);

  textAlign(CENTER);
  text('click here to play', width/2, height/2);

  mySound.setVolume(0.1);
}

function draw() {
    console.log(mySound.currentTime())
}

// play sound on mouse press over canvas
function mousePressed() {
  if (mouseX < width && mouseY < height && mouseX > 0 && mouseY > 0) {
    mySound.play();
  }
}