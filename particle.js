class particle{
constructor(x,y,vx,vy){
  this.pos=createVector(x,y);
  this.vel=createVector(vx,vy);
  this.acc=createVector(.1,.5);
}
update(){
  this.vel.add(this.acc);
  this.pos.add(this.vel);
  this.acc.mult(0.0);
}
applyForce(force){
  this.acc.add(force);
}
show(){
  point(this.pos.x,this.pos.y);
}
}
