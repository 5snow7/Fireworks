let can,r;
let fireworks=[];
let grav;let count=0;
function setup() {
  // put setup code here
  can = createCanvas(800, 500);
  can.position(100, 50);can.class('can');
  can.mousePressed(on_of);
stroke(250,0,0);
strokeWeight(5);
 r = random(10);
grav=createVector(0,.2);
fireworks.push(new particles(random(width),height,0,random(-25)));
}

function draw() {
  r=random(10);
  background(0,200,50);
if(r<2){
fireworks.push(new particles(random(width),height,0,random(-12,-5)));r=random(10);}
  for(let j=0;j<fireworks.length;j++){
    fireworks[j].update();
  fireworks[j].show();
}
r=random(10);
}

function on_of(){if(count%2==0){noLoop();}  else{loop();}count++;}
