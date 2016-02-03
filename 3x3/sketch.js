var increase = 1
var density = 10

function setup() {
  pixelDensity(density)
  createCanvas(100,100);
  background(0);
  noStroke();
  //noLoop();

}

function draw() {

  for (var y = 0; y < height*density; y += density) {
    for (var x = 0; x < width*density; x += density) {
      //loadPixels();
      var currentPixel = 4*x*y*density
      var currentPixelRed = pixels[currentPixel];
      var currentPixelGreen = pixels[currentPixel + 1];
      var currentPixelBlue = pixels[currentPixel + 2];
      var currentPixelAlpha = pixels[currentPixel + 3];

      var newColor = color(currentPixelRed+increase,
        currentPixelGreen+increase,
        currentPixelBlue+increase,
        currentPixelAlpha)

      set(x,y,newColor);
      updatePixels();

    }
  }
  console.log("drawLoop completed")
}

