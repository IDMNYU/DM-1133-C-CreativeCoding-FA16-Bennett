function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 146, 62);

}

function draw() {
  push();
  translate(mouseX, mouseY);
  fill(87, 232, 206);
  rect(0, 0, 30, 30); //teal
  pop();
  translate(35, 10);
  fill(78, 110, 229);
  rect(0, 0, 15, 15); //blue
  
  

}

function mousePressed() {
  background(255, 146, 62);
}