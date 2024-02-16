let characterDown, characterLeft, characterRight;
let currentCharacter;

function preload() {
  // Load your sprite images
  characterDown = loadImage('character_down.png');
  characterLeft = loadImage('character_left.png');
  characterRight = loadImage('character_right.png');
}

function setup() {
  createCanvas(400, 400);
  currentCharacter = characterDown;  // Initial direction
}

function draw() {
  background(220);
  image(currentCharacter, mouseX, mouseY, 50, 50); // Display the current character image
}

function keyPressed() {
  // Change the current character based on the key pressed
  if (key === 'w') {
    currentCharacter = characterUp;
  } else if (key === 'a') {
    currentCharacter = characterLeft;
  } else if (key === 's') {
    currentCharacter = characterDown;
  } else if (key === 'd') {
    currentCharacter = characterRight;
  }
}

function keyReleased() {
  // If a key is released, set the current character back to the default facing direction
  currentCharacter = characterDown;
}
