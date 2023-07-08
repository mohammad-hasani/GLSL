#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;


float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float random2(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(54.9898, 32.233))) * 54353.5453123);
}

float star(vec2 coord, float v1, float v2)
{
  coord.x += sin(u_time * v2) + cos(u_time * v1);
  coord.y += cos(u_time * v2) + sin(u_time * v2);
  float color = -0.0;

  color += 100. * (abs(sin(u_time)) + .1) / (length(coord) *20.0);

  return color;
}


float star2(vec2 coord){
    vec2 mousePos = (2.0 * u_mouse.xy - u_resolution.xy) / u_resolution.y;
    float dist = length(coord - mousePos);
    dist = step(.4, dist);
    return dist;
}

float star3(vec2 coord)
{
  vec2 mousePos = (2.0 * u_mouse.xy - u_resolution.xy) / u_resolution.y;
  coord = coord - mousePos;
  coord /= 7.0;
  float color = 0.0;

  color += 100. * (abs(sin(u_time)) + .1) / (length(coord) *20.0);

  return color;
}

void main(){
  vec2 coord = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
  coord = coord * 1.0;

  float color = 0.0;

  float speed = 3.0;

  for (int i = 0 ; i < 215; i++)
  {
    color -= star(coord, random(vec2(i)) / speed, random2(vec2(i)) / speed);
  }
  for (int i = 200 ; i < 400; i++)
  {
    color += star(coord, random(vec2(i)) / speed, random2(vec2(i)) / speed);
  }

  float dist = star2(coord);

  color += star3(coord);

  gl_FragColor = vec4(vec3(color), 1.0);
}
