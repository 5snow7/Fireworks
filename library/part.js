class part{
  constructor(xs, ys) {this.ct=0;
    this.x = xs;this.y=ys;this.xsp=3;this.ysp=2;}

  display1(size,r1){
    fill(r1,100,0);
    rect(this.x,this.y,size,size);
  }
move(){
this.x+=this.xsp;
this.y+=this.ysp;
  }
chbd(){
if(this.x<0||this.x>width){this.xsp*=-1;this.ct++;}
if(this.y<0||this.y>height){this.ysp*=-1;this.ct++;}
  }

how_old(age){
  if(this.ct>age){return 'a';}
  else{return 'b';}
}

}
