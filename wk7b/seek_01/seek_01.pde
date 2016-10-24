Agent ned;
Enemy irs;
//PVector m = new PVector(mouseX, mouseY); // put this in draw() so it gets updated

void setup() {
  size(400, 400);
  background(0);
  // calling the class constructor
  ned = new Agent(width/2, height/2);  // making a new object
  irs = new Enemy(width/2, height/2, 1.0); // making a new object
}

void draw() {
  background(0);
  PVector m = new PVector(mouseX, mouseY);

  //ned.seek(m);
  ned.arrive(m);  // a vector is getting passed in here
  ned.update();  // excuting a method (aka a functin within a class)
  ned.display();

  irs.update(ned); // passing in an Agent aka an object
  irs.display();
}