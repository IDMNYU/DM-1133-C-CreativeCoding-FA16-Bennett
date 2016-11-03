var table;
var bubbles = [];

function preload(){
  table = loadTable("data/data.csv", "header");
}

function setup() {
  createCanvas(680, 670);
  loadData();
}

function draw() {
  background(255);
  for(var i = 0; i < bubbles.length; i++){
    bubbles[i].display();
    bubbles[i].rollover(mouseX, mouseY);
  }
  
}

function loadData(){
  
  bubbles = [];
  
  for(var i = 0; i < table.getRowCount(); i++){
    var row = table.getRow(i);
    var x = row.get("x");
    var y = row.get("y");
    var d = row.get("diameter");
    var p = row.get("person");
    
    bubbles[i] = new Bubble(x, y, d, p);
 
  }
}











