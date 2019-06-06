var canvas;
var music_Box;
var game_Projects_Box;
var coding_Projects_Box;
var discord_Box;
var funny_Box;
var heading_Title;
var music_paragraph_Element;
var SCLink; 
var MusicText;
var TronBGImg;
var font;
var fontPoints;
var vehicles = [];
var music_BoxGrowthX;
var k;
var n;
var rotX;
var fCursor;
var fCursorGrowInt;
var cells = [];
var RoseRings = [];
var RingMaxReached = false;
var RoseRingLimiter = 0;


function preload(){
font = loadFont('RussoOne-Regular.ttf');
}

function setup() {
  canvas = createCanvas(windowWidth, 2500);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  heading_Title = document.getElementById("heading_Title");
  SCLink =  document.getElementById("soundcloudLink");
  Discord_Link = document.getElementById("Discord_Join_Link");
  Game_Proj_Link = document.getElementById("Game_Projects_Link");
  Code_Proj_Link = document.getElementById("Code_Projects_Link");
  MusicText = document.getElementById("MusicText");
  GameProjectsText = document.getElementById("GameProjectsText");
  CodeProjectsText = document.getElementById("CodeProjectsText");
  DiscordText = document.getElementById("DiscordText");  
  MusicArrowRight = document.getElementById("triangle-right-music");
  MusicArrowLeft = document.getElementById("triangle-left-music");
  GameProjectArrowRight = document.getElementById("triangle-right-GProjects");
  GameProjectArrowLeft = document.getElementById("triangle-left-GProjects");
  CodingProjectArrowRight = document.getElementById("triangle-right-CodeProjects"); 
  CodingProjectArrowLeft = document.getElementById("triangle-left-CodeProjects"); 
  DiscordArrowRight = document.getElementById("triangle-right-Discord");
  DiscordArrowLeft = document.getElementById("triangle-left-Discord");
  backGroundColor = color(200);
  music_Box = new Box();
  game_Projects_Box = new Box();
  coding_Projects_Box = new Box();
  discord_Box = new Box();
  funny_Box = new Box();
  fCursor = new FunCursor();
  fCursorGrowInt = 0;
  TronBGImg = loadImage("TronBackGroundImg.png");
  angleMode(DEGREES);
  cells.push(new Cell());
  cells.push(new Cell());
  fontPoints = font.textToPoints('Truephoria',width/2 -400 ,130,150);
  rFill = 0;
  k = 7;
  n = 1;
  rotX = 0;

//Music Box Setup
  music_Box.size(200, 50, 40);
  music_Box.position(15, 500);  
  music_Box.color(255,0,0,155);
  
//Game Projects Box Setup
  game_Projects_Box.position(15, 800);
  game_Projects_Box.size(200, 50, 40);

//Coding Projects Box Setup
  coding_Projects_Box.position(15, 1100);
  coding_Projects_Box.size(200, 50, 40);
 
//Discord Box Setup
  discord_Box.position(15, 1500);
  discord_Box.size(200, 50, 40);
 

 //Push Vehicles 
 for (var i = 0; i < fontPoints.length; i++){
  var pnts = fontPoints[i];
  var vehicle = new Vehicle(pnts.x, pnts.y);
  vehicles.push(vehicle);
  stroke(255,255,255);
  strokeWeight(4);
  point(pnts.x, pnts.y);
  }  
}

