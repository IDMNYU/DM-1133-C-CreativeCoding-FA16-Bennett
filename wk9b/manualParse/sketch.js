function setup() {
  
}

function draw() {
  
}

function loadData() {
  
  var html = join(lines, ""); 

  
  var start = "<time itemprop=\"duration\" datetime=\"PT139M\">";
  var end = "</time>";
  runningtime = giveMeTextBetween(html, start, end).trim();

  
  start = "<link rel='image_src' href=\"";
  end = "\">";
  var imgUrl = giveMeTextBetween(html, start, end);
  poster = loadImage(imgUrl);
}