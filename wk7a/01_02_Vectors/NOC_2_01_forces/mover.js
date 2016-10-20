// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

var Mover = function() {
  this.mass = 1;
  this.position = createVector(30, 30);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);

  this.applyForce = function(force) {
    var f = p5.Vector.div(force, this.mass);
    this.acceleration.add(f);
  }
    
  this.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);  // <--- zero it out so that it doesn't keep getting larger
  }

  this.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 127);
    ellipse(this.position.x, this.position.y, 48, 48);
  }

  this.checkEdges = function() {
    if (this.position.x > width) {  // are we too far to the right?
      this.position.x = width; // keep us at that right edge
      this.velocity.x *= -1;  // and flip the velocity so we start moving left
    } else if (this.position.x < 0) {
      //this.velocity.x *= -1;
      constrain(this.velocity, 0, 5);
      this.position.x = 0;
    }
    if (this.position.y > height) {
      this.velocity.y *= -1;
      this.position.y = height;
    }
  }

}