function draw() {
  background(TronBGImg);
 
 //Init Time Variables
  var hr = hour();
  var mn = minute();
  var sec = second();
  var mil = millis();
  var zeroHolder = "0";
  var secZeroHolder = "0";
 
  //FunCursor//
  if(fCursorGrowInt > 0){
  fCursor.show();
  fCursor.grow();
  }
  
  //Cell//
  push();
  for (var i = 0; i < cells.length; i++)
  {
    cells[i].move();
    cells[i].show();
    cells[i].r += cos(sin(.01 * cells[i].r)*10);
    if(cells[i].r > 50){
     cells[i].r *= -1 
  }
   if(cells.length > 20)
   {
   cells.splice(i,1);
   }
  }
  pop();
  
  //Rose Pattern//
  if(k <= 200000)
  {
  k+= .13
  }
  if(k >= 200000)
  {
    k = k*(-1)
  }
  if(rFill <=255){
  rFill++
  }
  if(rFill >= 255){
  rFill*= -1
  }
  rotX++
  push();
  beginShape();
  translate(width/2,height/2)
  fill(0,255,255);
  stroke(0,255,255);
  strokeWeight(10);
  rotate(rotX);
 
  for (var a = 0; a < 100; a += 1)
  {
    RoseRingLimiter+=.1
    var r = 200 * cos(n/k * RoseRingLimiter);
    var x = r * sin(RoseRingLimiter);
    var y = r * cos(RoseRingLimiter);
    var z = r * tan(sin(r));
    var ringCheck = [];
    vertex(x,y)
    vertex(y,z)
    vertex(z,x)
    RoseRings.push(new RoseRing(x,y,z));   
    if(RoseRingLimiter%1 == 0)
    {
    RoseRings[RoseRingLimiter-1].show();
    }
    if(a == 2000)
    {
     RoseRings.splice(0,1);
     RoseRings = [];
     console.log(RoseRings.length + " length")
     a = 0;
    }
  }
  endShape();
  pop();
 
 
  //Vehicles for Text
  push();
  for (var i = 0; i < vehicles.length; i++)
  {
   var v = vehicles[i];
   v.update();
   v.show();
   v.behaviors();
   stroke(255,255,255);
   strokeWeight(4);
  }
  textFont(font);
  textSize(80);
  text('Truephoria',width/2 -150 ,2150);
  pop();
 
 
  //Virtual Clock
  if (sec > "9")
  {
   secZeroHolder = ""
  };
  if(mn >"9")
  {
   zeroHolder = ""
  };
  push();
  translate(width/2,1900)
  rotate(-90);
  noFill();
  strokeWeight(8);
  stroke(0,255,255, 200);
  var secondAngle = map(sec, 0, 60, 0, 360);
  arc(0,0,310,310, 0, secondAngle);
  push();
  rotate(secondAngle);
  stroke(0,255,255,55)
  line(0,0,100,0)
  pop();
  pop();
  
  push();
  translate(width/2,1900)
  rotate(-90);
  noFill();
  strokeWeight(6);
  stroke(255,255,0,200);
  var minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0,0,290,290, 0, minuteAngle);
  push();
  rotate(minuteAngle);
  stroke(255,255,0,55)
  line(0,0,75,0)
  pop();
  pop();
  
  push();
  translate(width/2,1900)
  rotate(-90);
  noFill();
  strokeWeight(4);
  stroke(255,0,0,200);
  var hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0,0,270,270, 0, hourAngle);
  push();
  rotate(hourAngle);
  stroke(255,0,0,55)
  line(0,0,50,0)
  pop();
  pop();
  
  push();
  fill(0,255,255);
  textFont(font);
  textSize(30);
  text(hr + " : " + zeroHolder + mn + " : " + secZeroHolder + sec, width/2 -75 ,2105);
  pop();
  
//Music Box
  push();
  stroke(255);
  strokeWeight(5);
  music_Box.display(); 
  if(SChiddenLink == false){
   SCLink.hidden = false;
   MusicText.hidden = false;
   MusicArrowRight.setAttribute("style", "border-left: 25px solid red");
   MusicArrowRight.setAttribute("style", "opacity:0");
   MusicArrowLeft.setAttribute("style", "border-right: 50px solid white");
  }
  if(SChiddenLink == true){
   SCLink.hidden = true;
   MusicText.hidden = true;
   MusicArrowRight.setAttribute("style", "border-left: 25px solid white");
   MusicArrowLeft.setAttribute("style", "border-right: 50px solid black");
   MusicArrowLeft.setAttribute("style", "opacity:0;");
  }
  pop();
  push()
  textSize(28);  
  textStyle(BOLD);
  if(SChiddenLink == false)
  { 
   fill(0,0,0);
   text('My Music', 45 ,535);
  }
  else
  {
   fill(255,255,255);
   text('My Music', 45 ,535);
  }
  pop();

