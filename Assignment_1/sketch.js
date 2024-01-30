function setup() {
  createCanvas(600, 600);
  colorMode(HSB,360,100,100);
}

function draw() {
  background(220);
  noStroke();
  fill('black');
  circle(150,150,100);
  fill(200,90,40);
  circle(150,150,50);

  stroke(200,90,40);
  strokeWeight(25);
  line(200,200,400,400);

  stroke(0);
  strokeWeight(2);
  arc(300,300,200,200);

}
