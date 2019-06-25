var radius = 0;
var alph = 255;

 function FunCursor(){
 this.a = alph;
 this.r = radius;
 this.posX = mouseX;
 this.posY = mouseY;

 this.grow = function()
 {
 if(radius < 150)
   {
 radius += 10
 if(radius>=75)
     {
 alph -= 20
     }
   }
   this.stopGrow();
 }
 
 this.show = function()
 {
   push()
   noFill();
   stroke(255,0,0,alph);
   strokeWeight(3);
   ellipse(mouseX ,mouseY, radius, radius);
   pop();
 
   push()
   noFill();
   stroke(255,0,0,alph);
   strokeWeight(2);
   ellipse(mouseX ,mouseY, radius - 10, radius - 10);
   pop();
 
   push()
   noFill();
   stroke(255,0,0,alph);
   strokeWeight(1);
   ellipse(mouseX,mouseY, radius - 20, radius - 20);
   pop();
 }
 
 this.stopGrow = function()
 {
 if(radius == 150)
   {
     radius =0;
     alph = 255;
     fCursorGrowInt--
   }
 } 
}
