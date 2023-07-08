#ifdef GL_ES
precision mediump float;
#endif

const float PI = 3.1415926535;

uniform vec2 u_resolution;
uniform float u_time;

float polygonshape(vec2 position, float radius, float sides){
	position = position * 2.0 - 1.0;
	float angle = atan(position.x, position.y);
	float slice = PI * 2.0 / sides;

	return smoothstep(radius + 0.01, radius, cos(floor(0.5 + angle / slice) * slice - angle) * length(position));
}

void main(){
	vec2 position = gl_FragCoord.xy / u_resolution;
	position *= 10.;
	vec3 color = vec3(0.0);

	float slice = sin(u_time);

	float polygon = polygonshape(fract(position), 0.6, slice);

	color = vec3(polygon);

	gl_FragColor = vec4(color, 1.0);
}
