function Bubble(x, y, diameter, s) {
  this.x = Number(x);
  this.y = Number(y);
  this.diameter = Number(diameter);
  this.name = s;
  this.over = false;

  // Checking if mouse is over the Bubble
  this.rollover = function(px, py) {
    var d = dist(px, py, this.x, this.y);
    if (d < diameter/2) {
      this.over = true; 
    } else {
      this.over = false;
    }
  }