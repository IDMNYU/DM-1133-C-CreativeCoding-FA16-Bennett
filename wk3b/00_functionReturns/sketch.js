var blueish, taupe, magneta, lime, rose, marine, prince;
var x, y;
var previousC, currentC;
var button;


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
  previousC = color(255, 255, 255);
  currentC = color(0, 0, 0);

  x = width/2;
  y = height/2;
}

function draw() {
  var answer;
  
  if(mouseIsPressed){
    answer = diceRoll(1);
    console.log(answer);
  }

  if(answer < .30){
    //console.log("taupe");
    currentC = taupe;
    x+=10;
  }
 
  else if((answer > .30) && (answer < .6)){
    //console.log("magneta");
    currentC = magneta;
    x -=10;
  }

  else if(answer > .6 && answer < .9){
    //console.log("lime");
    currentC = lime;
    y -=10;
  }

  else if (answer > .9){
    //console.log("prince");
    currentC = prince;
    y +=10;
  }

 checker(x, y);
 //var coords = checker(x, y);
 background(currentC);
 //guy(coords[0], coords[1], currentC);
 guy(x, y, currentC);



}

function checker(lat, long){
  if(lat > windowWidth + 10) {
    lat = 0;
  }
  else if (lat < -10) {
    lat = windowWidth - 10;
  }
  else if(long > windowHeight+10){ 
   long = 0;
   //console.log("long is: " );
   //console.log(long);
  }
  
  else if(long <= 0){ 
    long = windowHeight - 10; 
    
    //console.log("long is: " );
    //console.log(long);
  }
 
  //return [lat, long];
}

function guy(a, b, c){
  var x = a;
  var y = b;
  var len = 20;
  fill(previousC);
  ellipse(x, y, len, len);
  /*
  if(previousC != c) {
    previousC = c;
  }
  else {

  }*/
  previousC = c;
  //return previousC;
}

function diceRoll(r1){
  var choice = random(r1);
  return choice;

}