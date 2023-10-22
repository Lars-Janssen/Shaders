
let theShader;
let cam;

function preload(){
  camShader = loadShader('threshold.vert', 'threshold.frag');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();

  cam = createCapture(VIDEO);
  cam.size(windowWidth, windowHeight);
  cam.hide();

}

function draw() {  
  shader(camShader);

  camShader.setUniform('tex0', cam);

  camShader.setUniform('mouseX', mouseX/width);
  camShader.setUniform('mouseY', mouseY/height);
  camShader.setUniform('time', (millis() % 4000 / 4000))

  // rect gives us some geometry on the screen
  rect(0,0,width, height);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}