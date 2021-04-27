var starImg,bgImg;
var fairy,fairyimg;
var star, starBody;
var fairyVoice;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyimg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	//load animation for fairy here
	fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	fairy = createSprite(400,500,10,10);

    fairy.addAnimation("fairy",fairyimg);
	fairy.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 
  
  console.log(star.y);
  if(keyDown("LEFT")){
	  fairy.x = fairy.x-3;
  }
  if(keyDown("RIGHT")){
	  fairy.x = fairy.x+3;
  }
  if(star.y>470 && starBody.position.y>470){
	  Matter.Body.setStatic(starBody,true);

  }
  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
		fairyVoice.play();
	}

	//writw code to move fairy left and right
	
}
