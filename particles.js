class particles{
constructor(x,y,vx,vy){
this.firework=new particle(x,y,vx,vy);
this.exploded=false;
this.crackers=[];
}

update(){
if(!this.exploded){
  this.firework.applyForce(grav);
  this.firework.update();
  if(this.firework.vel.y>=0){
    this.exploded=true;this.explode();
  }
}
for(let j=0;j<this.crackers.length;j++){
  this.crackers[j].applyForce(grav);
  this.crackers[j].update();
}
}

show(){
if(!this.exploded){
  this.firework.show();}

  for(let j=0;j<this.crackers.length;j++){
  this.crackers[j].show();}
}

explode(){
  for(let j=0;j<100;j++){
  let crack1=new particle(this.firework.pos.x,this.firework.pos.y,random(-5,5),random(-5,5));
  this.crackers.push(crack1);
  }
}

}
