function RoseRing(x,y,r){
 this.x = x;
 this.y = y;
 this.r = r;
  
this.movement = function()
{

};


this.show = function()
  {
  beginShape();
  stroke(155,155,155);
  strokeWeight(3);
  ellipse(this.x,this.y,this.r);
  endShape();
  };

};
