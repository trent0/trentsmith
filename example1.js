function setup() {
  createCanvas(500, 500);
  green = color('#00ff00');
  white = color('#FFFFFF')
}

function draw() {
  background(220);
  fill(green)
  rect(30, 20, 205, 105);
  fill(white);
  circle(90, 70, 75)

  rect(140, 35, 75, 75);
}
