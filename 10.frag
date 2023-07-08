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
  coord.x += sin(u_time * v2) + cos(u_time * v1);
  coord.y += cos(u_time * v2) + sin(u_time * v2);
  float color = 0.0;

  color += .02 * (abs(sin(u_time)) + 0.1) / length(coord);

  return color;
}

void main(){
  vec2 coord = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
  coord = coord * 1.0;

  float color = 0.0;
  // color += star(coord, 2.1, 5.1);
  // color += star(coord, 5.1, 1.2);
  // color += star(coord, 6.1, 3.5);
  // color += star(coord, 4.0, 7.5);
  // color += star(coord, 8.2, 0.3);
  color += star(coord, 9.97334119190748, 1.964227514269381);
color += star(coord, 4.014659291206495, 9.900110799603532);
color += star(coord, 7.808599716889204, 2.9160329189511405);
color += star(coord, 6.73118106944595, 8.686025036744331);
color += star(coord, 9.099992846203671, 0.3621732154089641);
color += star(coord, 3.452325234844502, 6.271731661535217);
color += star(coord, 4.474246109310819, 6.171405039824766);


  // for (int i=0; i < 10; i++)
  // { 
  //   color += star(coord, random(coord), random(coord));
  // }

  gl_FragColor = vec4(vec3(color), 1.0);
}
