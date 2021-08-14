var backgroundimage;
var catdefaultimage;
var catangryanimation;
var cathappyimage;
var mousedefaultimage;
var mouseteasinganimation;
var mousehappyimage;
var background;
var background=createSprite(375,300,50,50);
var cat=createSprite(700,500,50,50);
var mouse=createSprite(700,100,50,50);

function preload() {
    //load the images here
    backgroundimage=loadImage("garden.png");
    catdefaultimage=loadImage("cat1.png");
    catangryanimation=loadAnimation("cat2.png","cat3.png");
    cathappyimage=loadImage("cat4.png");
    mousedefaultanimation=loadAnimation("mouse1.png");
    mouseteasinganimation=loadImage("mouse2.png","mouse3.png");
    mousehappyanimation=loadImage("mouse4.png");
}

function setup(){
    createCanvas(750,600);
    //create tom and jerry sprites here

}

function draw() {

    background("black");
    //Write condition here to evalute if tom and jerry collide
    background.addImage("backgroundimage");
    cat.addAnimation("catdefaultimage");
    mouse.addAnimation("mousedefaultanimation");
    drawSprites();

    if(cat.x-mouse.x<(cat.width-mouse.width/2)){
        cat.velocityx=0;
        mouse.addImage("mousehappyimage");
        cat.addImage("cathappyimage")
    }
}


function keyPressed(){
   

  //For moving and changing animation write code here
 if(keyWentDown(LEFT_ARROW)){
    mouse.addAnimation("mouseteasinganimation");    
    mouse.frameDelay=25;
cat.velocityX=-10;
cat.addAnimation("catangryaniomation");
}
}
