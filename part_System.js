let can,r;
let fireworks=[];
let grav;
function setup() {
  // put setup code here
  can = createCanvas(1000, 600);
  can.position(0, 50);can.class('can');
stroke(250,0,0);
strokeWeight(5);
 r = random(10);
grav=createVector(0,.2);
fireworks.push(new particles(random(width),height,0,random(-25)));
frameRate(15);
}

function draw() {
  r=random(10);
  background(0,200,0);text(r,20,20);
if(r<3){
fireworks.push(new particles(random(width),height,0,random(-12,-5)));r=random(10);}
  for(let j=0;j<fireworks.length;j++){
    fireworks[j].update();
  fireworks[j].show();
}

}
