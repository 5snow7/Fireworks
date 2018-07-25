let can,r,ptitle;
let fireworks=[];
let grav;let count=0;
function setup() {
  // put setup code here
  can = createCanvas(800, 500);
  can.position(100, 50);can.class('can');
  can.mousePressed(()=>{if(count%2==0){noLoop();}  else{loop();}count++;});ptitle=createP("A Fireworks Show");
  ptitle.class('p');ptitle.position(450,-15);
stroke(250,0,0);
strokeWeight(5);
 r = random(10);
grav=createVector(0,.2);
fireworks.push(new particles(random(width),height,0,random(-25)));
}

function draw() {
  r=random(10);
  //background(0,200,0);
if(r<2){
fireworks.push(new particles(random(width),height,0,random(-12,-5)));r=random(10);
background(random(250),random(250),0);}
  for(let j=0;j<fireworks.length;j++){
    fireworks[j].update();
  fireworks[j].show();
}
r=random(10);
}

//function on_of(){if(count%2==0){noLoop();}  else{loop();}count++;}
