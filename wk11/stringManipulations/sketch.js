
var beginNum, endNum; //

var delimiters = "  ,.!?:;"; //

var t;
var herd = []; // lots of bunnies

function preload() {
  rawTxt = loadStrings("data/peterRabbit_text.txt");
}

function setup() {
  createCanvas(400, 400);
  background(255);
  
  
  t = searchText("....");
  //console.log(t);
  if (t > 0) {
    for (var i = 0; i <= t; i++) {
      var b = new Bunny(random(0, width), random(0, height))
      herd.push(b);
      
    }
  }
}

function draw() {
  for(var i = 0; i < herd.length; i++){
    herd[i].display(color(random(255),random(255),random(255) ));
  }
  noLoop();
}

function searchText(word) {

  var total = 0;
  for (counter = 0; counter < parsedStory.length; counter++) {
    var t = parsedStory[counter];
    if (t == word) {
      total++;
    }
  }
  //console.log(total);
  return total;
  
}