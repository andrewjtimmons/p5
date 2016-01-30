var increase = 1

function setup() {
  pixelDensity(1)
  createCanvas(100,100);
  background(0);
  noStroke();
  //noLoop();

}

function draw() {
  for (var y = 0; y < height*pixelDensity(); y += pixelDensity()) {
    for (var x = 0; x < width*pixelDensity(); x += pixelDensity()) {
      //loadPixels();
      var colorRGBA = get(x,y)

      var newColor = color(colorRGBA[0]+increase,colorRGBA[1]+increase,colorRGBA[2]+increase, 255)
      set(x,y,newColor);
      updatePixels();

    }
  }
  console.log("drawLoop completed")
}

