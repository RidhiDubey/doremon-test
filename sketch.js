var back, backImage;
var rat,ratImage,ratGroup;
var doremon,doremonImage;
var doraCake,doraCakeImage,doraCakeGroup;
var ground;
var gameOver,gameOverImage;
END=0;
PLAY=1;
var gameState;

function preload(){
  ratImage=loadImage("rat-4.png");
  doremonImage=loadImage("newDoremon-1.png");
  doraCakeImage=loadImage("doraCake.png");
  backImage=loadImage("back.png");
  gameOverImage=loadImage("gameOver.png");
}

function setup() {
createCanvas(displayWidth,displayHeight);
  
  
  ground=createSprite(40,displayHeight-185,800,5);
  
  back=createSprite(40,displayHeight+3000,20,20);
  back.addImage("back",backImage);
  back.scale=3;
  
  
  doremon=createSprite(40,displayHeight-185,15,15);
  doremon.addImage("doremon",doremonImage);
  doremon.scale=0.8;
  
  
  ratGroup=createGroup();
  doraCakeGroup=createGroup();
  
  
  score=0;
}

function draw() {
  background(backImage);
  ground.velocityX=-6;
  textSize(20);
  text("Score:"+score,displayWidth,50);
  ground.velocityX=-(4+3*score/10);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(ratGroup.isTouching(doremon)){
    ground.velocityX=0;
    gameState=END;
  }
  if(doraCakeGroup.isTouching(doremon)){
    doraCakeGroup.destroyEach();
    score=score+5;
    
  }
  doremon.collide(ground);
  doremon.velocityY=doremon.velocityY+0.8;
  if(keyDown("space")&& doremon.y >= 100) {
        doremon.velocityY = -12;
       
    }
  if(gameState===END){
      
      gameOver=createSprite(displayWidth/2,displayHeight/2,20,20);
      gameOver.addImage("gameOver",gameOverImage);
      gameOver.scale=1;
      
     ratGroup.destroyEach();
      doraCakeGroup.destroyEach();
      doremon.destroy();
      ground.velocityX=0;
      doremon.velocityY=0;
      
      
    }
  doraCake();
  rat();

  
 drawSprites()
}

function rat(){
  if(frameCount%80===0){
  var rat=createSprite(displayWidth+500,displayHeight-230,15,15);
  rat.addImage("rat",ratImage);
  rat.scale=0.7;
  rat.velocityX=-8;
  rat.lifetime=400;
    
  ratGroup.add(rat);
  }
}
function doraCake(){
  if(frameCount%90===0){
   var doraCake=createSprite(displayWidth+610,displayHeight-50,20,20);
  doraCake.addImage("doraCake", doraCakeImage);
  doraCake.scale=0.07;
  doraCake.y=Math.round(random(300,110));
  doraCake.velocityX=-8;
  doraCake.lifetime=400;
   
  doraCakeGroup.add(doraCake);
  }
}