var canvas , bg;
var together ;
var tom , tomImg1 , tomImg2 , tomImg3;
var jerry , jerryImg1 , jerryImg2 , jerryImg3;

function preload() 
{
  bg = loadImage("images/garden.png");
  tomImg1 = loadAnimation("images/cat1.png");
  tomImg2 = loadAnimation("images/cat2.png , images/cat3.png");
  tomImg3 = loadAnimation("images/cat4.png"); 
  jerryImg1 = loadAnimation("images/cat1.png");
  jerryImg2 = loadAnimation("imgaes/cat2.png , images/cat3.png");
  jerryImg3 = loadAnimation("images/cat4.png");
}

function setup()
{
    createCanvas(1000,800);
    
    tom = createSprite(860 , 600);
    tom.addAnimation("tomSleeping" , tomImg1);
    tom.scale =0.2;

    jerry = createSprite(200 , 600);
    jerry.addAnimation("jerryStanding" , jerryImg1);
    jerry.scale = 0.15;
}

function draw() 
{
    background(bg);

    if(tom.x - jerry.x < tom.width - jerry.width/2)
    {
        tom.velocityX = 0;
        tom.addAnimation("tomEndImage" , tomImg3);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("tomEndImage");
        jerry.addAnimation("jerryEndImage" , jerryImg3);
        jerry.scale = 0.15;
        jerry.changeAnimation("jerryEndImage");
    }
    keyPressed();
    drawSprites();
}

function keyPressed()
{
  if(keyCode === RIGHT_ARROW)
  {
      jerry.addAnimation("jerryTeasing" , jerryImg2);
      jerry.changeAnimation("jerryTeasing");
      jerry.frameDelay = 25;
  }

  if(keyCode === LEFT_ARROW)
  {
      tom.velocityX = -5;
      tom.addAnimation("tomRunning" , tomImg2);
      tom.changeAnimation("tomRunning");
  }
}
