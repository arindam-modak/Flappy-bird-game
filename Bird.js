function Bird() {
  this.grav = 1;
  this.vel = 0;
  this.jump = -16;
  this.y = height/2 - 50;
  this.x = 50;
  
  this.show = function() {
    fill(100,0,20);
    ellipse(this.x,this.y,40,40);
  
  }
  
  this.update = function() {
    this.vel += this.grav;
    this.vel *= 0.9;
    this.y += this.vel;
    
    if(this.y > height) {
       this.y = height;
       this.vel = 0;
    }
    
  }
  
  this.up = function() {
    this.vel += this.jump; 
  }
  
 
}