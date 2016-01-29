function setup() {
  createCanvas(3,3);
  background(0);
  noStroke();
  //noLoop();
}

function draw() {


  for (var y = 0; y < height; y += 1) {
    for (var x = 0; x < width; x += 1) {
      var c = get(x,y)
      set(x,y,color(c[0]+1,c[1]+1,c[2]+1));
      updatePixels();
      //console.log(x,y)
      //console.log(get(x,y))
    }
  }



}