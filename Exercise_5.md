 Exercise 5

 MonsterX

 Take 2 monsters from 2 students in this class, in addition to your own monster. You are working with 3 monsters in total. One person you've been assigned to work with, one your own code and the other student's code yet to be identified (which will be in-class on Tuesday).

 1.) Translate each monster from Processing code to P5.js

 2.) Make each monster it's own function with the ability to pass parameters to the function to make it unique.
 		- You could even create functions for different body parts. Then have the main Monster function call all of those parts. 

 3.) Call each monster twice. Those two instances of the monster must be unique. Ways to make it unique:
 		- color
 		- size/scale
 		- location
 		- combine parts of the monster to one monster... Frankenmonster! This works especially well if you broke the monster down into smaller functions.


4.) Then make them interactive on input. They could move and/or appear. They could move around the screen, they could wink, open their mouth, dance, etc. Think about how you could craft this to be calculated (versus random chaos).


Make sure to attribute the original code to the students and to comment each line of their code!

I want to see you both work together on this assignment. Not one person pulling all of the weight. Not copying each other's work. You both must hand in the first part of the assignment individually and those files must be different. And different beyond variable names and locations. They can be similar, but they must be different and unique.

I'd suggest working together - either physically in the same space, or remotely in the same cyber space. Start with a direct message to them on slack to coordinate.

Check out the demo code whipped up, using Amy's monster. Note that to effect the coordinates of the monster, I must apply a variable to each of the x coordinates and each of the y coordinates for the graphics.

Requirements:

- custom functions
- passing different parameters to the custom function to make them unique
- P5.js

Focus on those things above. Then work on movement + interactivity. Work in this order!

Below is Amy's code. You can check out [her repo](https://github.com/asollee/Exercise-1) for the original formate if this is too confusing. Note that this is in Processing, not P5 as you are required to do. This is a way to tackle functions. You could do step 2, then step 1 or step 1 then step 2. Which ever works for you.



void setup () {
  size (600, 600);
  background (20, 10, 50);
}

void draw () {
  /*
  // HORNS
  noStroke();
  //fill(0, 0, 225);
  fill(h);
  triangle(200, 150, 200, 50, 275, 100);
  triangle(325, 100, 400, 50, 400, 150);
  
  // TAIL
  noFill();
  stroke(175);
  //noStroke();
  strokeWeight(4);
  //line(50, 325, 150, 325);
  //line(75, 510, 200, 500);
  bezier(50, 325, 150, 325, 75, 510, 220, 500);

  noStroke();
  fill(225, 225, 10);
  quad(20, 325, 40, 315, 50, 325, 40, 335); 

  /* FAILED ATTEMPT
   //stripes?
   stroke(255);
   arc(200, 400, 225, 10, PI+QUARTER_PI, CHORD);
   */

/*
  // BODY
  stroke(0);
  strokeWeight(5);
  fill(bodyColor); 
  ellipse(300 + xLoc, 400, 225, 275);

  fill(100, 50);
  ellipse(300 + xLoc, 425, 180, 200);

  fill(255);
  ellipse(250 + xLoc, 400, 40, 40);
  ellipse(350 + xLoc, 400, 40, 40);


  // HEAD lightning design
  stroke(225, 225, 0);
  strokeWeight(1);
  line(290 + xLoc, 200, 290, 175);
  line(290+ xLoc, 175, 270, 155);
  line(270 + xLoc, 155, 290, 135);
  line(290 + xLoc, 135, 270, 115);
  line(310 + xLoc, 200, 310, 175);
  line(310 + xLoc, 175, 330, 155);
  line(330 + xLoc, 155, 310, 135);
  line(310 + xLoc, 135, 330, 115);

  // HEAD
  stroke(0);
  fill(0, 100);
  ellipse(300 + xLoc, 200, 250, 225);

  // EYES
  stroke(225, 225, 0);
  strokeWeight(5);
  fill (225, 0, 0);
  ellipse(250 + xLoc, 200, 50, 50);
  ellipse(350 + xLoc, 200, 50, 50);


  // MOUTH
  noStroke();
  fill(220);
  ellipse(300 + xLoc, 250, 80, 80);

  fill(200, 0, 0, 50);
  rect(280 + xLoc, 230, 40, 20, 7);

  //screw whiskers
  point(270 + xLoc, 240);
  point(270 + xLoc, 250);
  point(290 + xLoc, 240);
  point(290 + xLoc, 250);

  // FEET
  fill(240);
  ellipse(250 + xLoc, 520, 60, 45);
  ellipse(350 + xLoc, 520, 60, 45);

*/



  /* FAILED ATTEMPT
   stroke(225);
   strokeWeight(3);
   curve(15, 100, 50, 100, 52, 200, 60, 220);
   // curve(250, 420, 200, 300, 201, 301, 100, 220);
   // curve(10, 40, 250, 350, 200, 400, 250, 450);
   // curve(250, 420, 200, 375, 220, 350, 175, 300); 
   
   */
  robo(255, 0, color(0, 0, 255)); // killer kitty
  translate(400, 200);
  scale(0.5);
  robo(color(127, 200, 45),0, color(255, 0, 0)); //sid
  //robo(color(127, 200, 45), 200);
  
}

