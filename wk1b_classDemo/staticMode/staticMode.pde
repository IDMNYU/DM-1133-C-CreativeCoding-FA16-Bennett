

// STATIC MODE

size(400, 400);
background(0, 255, 0); // RGB  // 0 --> 255
// ellipse(x, y, h, w)
/*
this is going to make me an ellipse
that doesn't have a stroke
and is purple on the inside
*/
noStroke();
fill(127, 0, 127);
ellipse(width/2, height/2, 50, 100);

stroke(0);
strokeWeight(4);
fill(255);
rect(0, 50, 300, 50);