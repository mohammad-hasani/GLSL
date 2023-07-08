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
  float c = 10.0;
  coord.x += sin(u_time)*c + cos(u_time * v1) * c;
  coord.y += cos(u_time)*c + sin(u_time * v2) * c;
  float color = 0.0;

  color += .01 * (abs(sin(u_time)) + 0.1) / length(coord);

  return color;
}

void main(){
  vec2 coord = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
  coord = coord * 1.0;

  float color = 0.0;
  for (int i=0; i < 100; i++)
  { 
    color += star(coord, random(vec2(coord.x, coord.y)), random(vec2(coord.y, coord.x)));
  }

  for (int i=0; i < 100; i++)
  { 
    color += star(coord, random(vec2(coord.y, coord.x)), random(vec2(coord.x, coord.y)));
  }

  vec3 col = vec3(random(vec2(coord.x, coord.y) * 1.4) * color, random(vec2(coord.x, coord.y) * 5.3) * color, random(vec2(coord.x, coord.y) * 9.2) * color);

  gl_FragColor = vec4(col, 1.0);
}
