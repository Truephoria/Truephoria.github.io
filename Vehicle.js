
  function Vehicle(x,y){
    this.pos = createVector(random(width),random(height));
    this.target = createVector(x,y);
    this.vel = p5.Vector.random2D();
    this.acc = createVector(); 
    this.r = 8;
    this.maxSpeed = 12;
    this.maxForce = 3;
  }
  
  Vehicle.prototype.behaviors = function()
  {
    var arrive= this.arrive(this.target);
    var mouse = createVector(mouseX, mouseY);
    var flee = this.flee(mouse); 
    arrive.mult(1);
    flee.mult(3.5);
    this.applyForce(arrive);
    this.applyForce(flee);
  }
  
  Vehicle.prototype.applyForce = function(f)
  {
    this.acc.add(f);
  }
  
  Vehicle.prototype.update = function()
  {
    this.pos.add(this.vel);
    this.vel.add(this.acc); 
    this.acc.mult(0);
  }
  
  Vehicle.prototype.show = function()
  {
   var negVector = createVector(-10,-10)
   var targetPoint = point(this.pos.x, this.pos.y)
   strokeWeight(8);
   point(this.pos.x, this.pos.y);
  }
  
   Vehicle.prototype.arrive = function(target)
   {
    var desired = p5.Vector.sub(target,this.pos);
    var d = desired.mag();
    var speed = this.maxSpeed;
    if(d<100)
    {
      speed = map(d, 0, 100, 0, this.maxSpeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    return steer;
  }
  
  Vehicle.prototype.flee = function(target)
  {
    var desired = p5.Vector.sub(target,this.pos);
    var d = desired.mag();
    if(d < 50)
    {
      stroke(random(255),random(255),random(255))
      desired.setMag(this.maxSpeed);
      desired.mult(-1);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxForce);
      return steer;
    }
    else
    {
      stroke(255,0,0);
      return createVector(0,0);
    }
  }
