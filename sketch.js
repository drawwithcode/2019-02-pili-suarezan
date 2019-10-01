var colores = ["white", "pink", "peach", "orange", "violet"];
var colorbng = ["white", "grey", "black"];

function preload() {
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  noStroke();

  // put setup code here
}

function draw() {
  for (var p = 10; p < windowWidth; p += 20) {
    for (var i = 10; i < windowHeight; i += 20) {


      var selector = floor(random() * colores.length);
      var colorV = colores[selector];

      var selector = floor(random() * colorbng.length);
      var colorZ = colorbng[selector];


      ellipse(p, i, 40);
      if (mouseIsPressed) {

        fill(color(colorZ));
      } else {
        fill(color(colorV));
      }
    }
  }


  rect(windowWidth / 2 - 90, windowHeight / 2 - 60, 150, 80);
  stroke("white");

  let palabra = "C L I C K";
  fill("grey");
  textFont("arial");
  textSize(30);
  text(palabra, windowWidth / 2 - 75, windowHeight / 2 - 40, 150, 80);


}
