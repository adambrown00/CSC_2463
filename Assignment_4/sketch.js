let backgroundImage;
let bugImages = [];
let bug;
let allBugs;
let directionAngles = [0, 90, 180, 270];
let topBorder, bottomBorder, leftBorder, rightBorder;
let alive;
let dead;
let squished;
let score;
let gameTime;
let gameState;
let time;
let timerIsDone;
let startTime;
let bugsToSpawn = 15;





function preload() {
  backgroundImage = loadImage('assets/background.webp');

  for (i = 0; i < 9; i++) {
    bugImages[i] = loadImage('assets/Bug' + i + '.png');
  }
}

function setup() {
  createCanvas(800, 800); 

  allBugs = new Group();
  score = 0;
  gameTime = 30;
  gameState = 'start'
  timerIsDone = false;
  borders();
}

function draw() {
  background(backgroundImage); 

  if (gameState === 'start') {
    startScreen();
    if (mouseIsPressed) {
      moreBugs(15);
      startTime = millis();
      gameState = 'play';

    }
  } else if (gameState === 'play') { 
    timer();
    push();
    textSize(25);
    text(`Time Remaining: ${gameTime}`, 30, 45);
    text(`Bugs Squished: ${score}`, 30, 75 );
    pop();

    allBugs.overlap(allBugs);

    allBugs.forEach(function(e) {
    if (e.mouse.pressed()) {
      if (e.isDead === false) {
        e.isDead = true;
        e.ani = 'dead';
        e.vel.x = 0;
        e.vel.y = 0;
        e.life = 60;
        score++;
      }
    }

    if (allBugs.size() === 0) {
      
      moreBugs();
    }

    if (e.position.x < 0 || e.position.x > width) {
        e.velocity.x *= -1;
        e.rotation = (e.rotation + 180) % 360;

    }
    if (e.position.y < 0 || e.position.y > height) {
        e.velocity.y *= -1; 
        e.rotation = (e.rotation + 180) % 360;
    }
  });


    if (timerIsDone === true) {
      allBugs.remove();
      gameState = 'end';
    }

  } else if (gameState === 'end') {
    endScreen();
  }
}

function moreBugs() {

  
  for (let i = 0; i < bugsToSpawn; i++) {
    bug = new Sprite(random(50, 750), random(50, 750), 50, 50);
    allBugs.add(bug);
    bug.isDead = false;

    alive = bug.addAni('alive', bugImages[0], bugImages[1], bugImages[2], bugImages[3], bugImages[4], bugImages[5], bugImages[6], bugImages[7]);

    dead = bug.addAni('dead', bugImages[8]);

    bug.ani = 'alive';
    bug.rotation = random(directionAngles);
    
    switch (bug.rotation) {
      case 0:
        bug.velocity.y = -2;
        break;
      case 90:
        bug.velocity.x = 2;
        break;
      case 180:
        bug.velocity.y = 2;
        break;
      case 270:
        bug.velocity.x = -2;
        break;
      default:
        bug.rotation = 0;
        bug.velocity.y = -2;
        break;
    }

    bug.position.x -= bug.width / 2;
    bug.position.y -= bug.height / 2;
  }
}



function startScreen() {
  push();
  fill('BROWN')
  stroke(0);
  strokeWeight(6);
  rect(width / 2 - 325, height / 2 - 175, 650, 350)

  noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text(`OH NO! There's a bug infestation!\nClick as many bugs as you can before time runs out!`, width / 2, height / 2 - 100);
  pop();
}

function endScreen() {
  push();
  fill('BROWN')
  stroke(0);
  strokeWeight(6);
  rect(width / 2 - 325, height / 2 - 175, 650, 350)

  noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(20);
  text(`And that's time!\nYou squished ${score} bugs!`, width / 2, height / 2 - 100);
  pop();
}

function timer() {
  gameTime = 30 - int((millis() - startTime) / 1000);
  if (gameTime <= 0) {
    timerIsDone = true;
    gameTime = 0;
  }
  return gameTime;
}  


function borders() {
  topBorder = new Sprite(width / 2, -150, width, 30);
  bottomBorder = new Sprite(width / 2, height + 150, width, 30);
  leftBorder = new Sprite(-150, height / 2, 30, height);
  rightBorder = new Sprite(width + 150, height / 2, 30, height);
}

function moveToTop(item) {
  item.y = -100;
  item.rotation = 180;
  item.velocity.y = -3;
}

function moveToBottom(item) {
  item.y = height + 100;
  item.rotation = 0;
  item.velocity.y = 3;
}

function moveToLeft(item) {
  item.x = -100;
  item.rotation = 90;
  item.velocity.x = -3;
}

function moveToRight(item) {
  item.x = width + 100;
  item.rotation = 270;
  item.velocity.x = 3;
}



