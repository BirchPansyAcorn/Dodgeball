var dodgeball, dodgeball2;
var dodgeballImg, dodgeball2Img;

function preload() {
  dodgeballImg = loadImage("dodgeball.png");
  dodgeball2Img = loadImage("dodgeball2.png");
}

function setup() {
  createCanvas(1000,500);

  dodgeball = createSprite(200,200);
  dodgeball.addImage(dodgeballImg);
  //dodgeball.scale = 0.07;

  dodgeball2 = createSprite(200,200);
  dodgeball2.addImag (dodgeball2Img);
  //dodgeball2.scale = 0.07;


  // *Note* I had an error in the code and I'm not quite sure what it is 
}

function draw() {
  background("white");
 

  

  drawSprites()
}