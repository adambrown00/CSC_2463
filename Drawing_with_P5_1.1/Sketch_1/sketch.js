function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(0, 238, 0)  

  let centerX = width / 2;
  let centerY = height / 2;

  let shapeSize = 160;

  fill(255);
  ellipse(centerX * 0.95 - shapeSize / 2, centerY, shapeSize, shapeSize);

  fill(255);
  rect(centerX * 1.05, centerY - shapeSize / 2, shapeSize, shapeSize);

  strokeWeight(2);
}
