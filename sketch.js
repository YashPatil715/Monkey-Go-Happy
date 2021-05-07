
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime=3;
var score=0;
function preload(){    
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(490,370); 
monkey=createSprite(60,200,20,20);
monkey.addAnimation("moving",monkey_running);  
monkey.scale=0.1;

ground=createSprite(245,240,480,10);
ground.velocityX=-4;
ground.x=ground.width/2 
bananaGroup = createGroup();
obstacleGroup = createGroup();
console.log(ground.x);  
}


function draw() {
background("lightblue")
stroke("white");
textSize(20);
fill("white")
text("Score : "+score,300,50);
  
stroke("black");
textSize(20);
fill("black");

text("Survival Time : "+survivalTime,100,50);
  
if(monkey.isTouching(bananaGroup)){
score=score+1   
}
if(monkey.isTouching(obstacleGroup)){
bananaGroup.setVelocityXEach(0);
obstacleGroup.setVelocityXEach(0);
bananaGroup.setLifetimeEach(-1);
obstacleGroup.setLifetimeEach(-1);
}
  if(ground.x<0){
  ground.x=ground.width/2;             
} 
if(keyDown("space")){
  monkey.velocityY=-12
} 
 
  monkey.velocityY =  monkey.velocityY + 0.8
   monkey.collide(ground);
  banana();
  obstacle();
  drawSprites(); 
}
function banana(){
  if(frameCount%60 === 0){
  var banana=createSprite(400,100,20,20)
  banana.y = Math.round(random(80,120));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -3;
  banana.depth = monkey.depth;
  monkey.depth = monkey.depth + 1;
  banana.lifetime = 150
    bananaGroup.add(banana);
  }
}

function obstacle(){
  if(frameCount%60 === 0){
  var obstacle=createSprite(245,220,20,20);  
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.1;
  obstacle.velocityX=-6;
  obstacle.lifetime=150
  obstacleGroup.add(obstacle);
  }
}




