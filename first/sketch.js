function setup() {
    createCanvas(screen.width, screen.height)
    colorMode(HSB)
    noStroke()
    r = screen.height/1.30
}

function draw() {
    if(mouseIsPressed) {
        if (r < 20) r = screen.height
        fill(random(255), 50, 255)
        ellipse(mouseX,mouseY,r,r)
        r = r - 5
    } else {

    }


}