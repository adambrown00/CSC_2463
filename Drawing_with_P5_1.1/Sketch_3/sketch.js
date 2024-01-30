function setup() {
  createCanvas(700, 350);
}

function draw() {
  background(0);

  noStroke();
  fill(255, 255, 0);
  ellipse(175, 175, 298, 298);


 fill(0);
  arc(175, 175, 300, 300, -PI - QUARTER_PI, -HALF_PI - QUARTER_PI);

  fill(255, 0, 0);
  rect(425, 145, 250, 170);

  ellipse(550, 150, 250)
  fill(255, 0, 0);

  fill(255);
  ellipse(485, 150, 80)
  ellipse(615, 150, 80)
  
  fill(0, 0, 255);
  ellipse(485, 150, 50)
  ellipse(615, 150, 50)

}
