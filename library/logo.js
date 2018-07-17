
class logo{
constructor(x,y,as) {
  this.xs;this.ys;this.xf;this.yf;this.angle;
  this.xs=x;this.ys=y;this.angle=as;this.xf=0;this.yf=0;}


  fd( len) {
    this.xf=this.xs+len*cos(3.141592*this.angle/180);
  this.yf=this.ys+len*sin(3.141592*this.angle/180);
 line(this.xs,this.ys,this.xf,this.yf);
  this.xs=this.xf;this.ys=this.yf;
  }


 bk( len) {this.xf=this.xs-len*cos(3.141592*this.angle/180);
  this.yf=this.ys-len*sin(3.141592*this.angle/180);
  line(this.xs,this.ys,this.xf,this.yf);
  this.xs=this.xf;this.ys=this.yf;
  }

set1(x,y, an){this.xs=x;this.ys=y;this.angle=an;}

rt( an){this.angle=this.angle+an;
 if(this.angle>360||this.angle<0){this.angle=this.angle%360;}
 }

lt( an){this.angle=this.angle-an;
  if(this.angle>360||this.angle<0){this.angle=this.angle%36;}
}
  sq2(len){
  this.fd(len);this.rt(90);this.fd(len);this.rt(90);
this.fd(len);this.rt(90);this.fd(len);this.rt(90);
}


  xpos(){return this.xf;}
ypos(){return this.yf;}
dir(){return this.angle;}
}


function sier(len,lev){
  if(lev==0){this.fd(len);return sier(len,lev);}
  else{
 sier(len/3,lev-1);this.lt(60);
    sier(len/3,lev-1);this.rt(120);
    sier(len/3,lev-1);this.lt(60);
    sier(len/3,lev-1);
  }

}
