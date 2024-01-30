function setup() {
  createCanvas(500, 500);
}

function draw() {
 background(0, 0, 110);

 let centerX = width / 2;
 let centerY = width / 2;
 
 fill(0, 100, 0);
 ellipse(centerX, centerY, 300, 300);


  stroke(255);
  strokeWeight(5);
  
  fill(255, 0, 0)
  drawStar(250, 250, 150, 220, 5);
  
}

function drawStar(x, y, size) {
  beginShape(); // Begin defining a shape

  let angle = TWO_PI / 5; // Angular separation between star points

  for (let a = -PI/2; a < TWO_PI - PI/2; a += angle) {
    let outerX = x + cos(a) * size; // Calculate outer point x-coordinate
    let outerY = y + sin(a) * size; // Calculate outer point y-coordinate
    vertex(outerX, outerY); // Set vertex at the outer point

    let innerX = x + cos(a + angle/2) * (size * 0.38); // Calculate inner point x-coordinate
    let innerY = y + sin(a + angle/2) * (size * 0.38); // Calculate inner point y-coordinate
    vertex(innerX, innerY); // Set vertex at the inner point
  }

  endShape(CLOSE); // End the shape and connect the last and first vertices
}
