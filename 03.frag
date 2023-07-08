#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;


float random(vec2 st)
{
    return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
}

float star(vec2 coord, float v1, float v2)
{
  coord.x += sin(u_time) + cos(u_time * v1);
  coord.y += cos(u_time) + sin(u_time * v2);
  float color = 0.0;

  color += .05 * (abs(sin(u_time)) + 0.1) / length(coord);

  return color;
}

void main(){
  vec2 coord = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
  coord = coord * 2.0;

  float color = 0.0;
  // color = star(coord, 2.1, 1.6);
  for (int i=0; i < 10; i++)
  { 
    color += star(coord, random(coord), 3.4);
  }

  gl_FragColor = vec4(vec3(color), 1.0);
}
