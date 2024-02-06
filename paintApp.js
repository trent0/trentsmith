
let currentColor, red, orange, yellow, green, cyan, blue, magenta, brown, white, black ;

function setup() {
  createCanvas(600, 600);
  background(255);
  currentColor = 0;
  black = new colorBox(0, "black");
  red = new colorBox(50, "red");
  green = new colorBox(100, "green");
  blue = new colorBox(150, "blue");
  yellow = new colorBox(200, "yellow");
  cyan = new colorBox(250, "cyan")
  magenta = new colorBox(300, "magenta");
  brown = new colorBox(350, "brown")
  orange = new colorBox (400, "orange")
  white = new colorBox (450, "white");
}

function draw() {
 if(mouseIsPressed){
  if(mouseX > 51 ){
    drawing();
  }
 }
black.appear();
black.onMousePressed();
red.appear();
green.appear();
blue.appear();
yellow.appear();
cyan.appear();
magenta.appear();
brown.appear();
orange.appear();
white.appear();

}
class colorBox{
 
    constructor(y, color){
      this.x = 0;
      this.y = y;
      this.w = 50;
      this.h = 50;
      this.color = color;
    }
    appear(){
      push();

      if(this.color != "white"){
        noStroke();
      }

      fill(this.color);
      rect(this.x, this.y, this.w, this.h)
      pop();
    }

onMousePressed(){
    if(mouseIsPressed){
      if(mouseX < 50){
      if(mouseY > 0 && mouseY < 50){
        currentColor = "black";
      }
      else if(mouseY > 50 && mouseY < 100){
        currentColor = "red";
      }
      else if(mouseY > 100 && mouseY < 150){
        currentColor = "green";
      }
      else if(mouseY > 150 && mouseY < 200){
        currentColor = "blue";
      }
      else if(mouseY > 200 && mouseY < 250){
        currentColor = "yellow";
      }else if(mouseY > 250 && mouseY < 300){
        currentColor = "cyan";
      }else if(mouseY > 300 && mouseY < 350){
        currentColor = "magenta";
      }else if(mouseY > 350 && mouseY < 400){
        currentColor = "brown";
      }else if(mouseY > 400 && mouseY < 450){
        currentColor = "orange";
      }else if(mouseY > 450 && mouseY < 500){
        currentColor = "white";
      }
    }
  }
}
}


function drawing(){
  push();
  stroke(currentColor);
  strokeWeight(3);
  line(pmouseX, pmouseY, mouseX, mouseY);
  pop();
}