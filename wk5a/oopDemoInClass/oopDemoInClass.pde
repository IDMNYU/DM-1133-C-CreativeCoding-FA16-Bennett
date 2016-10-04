Monster fred;  // declaring the variable fred as Monster. giving fred a data type
Monster sally;

void setup(){
  size(800, 800);
  background(255);
                         // calling the class constructor
  fred = new Monster(20, 150);  // a new instance of the monster, as fred
  sally = new Monster(200, 50);
  
  fred.display();
  sally.display();
}



void draw(){
  background(255);
  
  fred.move(1, 0);
  fred.update();  // dot synatx is how you execute methods of a class
  fred.display();
  
}
  