//Game Projects Box
  push(); 
  stroke(255);
  strokeWeight(5); 
  game_Projects_Box.display();
  if(Game_Proj_HiddenLink == false){
   Game_Proj_Link.hidden = false;
   GameProjectsText.hidden = false;
   GameProjectArrowRight.setAttribute("style", "border-left: 25px solid red");
   GameProjectArrowRight.setAttribute("style", "opacity: 0;");
   GameProjectArrowLeft.setAttribute("style", "border-right: 50px solid white");
  }
  if(Game_Proj_HiddenLink == true){
   Game_Proj_Link.hidden = true;
   GameProjectsText.hidden = true;
   GameProjectArrowRight.setAttribute("style", "border-left: 25px solid white");
   GameProjectArrowLeft.setAttribute("style", "border-right: 50px solid black");
   GameProjectArrowLeft.setAttribute("style", "opacity: 0;");
  }
  pop();
  push();
  textSize(21);
  textStyle(BOLD);
  if(Game_Proj_HiddenLink == false){
   fill(0,0,0);
   text('Game Projects', 35, 835);
  }
  else{
   fill(255,255,255);
   text('Game Projects', 35, 835);
  }
  pop();
  
//Coding Projects Box
  push(); 
  stroke(255);
  strokeWeight(5); 
  coding_Projects_Box.display();
  if(Code_Proj_HiddenLink == false)
  {
   Code_Proj_Link.hidden = false;
   CodeProjectsText.hidden = false;
   CodingProjectArrowRight.setAttribute("style", "border-left: 25px solid red");
   CodingProjectArrowRight.setAttribute("style", "opacity:0");
   CodingProjectArrowLeft.setAttribute("style", "border-right: 50px solid white");
  }
  if(Code_Proj_HiddenLink == true)
  {
   Code_Proj_Link.hidden = true;
   CodeProjectsText.hidden = true;
   CodingProjectArrowRight.setAttribute("style", "border-left: 25px solid white");
   CodingProjectArrowLeft.setAttribute("style", "border-right: 50px solid black");
   CodingProjectArrowLeft.setAttribute("style", "opacity:0");
  }
  pop();
  push();
  textSize(20);
  textStyle(BOLD);
  if(Code_Proj_HiddenLink == false)
  {
   fill(0,0,0);
   text('Coding Projects', 29, 1135);
  }
  else
  {
   fill(255,255,255);
   text('Coding Projects', 29, 1135);
  }
  pop();
  
//Discord Box
  push(); 
  stroke(255);
  strokeWeight(5); 
  discord_Box.display();
  if(Discord_HiddenLink == false)
  {
   Discord_Link.hidden = false;
   DiscordText.hidden = false;
   DiscordArrowRight.setAttribute("style", "border-left: 25px solid red");
   DiscordArrowRight.setAttribute("style", "opacity:0");
   DiscordArrowLeft.setAttribute("style", "border-right: 50px solid white");
  }
  if(Discord_HiddenLink == true)
  {
   Discord_Link.hidden = true;
   DiscordText.hidden = true;
   DiscordArrowRight.setAttribute("style", "border-left: 25px solid white");
   DiscordArrowLeft.setAttribute("style", "border-right: 50px solid black");
   DiscordArrowLeft.setAttribute("style", "opacity:0");
  }
  pop();
  push();
  textSize(30);
  textStyle(BOLD);
  if(Discord_HiddenLink == false)
  {
   fill(0,0,0);
   text('Discord', 55, 1535);
  }
  else
  {
   fill(255,255,255);
   text('Discord', 55, 1535);
  }
  pop(); 
}


