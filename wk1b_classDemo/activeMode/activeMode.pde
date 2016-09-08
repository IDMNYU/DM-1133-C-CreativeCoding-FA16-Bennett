
// this only runs once
void setup() {
  size(600, 800);
  background(200, 127, 12);
  
  //frameRate(5);
}


// draw loops
// this is where the party is
void draw() {

  stroke(255);
  fill(0);
  ellipse(mouseX, mouseY, 30, 30);

  fill(0, 0, 255);
  ellipse(width/2, height/2, 50, 200);

  noStroke();
  ellipseMode(CORNER);
  fill(255, 100);
  ellipse(width/2, height/2, 50, 200);

  ellipseMode(CENTER);

  // line(x1, y1, x1, y2);
  stroke(0, 0, 127);
  strokeWeight(3);
  line(20, 400, 500, 750);
  /*
  stroke(255);
   fill(0);
   ellipse(mouseX, mouseY, 30, 30);
   */
   
   if(mousePressed){  // if what ever is inside the () is true, then we
                       // will execute what is between the {}
     background(0);
   }
   
   println(frameCount);
}