void robo(color bodyColor, int xLoc, color horns){
  horns(horns);
  
  // TAIL
  noFill();
  stroke(175);
  //noStroke();
  strokeWeight(4);
  //line(50, 325, 150, 325);
  //line(75, 510, 200, 500);
  bezier(50, 325, 150, 325, 75, 510, 220, 500);

  noStroke();
  fill(225, 225, 10);
  quad(20, 325, 40, 315, 50, 325, 40, 335); 

  /* FAILED ATTEMPT
   //stripes?
   stroke(255);
   arc(200, 400, 225, 10, PI+QUARTER_PI, CHORD);
   */

  // BODY
  stroke(0);
  strokeWeight(5);
  fill(bodyColor); 
  ellipse(300 + xLoc, 400, 225, 275);

  fill(100, 50);
  ellipse(300 + xLoc, 425, 180, 200);

  fill(255);
  ellipse(250 + xLoc, 400, 40, 40);
  ellipse(350 + xLoc, 400, 40, 40);


  // HEAD lightning design
  stroke(225, 225, 0);
  strokeWeight(1);
  line(290 + xLoc, 200, 290, 175);
  line(290+ xLoc, 175, 270, 155);
  line(270 + xLoc, 155, 290, 135);
  line(290 + xLoc, 135, 270, 115);
  line(310 + xLoc, 200, 310, 175);
  line(310 + xLoc, 175, 330, 155);
  line(330 + xLoc, 155, 310, 135);
  line(310 + xLoc, 135, 330, 115);

  // HEAD
  stroke(0);
  fill(0, 100);
  ellipse(300 + xLoc, 200, 250, 225);

  // EYES
  stroke(225, 225, 0);
  strokeWeight(5);
  fill (225, 0, 0);
  ellipse(250 + xLoc, 200, 50, 50);
  ellipse(350 + xLoc, 200, 50, 50);


  // MOUTH
  noStroke();
  fill(220);
  ellipse(300 + xLoc, 250, 80, 80);

  fill(200, 0, 0, 50);
  rect(280 + xLoc, 230, 40, 20, 7);

  //screw whiskers
  point(270 + xLoc, 240);
  point(270 + xLoc, 250);
  point(290 + xLoc, 240);
  point(290 + xLoc, 250);

  // FEET
  fill(240);
  ellipse(250 + xLoc, 520, 60, 45);
  ellipse(350 + xLoc, 520, 60, 45);





  /* FAILED ATTEMPT
   stroke(225);
   strokeWeight(3);
   curve(15, 100, 50, 100, 52, 200, 60, 220);
   // curve(250, 420, 200, 300, 201, 301, 100, 220);
   // curve(10, 40, 250, 350, 200, 400, 250, 450);
   // curve(250, 420, 200, 375, 220, 350, 175, 300); 
   */
}

void horns(color h){
  // HORNS
  noStroke();
  //fill(0, 0, 225);
  fill(h);
  triangle(200, 150, 200, 50, 275, 100);
  triangle(325, 100, 400, 50, 400, 150);
}