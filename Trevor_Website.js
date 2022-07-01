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
var RoseRings = [];
var RingMaxReached = false;
var RoseRingLimiter = 0;


function preload(){
font = loadFont('RussoOne-Regular.ttf');
SCLink =  document.getElementById("soundcloudLink");
  Discord_Link = document.getElementById("Discord_Join_Link");
  Game_Proj_Link = document.getElementById("Game_Projects_Link");
  Code_Proj_Link = document.getElementById("Code_Projects_Link");
  MusicText = document.getElementById("MusicText");
  GameProjectsText = document.getElementById("GameProjectsText");
  CodeProjectsText = document.getElementById("CodeProjectsText");
  DiscordText = document.getElementById("DiscordText");  
  
  
  SCLink.hidden = true;
  Discord_Link.hidden = true;
  Code_Proj_Link.hidden = true;
  Game_Proj_Link.hidden = true;
  MusicText.hidden = true;
  GameProjectsText.hidden = true;
  CodeProjectsText.hidden = true;
  DiscordText.hidden = true;
}

function setup() {
  canvas = createCanvas(windowWidth, 2550);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  heading_Title = document.getElementById("heading_Title");
  
  backGroundColor = color(200);
  music_Box = new Box();
  game_Projects_Box = new Box();
  coding_Projects_Box = new Box();
  discord_Box = new Box();
  funny_Box = new Box();
  fCursor = new FunCursor();
  fCursorGrowInt = 0;
  angleMode(DEGREES);
  fontPoints = font.textToPoints('Truephoria', windowWidth/2 -400, 130, 150);
  rFill = 0;
  k = 7;
  n = 1;
  rotX = 0;
  
  //Init Bools
  
  

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
 clear();
 //Init Time Variables
  var hr = hour();
  var mn = minute();
  var sec = second();
  var mil = millis();
  var zeroHolder = "0";
  var secZeroHolder = "0";

 //MUSIC BOX SCALE TICK
 if(!SChiddenLink)
     {
     x = windowWidth - (windowWidth/4);
     y = windowHeight/4;
     xx = lerp(music_Box.sizeX ,x,.2);
     yy = lerp(music_Box.sizeY ,y,.2);
     music_Box.sizeX = xx;
     music_Box.sizeY = yy;
     }
 else
     {
     x = 200;
     y = 50;
     xx = lerp(music_Box.sizeX ,x,.2);
     yy = lerp(music_Box.sizeY ,y,.2);
     music_Box.sizeX = xx;
     music_Box.sizeY = yy;
     };
     
 //GAMEPROJECTS SCALE TICK
 if(!Game_Proj_HiddenLink)
     {
     x = windowWidth - (windowWidth/4);
     y = windowHeight/4;
     xx = lerp(game_Projects_Box.sizeX ,x,.2);
     yy = lerp(game_Projects_Box.sizeY ,y,.2);
     game_Projects_Box.sizeX = xx;
     game_Projects_Box.sizeY = yy;
     }
 else
     {
     x = 200;
     y = 50;
     xx = lerp(game_Projects_Box.sizeX ,x,.2);
     yy = lerp(game_Projects_Box.sizeY ,y,.2);
     game_Projects_Box.sizeX = xx;
     game_Projects_Box.sizeY = yy;
     };
 
 //CODING PROJECTS BOX SCALE TICK
 if(!Code_Proj_HiddenLink)
     {
     x = windowWidth - (windowWidth/4);
     y = windowHeight/4;
     xx = lerp(coding_Projects_Box.sizeX ,x,.2);
     yy = lerp(coding_Projects_Box.sizeY ,y,.2);
     coding_Projects_Box.sizeX = xx;
     coding_Projects_Box.sizeY = yy;
     }
 else
     {
     x = 200;
     y = 50;
     xx = lerp(coding_Projects_Box.sizeX ,x,.2);
     yy = lerp(coding_Projects_Box.sizeY ,y,.2);
     coding_Projects_Box.sizeX = xx;
     coding_Projects_Box.sizeY = yy;
     };
 
 //DISCORD BOX SCALE TICK
 if(!Discord_HiddenLink)
     {
     x = windowWidth - (windowWidth/4);
     y = windowHeight/4;
     xx = lerp(discord_Box.sizeX ,x,.2);
     yy = lerp(discord_Box.sizeY ,y,.2);
     discord_Box.sizeX = xx;
     discord_Box.sizeY = yy;
     }
 else
     {
     x = 200;
     y = 50;
     xx = lerp(discord_Box.sizeX ,x,.2);
     yy = lerp(discord_Box.sizeY ,y,.2);
     discord_Box.sizeX = xx;
     discord_Box.sizeY = yy;
     };
 
  //FunCursor//
  if(fCursorGrowInt > 0)
  {
    fCursor.show();
    fCursor.grow();
  }
  
  
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
  translate(windowWidth/2,windowHeight/2)
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
  translate(windowWidth/2,1900)
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
  translate(windowWidth/2,1900)
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
  translate(windowWidth/2,1900)
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
  text(hr + " : " + zeroHolder + mn + " : " + secZeroHolder + sec, windowWidth/2 -75 ,2105);
  pop();
  
//Music Box
  push();
  stroke(255);
  strokeWeight(5);
  music_Box.display(); 
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
   fill(255,0,0);
   text('My Music', 45 ,535);
  }
  pop();

