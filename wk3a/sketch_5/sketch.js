//var x;
//var y;

function setup() {
  createCanvas(400, 400); // instead of size()
  background(229, 113, 78);
}

function draw() {
  noStroke();
  fill(232, 193, 201);
  ellipse(100, 50, 40, 40);

  if (mouseIsPressed) {
    fill(83, 230, 232);
    strokeWeight(3);
    stroke(108, 255, 56);
    ellipse(mouseX, mouseY, 50, 50);
  }

}

function mouseMoved() {
  fill(168, 175, 255);
  stroke(83, 230, 232);
  var x = map(mouseX, 0, width, 100, 200);
  var y = map(mouseY, 0, height, 250, 350);
  ellipse(x, y, 50, 50);

}