//Create variables here
var dog, happyDog,database,foodS,foodStock,img,img1;
function preload()
{
	//load images here
  img=loadImage("images/dogImg.png");
  img1=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
	createCanvas(500, 500);
  dog=createSprite(250,250,10,10);
  dog.addImage(img);
  dog.scale=0.2;
  
}


function draw() {  
  background(46,139,87);
  if(keyCode(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(img1);
  }
  drawSprites();
  //add styles here

}



