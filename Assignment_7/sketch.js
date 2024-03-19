//All initialized variables
let mushroom;
let synth;
let notes = ['E6', 'G6', 'E7', 'C7', 'D7', 'G7'];
let mouseClickedBool = false; 

function preload() {
  mushroom = loadImage('assets/mushroom.png');
}

function setup() {
  createCanvas(400, 400);

  // Initialize FM synth
  synth = new Tone.FMSynth().toDestination();
}

function draw() {
  background(255);
  
  // Adjust volume based on whether the mouse is clicked
  if (mouseClickedBool) {
    synth.volume.value = 0; // Full volume when mouse is clicked
  } else {
    synth.volume.value = -100; // Mutes the volume when mouse is not clicked
  }
  
  if (mouseClickedBool) {
    imageMode(CENTER);
    image(mushroom, width / 2, height / 2);
  } else {
    textAlign(CENTER, CENTER);
    textSize(24);
    fill(0);
    text('Press me for a 1UP!', width / 2, height / 2);
  }
}
//When mouse is pressed, mushroom appears and 1UP sound is played
function mousePressed() {
  mouseClickedBool = true;
  play1UPSound();
}

//When mouse is released, mushroom disappears and all sound is muted
function mouseReleased() {
  mouseClickedBool = false;
}

function play1UPSound() {
  // Create an AmplitudeEnvelope
  let envelope = new Tone.AmplitudeEnvelope({
    attack: 1.5, // Set attack time in seconds
    decay: 0.2, // Set decay time in seconds
    sustain: 0.2, // Set sustain level (0 to 1)
    release: 0.1 // Set release time in seconds
  }).toDestination();

  // Play each note in the melody
  notes.forEach((note, index) => {
    // Play the note after a delay
    setTimeout(() => {
      synth.triggerAttackRelease(note, '16n');
    }, index * 130); // Adjusts the delay of each note 
  });

  // Applies the envelope to the synthesizer
  synth.envelope = envelope;
}

