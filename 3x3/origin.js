var increase = 200

function setup() {
  createCanvas(3,3);
  background(0);
  noStroke();
  noLoop();
}

function draw() {

  for (var y = 0; y < height; y += 1) {
    for (var x = 0; x < width; x += 1) {
      loadPixels();
      var colorRGBA = get(x,y,1,1)
      var pixel = new Pixel(colorRGBA)

      var newColor = color(colorRGBA[0]+increase,colorRGBA[1]+increase,colorRGBA[2]+increase)
      set(x,y,newColor);
      updatePixels();

      // console.log(pixel)
      // console.log(colorRGBA)
      // console.log(newColor)
      // console.log(get(x,y))
      // console.log(x);
      // console.log(y);
    }
    if (y ===1) {
      break
    }
  }
}

var Pixel = function(colorRGBA) {
    this.red = colorRGBA[0];
    this.green = colorRGBA[1];
    this.blue = colorRGBA[2];
}