//Game Projects Box
  push(); 
  stroke(255);
  strokeWeight(5); 
  game_Projects_Box.display();
  pop();
  push();
  textSize(21);
  textStyle(BOLD);
  if(Game_Proj_HiddenLink == false){
   fill(0,0,0);
   text('Game Projects', 35, 835);
  }
  else{
   fill(255,0,0);
   text('Game Projects', 35, 835);
  }
  pop();
  
//Coding Projects Box
  push(); 
  stroke(255);
  strokeWeight(5); 
  coding_Projects_Box.display();
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
   fill(255,0,0);
   text('Coding Projects', 29, 1135);
  }
  pop();
  
//Discord Box
  push(); 
  stroke(255);
  strokeWeight(5); 
  discord_Box.display();
  
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
   fill(255,0,0);
   text('Discord', 55, 1535);
  }
  pop(); 
  
  
  /*
  
  //JQuery Mouse Hover Check for Boxes
  $(".music_Rectangle").hover(
    function(event) {
        // The mouse has entered the element, can reference the element via 'this'
        MusicText.hidden = false;
        SCLink.hidden = false;
    },
    function (event) {
        // The mouse has left the element, can reference the element via 'this'
        MusicText.hidden = true;
        SCLink.hidden = true;
    } 
 );
 
 $(".gameProjects_Rectangle").hover(
    function(event) {
        // The mouse has entered the element, can reference the element via 'this'
        GameProjectsText.hidden = false;
        Game_Proj_Link.hidden = false;
    },
    function (event) {
        // The mouse has left the element, can reference the element via 'this'
        GameProjectsText.hidden = true;
        Game_Proj_Link.hidden = true;
    } 
 );
 
 $(".codeProjects_Rectangle").hover(
    function(event) {
        // The mouse has entered the element, can reference the element via 'this'
        CodeProjectsText.hidden = false;
        Code_Proj_Link.hidden = false;
    },
    function (event) {
        // The mouse has left the element, can reference the element via 'this'
        CodeProjectsText.hidden = true;
        Code_Proj_Link.hidden = true;
    } 
 );
 
 $(".discord_Rectangle").hover(
    function(event) {
        // The mouse has entered the element, can reference the element via 'this'
        DiscordText.hidden = false;
        Discord_Link.hidden = false;
    },
    function (event) {
        // The mouse has left the element, can reference the element via 'this'
        DiscordText.hidden = true;
        Discord_Link.hidden = true;
    } 
 );
 
 
  
}

*/

function mousePressed(){
  fCursorGrowInt++;
  
  if(mouseX > music_Box.posX && mouseX < music_Box.sizeX)
  {
   if(mouseY > music_Box.posY && mouseY < 500 + music_Box.sizeY)
   {
     timesClicked++;
     SChiddenLink = false;
   }
  }
    if(mouseX > windowWidth - (windowWidth/4) && mouseX < windowWidth)
    {
      if(mouseY > music_Box.posY && mouseY < 500 + music_Box.sizeY)
      {
       timesClicked++;
       SChiddenLink = true;
      }
    }
if(mouseX > game_Projects_Box.posX && mouseX < game_Projects_Box.sizeX)
{
  if(mouseY > game_Projects_Box.posY && mouseY < 800 + game_Projects_Box.sizeY)
  {
     timesClicked++;
     Game_Proj_HiddenLink = false;
   }
 }
    if(mouseX > windowWidth - (windowWidth/4) && mouseX < windowWidth)
    {
      if(mouseY > game_Projects_Box.posY && mouseY < 800 + game_Projects_Box.sizeY)
      {
       timesClicked++;
       Game_Proj_HiddenLink = true;
      }
    }
if(mouseX > coding_Projects_Box.posX && mouseX < coding_Projects_Box.sizeX)
{
   if(mouseY > coding_Projects_Box.posY && mouseY < 1100 + coding_Projects_Box.sizeY)
   {
     timesClicked++;
     Code_Proj_HiddenLink = false;
   }
}
    if(mouseX > windowWidth - (windowWidth/4) && mouseX < windowWidth)
    {
     if(mouseY > coding_Projects_Box.posY && mouseY < 1100 + coding_Projects_Box.sizeY)
     { 
       timesClicked++;
       Code_Proj_HiddenLink = true;
     }
   }
if(mouseX > discord_Box.posX && mouseX < discord_Box.sizeX)
{
   if(mouseY > discord_Box.posY && mouseY < 1500 + discord_Box.sizeY)
   {
     timesClicked++;
     Discord_HiddenLink = false;
   }
}
 if(mouseX > windowWidth - (windowWidth/4) && mouseX < windowWidth)
  {
   if(mouseY > discord_Box.posY && mouseY < 1500 + discord_Box.sizeY)
    { 
      timesClicked++;
      Discord_HiddenLink = true;
    }
  }
};




