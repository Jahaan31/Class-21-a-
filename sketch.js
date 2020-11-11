var jr,gr 

function setup() {
  createCanvas(800,400);

  Jahaan = createSprite(400, 100, 50, 50);
  Jahaan.shapeColor = "blue";
  Jahaan.debug = true;
  Jahaan.velocityY = 4;

  Garima = createSprite(400,300,100,50);
  Garima.shapeColor = "purple";
  Garima.debug = true;
  Garima.velocityY = -4;
}

function draw() {
  background("pink");  

bounceoff(Garima, Jahaan);

  drawSprites();
}

function bounceoff(gr, jr){
  if(gr.x - jr.x < gr.width/2 + jr.width/2 && 
    jr.x - gr.x < gr.width/2 + jr.width/2 
    ){
    jr.velocityX = jr. velocityX * (-1);
    gr.velocityX = gr. velocityX * (-1);
  }

  if( jr.y - gr.y < gr.height/2 + jr.height/2 &&
    gr.y - jr.y < gr.height/2 + jr.height/2){
   
      jr.velocityY = jr.velocityY * (-1);
      gr.velocityY = gr.velocityY * (-1);
  }
}