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
  // color += star(coord, 2.1, 5.1);
  // color += star(coord, 5.1, 1.2);
  // color += star(coord, 6.1, 3.5);
  // color += star(coord, 4.0, 7.5);
  // color += star(coord, 8.2, 0.3);
 color += star(coord, 0.12718399610798936, 0.8909515105654773);
color += star(coord, 0.9913634486116661, 0.5996903795573504);
color += star(coord, 0.9213819066918729, 0.48057929997011795);
color += star(coord, 0.6086967285070333, 0.5605190242974597);
color += star(coord, 0.10034326684100192, 0.9480111388065788);
color += star(coord, 0.23525916459134488, 0.8097194883895544);
color += star(coord, 0.33371467539233, 0.6410030837070655);
color += star(coord, 0.016966334966521335, 0.706992806998781);
color += star(coord, 0.041395389169718744, 0.6700194995387898);
color += star(coord, 0.5174476126033971, 0.4081110388165019);
color += star(coord, 0.4177765534800236, 0.6497405089253168);
color += star(coord, 0.7708051878091732, 0.8929665090421497);
color += star(coord, 0.24034463265352934, 0.44445433395467693);
color += star(coord, 0.14268487101579452, 0.0051122680600207415);
color += star(coord, 0.15609030476605867, 0.21224732714067696);
color += star(coord, 0.040960641613072446, 0.49838931457214364);
color += star(coord, 0.4175654244654413, 0.22878470602200285);
color += star(coord, 0.13404354570263843, 0.49638145994844574);
color += star(coord, 0.9505511323006521, 0.7883896907319062);
color += star(coord, 0.7660567412612432, 0.5683186293063585);
color += star(coord, 0.8239791680274957, 0.34794642417454913);
color += star(coord, 0.435018378226537, 0.8209965284239165);
color += star(coord, 0.9378799798686537, 0.7344083138823067);
color += star(coord, 0.18708545222548223, 0.0411224036193345);
color += star(coord, 0.7551310167765086, 0.7689053948243955);
color += star(coord, 0.9042656040410739, 0.6767244635392466);
color += star(coord, 0.8806634002481631, 0.7595782739632619);
color += star(coord, 0.7904497037942312, 0.752331273339717);
color += star(coord, 0.36988488805899467, 0.7503462394363318);
color += star(coord, 0.926920475743441, 0.5771555016912755);
color += star(coord, 0.8981036273370733, 0.5338243255872377);
color += star(coord, 0.6102838046923938, 0.14681997187997087);
color += star(coord, 0.5127780522224603, 0.6681596530504921);
color += star(coord, 0.533659539232482, 0.45924382892917326);
color += star(coord, 0.6948343801454917, 0.6009884220161201);
color += star(coord, 0.7837678772327378, 0.4105112716868903);
color += star(coord, 0.4092707566975595, 0.9804373916485962);
color += star(coord, 0.8734996490718177, 0.3508146562394826);
color += star(coord, 0.45550681240895363, 0.581479347489044);
color += star(coord, 0.6466878938465805, 0.9829372578369252);
color += star(coord, 0.7741151191273186, 0.5673040271147254);
color += star(coord, 0.7984243123553538, 0.9530280365871893);
color += star(coord, 0.6135774037024416, 0.3039912113848413);
color += star(coord, 0.8842524236852737, 0.07939413686171515);
color += star(coord, 0.7633390780413245, 0.7069924197173865);
color += star(coord, 0.10875065974155484, 0.4471158638682132);
color += star(coord, 0.2858775297907966, 0.7662943861798384);
color += star(coord, 0.07634368485874754, 0.7259521770485365);
color += star(coord, 0.6072744848948213, 0.08234692800098109);
color += star(coord, 0.1347176425662141, 0.2599997934196494);
color += star(coord, 0.9687961781342938, 0.4459784465188482);
color += star(coord, 0.21058689509401007, 0.12489891708286671);
color += star(coord, 0.819457238774085, 0.5830502997051465);
color += star(coord, 0.34492195727103414, 0.2571613651567135);
color += star(coord, 0.7623493954763404, 0.5408784204642014);
color += star(coord, 0.36555154978526394, 0.2801059129705781);
color += star(coord, 0.6374697444230423, 0.406799754061384);
color += star(coord, 0.977971368901309, 0.003480170931260518);
color += star(coord, 0.17824433048391608, 0.12791116904502298);
color += star(coord, 0.8968032821651756, 0.6281352534374519);
color += star(coord, 0.8626275417353391, 0.6736860029422911);
color += star(coord, 0.06573298813695472, 0.026509757815653234);
color += star(coord, 0.9546481578231816, 0.7865338953190852);
color += star(coord, 0.0734456866645341, 0.4381120251550671);
color += star(coord, 0.06936875230775874, 0.04583925408257117);
color += star(coord, 0.4139344601253673, 0.5919147057993519);
color += star(coord, 0.5355068164406075, 0.5080587281386131);
color += star(coord, 0.08692722292299393, 0.711367508062509);
color += star(coord, 0.3646492502246833, 0.4905101747225872);
color += star(coord, 0.25085380366454013, 0.14748887966225743);
color += star(coord, 0.8115109889135457, 0.5684379414547224);
color += star(coord, 0.9145451160223452, 0.9151570248919821);
color += star(coord, 0.9906079295338225, 0.5538423255636515);
color += star(coord, 0.3299949092059036, 0.6436010091546885);
color += star(coord, 0.7690033886521626, 0.08181369369526148);
color += star(coord, 0.3858321403293252, 0.023021905746056226);
color += star(coord, 0.11503530646949611, 0.9242109073940261);
color += star(coord, 0.8999274975481538, 0.02921970570408361);
color += star(coord, 0.7286175634081253, 0.9884006708497797);
color += star(coord, 0.5959422019045589, 0.3559426626563935);
color += star(coord, 0.701878671831243, 0.5835049780760728);
color += star(coord, 0.5874012098822936, 0.1387615241045671);
color += star(coord, 0.423106632479228, 0.1747145194031886);
color += star(coord, 0.07295441164117145, 0.5937153387139887);
color += star(coord, 0.2844623180775311, 0.11814711003961476);
color += star(coord, 0.48512996012528564, 0.6108528352070917);
color += star(coord, 0.8648592293431518, 0.19059504196589128);
color += star(coord, 0.5564145068588334, 0.7839018592501547);
color += star(coord, 0.8980681616169575, 0.9210741171582527);
color += star(coord, 0.03512373945780545, 0.8665534265092064);
color += star(coord, 0.2723165544303494, 0.2687556735609339);
color += star(coord, 0.09118326145958566, 0.22975467507633707);
color += star(coord, 0.9993149353358749, 0.6419676396472409);
color += star(coord, 0.14152127742960263, 0.22994695163552958);
color += star(coord, 0.24256977502636956, 0.9114393978373023);
color += star(coord, 0.47777027001025996, 0.08766051920771789);
color += star(coord, 0.7768066695517847, 0.14362078957852786);
color += star(coord, 0.8461953698092354, 0.7394143614899236);
color += star(coord, 0.5241523622678348, 0.954072030216665);
color += star(coord, 0.9344256078801815, 0.592285874945462);

  for (int i=0; i < 10; i++)
  { 
    color += star(coord, random(vec2(coord.x, coord.x)), random(vec2(coord.x, coord.x)));
  }

  for (int i=0; i < 10; i++)
  { 
    color += star(coord, random(vec2(coord.y, coord.y)), random(vec2(coord.y, coord.y)));
  }

  gl_FragColor = vec4(vec3(color), 1.0);
}
