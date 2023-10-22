precision mediump float;

// grab texcoords from the vertex shader
varying vec2 vTexCoord;

// our texture coming from p5
uniform sampler2D tex0;
uniform float mouseX;
uniform float mouseY;
uniform float time;


void main() {

  vec2 uv = vTexCoord;
  // the texture is loaded upside down and backwards by default so lets flip it
  uv = 1.0 - uv;

  // get the webcam as a vec4 using texture2D
  vec4 tex = texture2D(tex0, uv);


  // here we will use the step function to convert the image into black or white
  // any color less than mouseX will become black, any color greater than mouseX will become white
  float threshr = step(mouseX, tex.r);
  float threshg = step(mouseY, tex.g);
  float threshb = step(time, tex.b);

  // output the threshold value in all three rgb color channels
  gl_FragColor = vec4(threshr, threshg, threshb, 1.0);
}