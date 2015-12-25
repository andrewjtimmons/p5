function setup() {
    createCanvas(screen.width, screen.height)
    colorMode(HSB)
    saturation = 50
    brightness = 255
    noStroke()
    r = screen.height/1.30
}

function draw() {

    if (r < 20) {
        r = screen.height
        saturation = random(100)
        brightness = random(255)
    }
    fill(random(255), saturation, brightness)
    ellipse(random(screen.width), random(screen.height),r,r)
    r = r - 5



}