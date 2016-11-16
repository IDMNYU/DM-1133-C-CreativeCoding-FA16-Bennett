var joinedText, rawTxt;
var beginNum, endNum; //
var story;
var delimiters = "  ,.!?:;"; //
var t;
var herd = []; // lots of bunnies
var superParsed;
var parsedArray;

function preload() {
  rawTxt = loadStrings("data/peterRabbit_text.txt");
}

function setup() {
  createCanvas(400, 400);
  background(255);

  joinedText = join(rawTxt, " "); // join all of the text into one looooong string
  beginNum = joinedText.indexOf("Once");
  //console.log(beginNum);
  endNum = joinedText.indexOf("THE END");
  //console.log(endNum);
  var endL = "THE END";
  story = joinedText.substring(beginNum, endNum + endL.length); // story is a string

  var rabbit = story.match(/Peter/gi); //match takes a regular expression and matches it
  // retrieves all of the matches and stores them in an array
  // returns that array
  //console.log(rabbit.length);

  var dude = story.match(/McGregor/gi); // g is for global and i is for case sensitivity
  //console.log(dude.length);
  // .search() // takes a regular expression and returns the index of the first instance

  var myStory = story.replace("Peter", "Katherine"); // only for the first instance
  console.log(myStory);
  var cleaned = myStory.replace(/Illustration/g, ' ');
  console.log(cleaned);
  superParsed = cleaned.replace(/[\[\]]/gi, " ");
  console.log(superParsed);
  parsedArray = splitTokens(superParsed, delimiters); // turns a string into an array based on delimiters
                                                      // when a delimiter is spotted, a new indice will begin
                                                      // ie, we will be splitting the story into words
                                                      // each word will be an array indice
  //console.log(parsedArray);

  t = searchText("Peter");
  console.log(t);
  if (t > 0) {
    for (var i = 0; i <= t; i++) {
      var b = new Bunny(random(0, width), random(0, height))
      herd.push(b);
    }
  }
}

function draw() {
  for (var i = 0; i < herd.length; i++) {
    herd[i].display(color(random(255), random(255), random(255)));
  }
  noLoop();
}

function searchText(word) {

  var total = 0;
  // now we can parse that array of words that we made above, and
  // see how they compare to the word we are looking for
  for (counter = 0; counter < parsedArray.length; counter++) {
    var t_loc = parsedArray[counter];
    if (t_loc == word) {
      total++;
    }
  }
  console.log("total is: ");
  console.log(total);
  return total;

}