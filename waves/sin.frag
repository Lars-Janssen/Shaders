#define PI 3.1415

precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

void main()
{
    vec2 st = gl_FragCoord.xy/u_resolution.xy;

    if (st.y + 0.1 * sin(st.x * 15.0 + u_time) < 0.5) gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
    else gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
    
}