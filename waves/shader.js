let theShader;

function preload()
{
  theShader = loadShader('sin.vert', 'sin.frag');
}

function setup()
{
  pixelDensity(1);

  createCanvas(windowWidth, windowHeight, WEBGL);
  noStroke();
}

function draw()
{
  theShader.setUniform('u_resolution', [width, height]);
  theShader.setUniform('u_time', millis() % (1000 * PI * 2) * 0.001);

  shader(theShader);

  rect(0, 0, width, height);
}

function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}