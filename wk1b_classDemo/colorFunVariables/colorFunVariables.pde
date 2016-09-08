// declaring global variables
// this means that all my code has access to them

float x, y;

void setup() {
  size(600, 600);
  background(255);
  fill(0, 0, 255);
  rect(0, width, height/2, width);

  fill(128, 206, 30);
  frameRate(6);
 // print("X is: ");
  //println(x);
}



void draw() {
  // local variables
 // float x; 
  //float y;
  //background(0);
  fill(128, 206, 30);
  //ellipse(mouseX, mouseY, mouseX, mouseY);
  //  background(0);
  // this is an if statement
  if (keyPressed) {
    /*
    background(0);
     fill(0, 127, 0);
     ellipse(mouseX, mouseY, 20, 20);
     */
  }
  /*
  print("Mouse X is: ");
   println(mouseX);
   print("Mouse Y is: ");
   println(mouseY);
   */
  print("X is: ");
  println(x);
  print("Y is: ");
  println(y);

  fill(255);
  //line(mouseX, mouseY, width, height);

  fill(255, 217, 142, 30); // 4th parameter alpha
  stroke(121, 97, 77);
  ellipse(x, y, random(50), random(50));

  // result of operation on left; operation on right
  // " take the current value of x, add a random value (that is btwn -25 and 25)
  // and add it to our current value. make that value the new current value"
  x = x + random(-25, 25);
  y = y + random(-25, 25);

  if (x<0) x = width;
  if (y<0) y = height;
  if (x > width) x = 0;
  if (y > height) y=0;
}


//listener function
// when ever a key is pressed, 
// execute what is within the curly brackets
void keyPressed() {
  background(0);
}