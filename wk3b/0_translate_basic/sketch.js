var blueish, taupe, magneta, lime, rose, marine, prince;
var r_width = 50;

function setup() {
  blueish = color(101, 165, 232);
  taupe = color(232, 216, 193);
  magneta = color(222, 78, 229);
  lime = color(108, 255, 56);
  rose = color(255, 175, 237);
  marine = color(49, 89, 232);
  prince = color(137, 78, 229);
  //angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);
  background(blueish); // med blue
}

function draw() {
  noStroke();
  fill(taupe);
  rect(width/2 - r_width + r_width/2, height/2 + r_width/2 - r_width, r_width, r_width);
  
  /*
  translate(100, 0);
  fill(magneta);
  rect(width/2 - r_width + r_width/2, height/2 + r_width/2 - r_width, r_width, r_width);
  */
  
  /*
  translate(0, 100);
  fill(lime);
  rect(width/2 - r_width + r_width/2, height/2 + r_width/2 - r_width, r_width, r_width);
  */
  
  /*
  translate(-200, -100);
  fill(rose);
  rect(width/2 - r_width + r_width/2, height/2 + r_width/2 - r_width, r_width, r_width);
  */
  
  /*
  translate(0,-100);
  fill(marine, 100);
  rect(width/2 - r_width + r_width/2, height/2 + r_width/2 - r_width, r_width, r_width);
  */
  
/*
  translate(300, -100);
  rotate(radians(45));
  fill(prince);
  rect(width/2 - r_width + r_width/2, height/2 + r_width/2 - r_width, r_width, r_width);
  */
}