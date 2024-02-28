//Creates a Tone.Players object to load and play multiple audio files located in the assets folder

let sounds = new Tone.Players ({
  'Background1' : 'assets/BackgroundMusic1.mp3',
  'Background2' : 'assets/BackgroundMusic2.mp3',
  'Background3' : 'assets/BackgroundMusic3.mp3',
  'Background4' : 'assets/BackgroundMusic4.mp3',
  });
  
  //Creates a reverb effect with a room size of 0.2 and navigates it to the audio destination
  let revAmt = new Tone.JCReverb(0.2).toDestination();

  //Creates a tremolo effect with frequency of 9Hz and depth of 0.75.
  let tremAmt = new Tone.Tremolo(9, 0.75).toDestination().start();
  
  //Defines variables for the buttons/sliders
  let button1, button2, button3, button4;
  let sliderTrem, sliderRev;
  
  //Connects audio to reverb; reverb to tremolo; and tremolo to the audio destination
  sounds.connect(revAmt);
  revAmt.connect(tremAmt);
  tremAmt.toDestination();
  
  function setup() {
    createCanvas(400, 800);
  
    //Clickable buttons; plays background music when pressed
    button1 = createButton('BackgroundMusic1');
    button1.position(25, 100);
    button1.mousePressed(() => sounds.player("Background1").start());
  
    button2 = createButton('BackgroundMusic2');
    button2.position(225, 100);
    button2.mousePressed(() => sounds.player("Background2").start());
  
    button3 = createButton('BackgroundMusic3');
    button3.position(25, 300)
    button3.mousePressed(() => sounds.player("Background3").start());
  
    button4 = createButton('BackgroundMusic4');
    button4.position(225, 300);
    button4.mousePressed(() => sounds.player("Background4").start());
  
    //Slider that controls the amount of delay time
    sliderRev = createSlider(0, 1, 0, 0.05);
    sliderRev.position(100, 400);
    sliderRev.input(() => revAmt.roomSize.value = sliderRev.value());
  
    //Slider that controls the frequency of the tremolo
    sliderTrem = createSlider(0, 10, 0, 0.25);
    sliderTrem.position (100, 500);
    sliderTrem.input(() => tremAmt.frequency.value = sliderTrem.value());

    //Label for the Reverb Slider
    let labelRev = createP('Reverb (Room Size)');
    labelRev.position(100, 370);
    labelRev.style('color', 'white');

    // Label for the tremolo slider
    let labelTrem = createP('Tremolo (Frequency)');
    labelTrem.position(100, 470);
    labelTrem.style('color', 'white');
    
  }
  
  //Background for my project; set to a dark gray 
  function draw() { 
    background(25);
  }