//Creates a polyphonic synthesizer and pitch shifter
let synth = new Tone.PolySynth(Tone.Synth);
let bend = new Tone.PitchShift();

//Initializes the pitch of the pitch bender to 0
bend.pitch = 0;

//Connects the synth to the pitch shifter, and the pitch shifter to the audio's destination
synth.connect(bend);
bend.toDestination();

//Creates a canvas of dimensions 400x400.
function setup() {
  createCanvas(400, 400);

  //Creates a slider for the pitch shifter; ranges from 0-12, with an initial value of 0 and increment of 0.1
  pitchShiftSlider = createSlider(0, 12, 0, 0.1);
  pitchShiftSlider.position(120, 200);

  //Updates the pitch of the pitch shifter when the slider is moved
  pitchShiftSlider.mouseMoved(() => bend.pitch = pitchShiftSlider.value());

  
}

//Defines a mapping of keys pressed to musical notes.
let notes = {
  'a' : 'F4',
  's' : 'G4',
  'd' : 'A4',
  'f' : 'Bb4',
  'j' : 'C5',
  'k' : 'D5',
  'l' : 'E5',
  ';' : 'F5'

}

//When a key is pressed, a sound is triggered and a note is played.
function keyPressed() {
  let playNotes = notes[key];
  synth.triggerAttack(playNotes);  
}

//Stops the note after one of the key's are released.
function keyReleased() {
  let playNotes = notes[key];
  synth.triggerRelease(playNotes, '+0.03');
}

//Changes color of background, provides and aligns the text on the canvas.
function draw() {
  background(0, 200, 125);
  text ("AB's Synthesizer\nTo Play Notes Press (a, s, d, f, j, k, l, ;)", 200, 100);

  textSize(16);
  textAlign(CENTER);
  text("Pitch Shift", width / 2, 190);
}

