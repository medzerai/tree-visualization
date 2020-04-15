

var angle=0;
var slider;
var s;
function setup() {
  // put setup code here
  createCanvas(800,800);
  s= createSlider(0 , 255 ,5);
  slider=createSlider(0 ,2 * PI , PI / 6 ,0.01);
}

function draw() {
  // put drawing code here
  background(s.value());
  angle = slider.value();
  stroke(255 - s.value());
  translate(300 ,height);
  branch(200, 20);

  
}
function branch(len, vil){
   strokeWeight(vil);
   line(0 ,0 ,0 ,-len );
   translate(0 ,-len );
   
   //line(0 ,0 ,0 ,-len );
   if(len > 4)
   {
   	  push();
   	  rotate(angle);
      branch(len * 0.67, vil * 0.6);
      pop();
      push();
      rotate(-angle);
      branch(len * 0.67, vil * 0.6);
      pop();
   }

}