function Pillar() {
  this.velx = -7;
  this.top = random(height/2);
  this.bottom = random(height/2);
  this.x = random(width-10,width);
  this.w = 20;
  this.flag=0;
  this.c = 0;
  
  this.clash = function(bird) {
    if(bird.y<this.top || bird.y > height - this.bottom)
    {
      if(bird.x > this.x && bird.x < this.x + this.w)
      { this.flag = 1;
        this.c+=1;
        return 1;
        
      }
        this.flag=0;
    }
    else return 0;
  }
  
  this.show = function() {
    if(this.flag==1){
      if(this.c%2==0)
        background(100,0,0);
      else background(0,0,100);
    }
    fill(255);
    rect(this.x,0,this.w,this.top);
    rect(this.x,height-this.bottom, this.w, this.bottom);
    
  }
  
  this.update = function() {
    this.x += this.velx;
    //this.velx -= 3;
  }
}
