//Shiffman https://www.youtube.com/watch?v=cXgA1d_E-jY
var bird;
var bars = [];

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  bars.push(new Block());
}

function draw() {
  background(0);

  for (var i = bars.length - 1; i >= 0; i--) {  //backwards for loop
    bars[i].show();
    bars[i].update();

    if (bars[i].hits(bird)) { //detecting collision
      console.log("hit");

    }

    if (bars[i].offscreen()) {  // if we are off screen, cut it out of the array
      bars.splice(i, 1);
    }
  }

  bird.update();
  bird.show();






  if (frameCount % 100 === 0) {
    bars.push(new Block());
  }

}

function keyPressed() {
  if (key == ' ') {
    console.log("space");
    bird.up();
  }
}