var canvas;
var car,background;
var angle = 0,coneGroup;
var collided =false;
var line1,line2;
var InvisibleLine;


function preload() {
carImage = loadImage("assets/car1.png");
coneImage = loadImage("assets/cone.png")

  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  
 line1 =  createSprite(windowWidth - 100,130,220,10)
 line12 =  createSprite(windowWidth - 100,260,220,10)
 InvisibleLine = createSprite(windowWidth -100,200,100,50)

  car = createSprite(120,550,50,50);
  car.addImage(carImage)
  car.setCollider("RECTANGLE",0,0,800,1200)
  car.debug = true;
  car.scale = 0.15;
  coneGroup = new Group();

  

  obstacleRow(300,100,300,8)
  obstacleColumn(50,250,100,4)

  


  /*
  cone1 = createSprite(220,620,20,20)
  cone1.addImage(coneImage);
  cone1.scale = 0.02

  
  cone2 = createSprite(220,500,20,20)
  cone2.addImage(coneImage);
  cone2.scale = 0.02

  cone3 = createSprite(220,350,20,20)
  cone3.addImage(coneImage);
  cone3.scale = 0.02

  cone4 = createSprite(20,620,20,20)
  cone4.addImage(coneImage);
  cone4.scale = 0.02

  cone5 = createSprite(20,450,20,20)
  cone5.addImage(coneImage);
  cone5.scale = 0.02

  cone6 = createSprite(20,300,20,20)
  cone6.addImage(coneImage);
  cone6.scale = 0.02

  cone7 = createSprite(20,150,20,20)
  cone7.addImage(coneImage);
  cone7.scale = 0.02

  cone8 = createSprite(20,50,20,20)
  cone8.addImage(coneImage);
  cone8.scale = 0.02

  
  cone9 = createSprite(250,50,20,20)
  cone9.addImage(coneImage);
  cone9.scale = 0.02

  cone10 = createSprite(450,50,20,20)
  cone10.addImage(coneImage);
  cone10.scale = 0.02
  
  cone11= createSprite(650,50,20,20)
  cone11.addImage(coneImage)
  cone11.scale = 0.02

  cone12= createSprite(450,350,20,20)
  cone12.addImage(coneImage);
  cone12.scale = 0.02
  
  cone13 = createSprite(650,350,20,20)
  cone13.addImage(coneImage);
  cone13.scale = 0.02
   
  cone14= createSprite(120,65,20,20)
  cone14.addImage(coneImage);
  cone14.scale = 0.02
  */
}

function draw() {
  background("WHITE");
  text(mouseX + ',' + mouseY, mouseX, mouseY)

  if(collided === false){
  if(keyDown(UP_ARROW)){
    console.log(angle);
    handleUpMovementOfCar();
  
}
  if(keyDown(DOWN_ARROW)){
    car.y = car.y+10
  }
 
  if(keyDown(LEFT_ARROW)){
    car.x = car.x-2
    angle = angle-3
    car.rotation = angle;
  
  }

  if(keyDown(RIGHT_ARROW)){
    car.x = car.x+2
    angle = angle+3
    car.rotation = angle;
   // car.rotateToDirection = true;
}
  }

if(car.isTouching (coneGroup)){
  console.log("collided")
  collided = true;

}

if(car.isTouching (InvisibleLine)){
  textSize(70)
  fill("DARKBLUE")
text("CONGRATULATION",windowWidth/2 - 200,windowHeight/2)

}

  drawSprites()

  }
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}




function handleUpMovementOfCar(){
    if(angle >=0 && angle<=105){
     //   console.log("in first if")
         for(var i = 0, j = 30, k =0.5; i<90; i=i+20,j=j+20,k=k+1){
       
          if (angle >=0 && angle <=5){
            car.y = car.y -1.5;
         //   console.log(angle);
          }
          else if(angle>=i && angle<j && angle<=85 ){
        
            car.x = car.x +k
            car.y = car.y -1.5
          }
        
          else if(angle>85 && angle<105 ){
            car.x =car.x +1.5
            k=1
            
       }
       
         }
        }
        else if(angle >=105 && angle<=190){
      
         for(var i=105,j=120,k=0.5; i<180;i=i+30,j=j+30,k=k+1){
      
          if(angle>=105 && angle <=170){
            car.x = car.x +1.5
            car.y = car.y +k
          }
          else if(angle>170 && angle <190){
            car.y = car.y +1.5
          }
         }
      
      
        }  
        if (angle <0 && angle>=-105){
      
          for(var i = 0, j = -30, k =0.5; i>=-90; i=i-20,j=j-20,k=k+1){
              if (angle <=0 && angle >=-5){
                  car.y = car.y -1.5;
               //   console.log(angle);
                }
                else if(angle<=i && angle>=j && angle>=-85 ){
              
                  car.x = car.x -k
                  car.y = car.y -1.5
                }
              
                else if(angle<-85 && angle>-105 ){
                  car.x =car.x -1.5
                  k=1
                  
             }
         
       }
      }
      else if(angle <-105 && angle >-190)
      {
     //     console.log("within negative if else ", angle)
          for(var i=-105,j=-130,k=0.5; i>=-190;i=i-20,j=j-30,k=k+1){
         //     console.log("i:",i)
         //     console.log("j:",j)
      
              if(angle<=i && angle >=j && angle >=-170){
                car.x = car.x -1.5
                car.y = car.y +k
              }
              else if(angle<-170 && angle >-190){
                car.y = car.y +1.5
              }
             }
      }
      
}

function obstacleRow(x,y1,y2,num){

    for(var i=0; i< num;i++,x=x+150){
   
    cone1=createSprite(x,y1,width,height)
    cone1.addImage(coneImage)
    cone1.scale=0.02
    cone1.debug = true;
    cone2 = createSprite(x,y2,width,height)
    cone2.addImage(coneImage)
    cone2.scale=0.02
    coneGroup.add(cone1)
    coneGroup.add(cone2)

    cone1.setCollider("RECTANGLE",0,0,40,50)
    
    cone2.setCollider("RECTANGLE",0,0,40,50)
  //  console.log("x:",x)
    }

}


function obstacleColumn(x1,x2,y,num){

    for(var i=0; i< num;i++,y=y+200){
   
    cone1=createSprite(x1,y,width,height)
    cone1.addImage(coneImage)
    cone1.scale=0.02
    cone1.debug = true;
    cone2 = createSprite(x2,y,width,height)
    cone2.addImage(coneImage)
    cone2.scale=0.02
    coneGroup.add(cone1)
    coneGroup.add(cone2)
    
    cone1.setCollider("RECTANGLE",0,0,40,50)
    cone2.setCollider("RECTANGLE",0,0,40,50)
   
    }

}