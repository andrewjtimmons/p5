// function preload() {
//   mySound = loadSound('assets/doorbell.mp3');
// }

var blurVal = 0

function setup() {
  createCanvas(840, 576);
  background(0);

}

function draw() {
    background(0);


    textSize(32);
    fill(109, 226, 87);


    text("hi there JED THE HUMANIOD", 10, 30);
    text("hi there JED THE HUMANIOD", 10, 60);
    text("hi there JED THE HUMANIOD", 10, 90);
    filter(BLUR, blurVal)
    console.log(blurVal)
}

function keyPressed() {
  blurVal+=.1
}

