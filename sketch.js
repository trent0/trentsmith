function setup() {
  createCanvas(400, 400);
  black = color('000000')
}

function draw() {
  background(220);
  fill(0, 0, 0, 225)
  rect(100, 160, 180, 85);
  noStroke();
  fill("yellow");
  arc(150, 200, 50, 50, 225, 135); 
  fill("red");
  rect(200, 200, 50, 25); 
  ellipse(225, 200, 50, 50); 
  fill("white");
  ellipse(212, 195, 15, 15);
  ellipse(238, 195, 15, 15);
  fill("blue");
  ellipse(238, 195, 10, 10);
  ellipse(212, 195, 10, 10);
}
