//Declared variables for colors and palette width
let red, orange, yellow, green, cyan, blue, magenta, brown, white, black;
let currentColor;
let paletteWidth = 30;
let colors;

//Created a canvas 800x800 pixels in size
function setup() {
  createCanvas(800, 800);
 
  //Created colors using Hexcodes for each
  red = color('#FF0000');
  orange = color('#FF8000');
  yellow = color('#FFFF00');
  green = color('#00FF00');
  cyan = color('#00FFFF');
  blue = color('#0000FF');
  magenta = color('#FF00FF');
  brown = color('#6F4E37');
  white = color('#FFFFFF')
  black = color('#000000');

  //Current color initialized to black
  currentColor = black;

  //Created an array of all the colors
  colors = [red, orange, yellow, green, cyan, blue, magenta, brown, white, black];

  drawColorPalette();
}

function drawColorPalette() {
  //Loops through each color in the array
  for (let i = 0; i < colors.length; i++) {
    //Fills a rectangle with the current color
    fill(colors[i]);
    noStroke();
    rect(0, i * 30, paletteWidth, 30);

    //If the current color is selected, draws a white border around it
    if (colors[i] === currentColor) {
      stroke(255);
      noFill();
      rect(-2, i * 30 - 2, paletteWidth + 4, 32);
    }

  }

}

function mousePressed() {

  //If the mouse is within the canvas
  if (mouseX > paletteWidth && mouseX < width && mouseY > 0 && mouseY < height) {
    //Draws a point with the current color
    stroke(currentColor);
    strokeWeight(10);
    point(mouseX, mouseY);
  } else if (mouseX < paletteWidth) { //If the mouse is on the color palette
    //Checks which color is selected in the palette
    for (let i = 0; i < colors.length; i++) {
      if (mouseY > i * 30 && mouseY < (i + 1) * 30) {
        //Sets the selected color as the current 
        currentColor = colors[i];
        //Redraws the palette to reflect the selected color
        drawColorPalette();
        break;
      }
    }
  }
}

function mouseDragged() { 
  //If the mouse is within the canvas
  if (mouseX > paletteWidth && mouseX < width && mouseY > 0 && mouseY < height) {
    //Draws a line with the current color from the previous position of the mouse to the current.
    stroke(currentColor);
    strokeWeight(10);
    line(pmouseX, pmouseY, mouseX, mouseY);
  } else {
    return;
  }
}
