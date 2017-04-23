var bird;
var pillar = [];
var score = 0;
//var framespeed = 100;

function setup() {
  createCanvas(500,600);
  bird = new Bird();
  for (var i = 0; i < 2; i++) {
    pillar[i] = new Pillar();
  }
}

function draw() {
  background(0);
  
  
  for (var i = 0; i< pillar.length; i++) {
    pillar[i].update();
    pillar[i].show();
    
    if(pillar[i].clash(bird)) {
      score = 0;
    }
  }
  bird.update();
  bird.show();
  
  stroke(100,100,200);
  strokeWeight(10);
  text("Score : "+score,100,50);
  noStroke();
  
  if(frameCount % 60 == 0) {
    pillar.push(new Pillar());
    score += 1;
  }
  
}

function keyPressed() {
  if(key == ' ')
  {
    bird.up(); 
  }
  
}