function changeBGColor()
{
  backGroundColor = color(random(255));
};

function changeTextColor(newColor)
{
SCLink.style.color = "Orange";
};

function windowResize()
{
  resizeCanvas(windowWidth, 2500);
}

function mousePressed(){
  fCursorGrowInt++;
  //clicking cells//
  for (var i = cells.length -1 ; i >= 0; i--)
 {
  if (cells[i].clicked(mouseX, mouseY))
  {
    cells.push(cells[i].mitosis());
    cells.push(cells[i].mitosis());
    cells.splice(i, 1);
    cells[i].split = true;
  } 
 }
  if(mouseX > music_Box.posX && mouseX < music_Box.sizeX)
  {
   if(mouseY > music_Box.posY && mouseY < 500 + music_Box.sizeY)
   {
     timesClicked++;
     music_Box.sizeX = windowWidth - (windowWidth/4)
     music_Box.sizeY = windowHeight/4;
     SChiddenLink = false;
   }
  }
    if(mouseX > windowWidth - (windowWidth/4) && mouseX < windowWidth)
    {
      if(mouseY > music_Box.posY && mouseY < 500 + music_Box.sizeY)
      {
       timesClicked++;
       music_Box.sizeX = 200;
       music_Box.sizeY = 50;
       SChiddenLink = true;
      }
    }
if(mouseX > game_Projects_Box.posX && mouseX < game_Projects_Box.sizeX)
{
  if(mouseY > game_Projects_Box.posY && mouseY < 800 + game_Projects_Box.sizeY)
  {
     timesClicked++;
     x = windowWidth - (windowWidth/4);
     y = windowHeight/4;
     xx = lerp(game_Projects_Box.sizeX ,x,1);
     yy = lerp(game_Projects_Box.sizeY ,y,1);
     game_Projects_Box.sizeX = xx;
     game_Projects_Box.sizeY = yy;
     Game_Proj_HiddenLink = false;
   }
 }
    if(mouseX > windowWidth - (windowWidth/4) && mouseX < windowWidth)
    {
      if(mouseY > game_Projects_Box.posY && mouseY < 800 + game_Projects_Box.sizeY)
      {
       timesClicked++;
       game_Projects_Box.sizeX = 200;
       game_Projects_Box.sizeY = 50;
       Game_Proj_HiddenLink = true;
      }
    }
if(mouseX > coding_Projects_Box.posX && mouseX < coding_Projects_Box.sizeX)
{
   if(mouseY > coding_Projects_Box.posY && mouseY < 1100 + coding_Projects_Box.sizeY)
   {
     timesClicked++;
     coding_Projects_Box.sizeX = windowWidth - (windowWidth/4)
     coding_Projects_Box.sizeY = windowHeight/4;
     Code_Proj_HiddenLink = false;
   }
}
    if(mouseX > windowWidth - (windowWidth/4) && mouseX < windowWidth)
    {
     if(mouseY > coding_Projects_Box.posY && mouseY < 1100 + coding_Projects_Box.sizeY)
     { 
       timesClicked++;
       coding_Projects_Box.sizeX = 200;
       coding_Projects_Box.sizeY = 50;
       Code_Proj_HiddenLink = true;
     }
   }
if(mouseX > discord_Box.posX && mouseX < discord_Box.sizeX)
{
   if(mouseY > discord_Box.posY && mouseY < 1500 + discord_Box.sizeY)
   {
     timesClicked++;
     discord_Box.sizeX = windowWidth - (windowWidth/4)
     discord_Box.sizeY = windowHeight/4;
     Discord_HiddenLink = false;
   }
}
 if(mouseX > windowWidth - (windowWidth/4) && mouseX < windowWidth)
  {
   if(mouseY > discord_Box.posY && mouseY < 1500 + discord_Box.sizeY)
    { 
      timesClicked++;
      discord_Box.sizeX = 200;
      discord_Box.sizeY = 50;
      Discord_HiddenLink = true;
    }
  }
};
