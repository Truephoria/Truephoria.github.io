
var timesClicked = 0;
var SChiddenLink = Boolean();
var Game_Proj_HiddenLink = Boolean();
var Code_Proj_HiddenLink = Boolean();
var Discord_HiddenLink = Boolean();

SChiddenLink = true;
Game_Proj_HiddenLink = true;
Code_Proj_HiddenLink = true;
Discord_HiddenLink = true;

function Box(){
  this.posX = 0;
  this.posY = 0;
  this.sizeX = 100;
  this.sizeY = 50;
  this.radius = 20;
  this.r = 0;
  this.g = 0;
  this.b = 0;
  
 
 

  this.display = function(){

  rect(this.posX, this.posY, this.sizeX, this.sizeY, this.radius);

};

  this.position = function(x, y){

  this.posX = x;
  this.posY = y;

};

  this.size = function(x, y, r){
  this.sizeX = x;
  this.sizeY = y;
if(r == null){
  this.radius = 0;
}
else{
  
  this.radius = r;

}

};

this.clicked = function(){

var d = dist(mouseX, mouseY, this.posX, this.posY);



  
//  if(mouseX > this.posX && mouseX < this.posX + this.sizeX){
//   if(mouseY > this.posY && mouseY < this.posY + this.sizeY){
//     timesClicked++;
//  console.log(this.posY);
//  this.sizeX = windowWidth - (windowWidth/4)
//  this.sizeY = windowHeight/4;

//  hiddenLink = false;
//  if(timesClicked % 2 == 0){

 
 
//this.sizeX = 200;
//this.sizeY = 50;
//   hiddenLink = true;
//}
    
//}
  


//}if(mouseX > this.posX + this.sizeX * 1.5){
//  if(mouseY < this.posY && mouseY > this.sizeY){

//    hiddenLink = true;
    


  
//}
//}


//console.log(timesClicked);
};




this.color = function(r,g,b,a){
  if(r == null){
  r = 0;
  }
else{
  this.r = r;
  fill(r,g,b,a);
}

if(g == null){
  g = 0;
}
else{
  this.g = g;
  fill(r,g,b,a);}
  
if(b == null){
  b = 0;
  }
else{
  this.b = b;
  fill(r,g,b,a);}
if(a == null){
a = 0;
}
else{
 this.a = a;
 fill(r,g,b,a)
}

};

this.enterText = function(String, posX, posY, int, r,g,b){
this.String = String;
this.textRed = r;
this.textGreen = g;
this.textBlue = b;
//this.posX = posX;
//this.posY = posY;
this.textSize = int;
//this.textSize = textSize;
if(posX == null || 0){
text(this.String, this.posX, this.posY, int);
}

if(posY == null || 0){
  text(this.String, this.posX, this.posY, int);
}
  
  if(posX != null || 0 && posY != null || 0){
  text(this.String, posX, posY, int);
  }
  
textSize(this.textSize);


};

}
