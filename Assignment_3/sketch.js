//Declared the three instances of the Sprite class for my characters
let roundBoy1, roundBoy2, roundBoy3;

//Preload function; loads assets and sets up animations for all 3 characters
function preload() {
  //Initialize RoundBoy1
  roundBoy1 = new Sprite(200, 200, 80, 80);
  roundBoy1.spriteSheet = 'assets/RoundBoy.png';
  let animations1 = {
    stand: { row: 0, frames: 1 },
    walkRight: { row: 0, col: 1, frames: 8 },
    walkUp: { row: 5, frames: 6 },
    walkDown: { row: 5, col: 6, frames: 6 }
  };
  roundBoy1.anis.frameDelay = 8;
  roundBoy1.addAnis(animations1);
  roundBoy1.changeAni('walkRight');

  //Initialize RoundBoy2
  roundBoy2 = new Sprite(300, 100, 80, 80);
  roundBoy2.spriteSheet = 'assets/RoundBoy.png';
  let animations2 = {
    stand: { row: 0, frames: 1 },
    walkRight: { row: 0, col: 1, frames: 8 },
    walkUp: { row: 5, frames: 6 },
    walkDown: { row: 5, col: 6, frames: 6 }
  };
  roundBoy2.anis.frameDelay = 10;
  roundBoy2.addAnis(animations2);
  roundBoy2.changeAni('walkRight');

  //Initialize RoundBoy3
  roundBoy3 = new Sprite(100, 300, 80, 80);
  roundBoy3.spriteSheet = 'assets/RoundBoy.png';
  let animations3 = {
    stand: { row: 0, frames: 1 },
    walkRight: { row: 0, col: 1, frames: 8 },
    walkUp: { row: 5, frames: 6 },
    walkDown: { row: 5, col: 6, frames: 6 }
  };
  roundBoy3.anis.frameDelay = 12;
  roundBoy3.addAnis(animations3);
  roundBoy3.changeAni('walkRight');
}

//Setup function which creates the canvas
function setup() {
  createCanvas(400, 400);
}

//Draw function which shows the characters on the canvas
function draw() {
  background(0, 0, 30);

  //WASD traditional keyboard input which handles each character
  handleCharacterInput(roundBoy1, 'w', 'a', 's', 'd');
  handleCharacterInput(roundBoy2, 'w', 'a', 's', 'd');
  handleCharacterInput(roundBoy3, 'w', 'a', 's', 'd');

  // Draw characters
  roundBoy1.draw();
  roundBoy2.draw();
  roundBoy3.draw();
}

//Function to handle the keyboard input for the character movement
function handleCharacterInput(character, upKey, leftKey, downKey, rightKey) {
  if (kb.pressing(rightKey)) {
    walkRight(character);
  } else if (kb.pressing(leftKey)) {
    walkLeft(character);
  } else if (kb.pressing(upKey)) {
    walkUp(character);
  } else if (kb.pressing(downKey)) {
    walkDown(character);
  } else {
    stop(character);
  }
}

//Function for stopping the character movement (stand)
function stop(character) {
  character.vel.x = 0;
  character.vel.y = 0;
  character.changeAni('stand');
}

//Function to make the character walk to the right
function walkRight(character) {
  character.changeAni('walkRight');
  character.vel.x = 1;
  character.scale.x = 1;
  character.vel.y = 0;
}

//function to make the character walk to the left
function walkLeft(character) {
  character.changeAni('walkRight');
  character.vel.x = -1;
  character.scale.x = -1;
  character.vel.y = 0;
}

//Function to make the character walk up
function walkUp(character) {
  character.changeAni('walkUp');
  character.vel.y = -1;
  character.vel.x = 0;
}

//Function to make the character walk down
function walkDown(character) {
  character.changeAni('walkDown');
  character.vel.y = 1;
  character.vel.x = 0;
}

