// Variables
  // Bounding Box Values
  let rocketX
  let rocketY
  let rocketW
  let rocketH
  
  // Coordinate Values
  let c
  
  // Color Values
  let rocketFins
  let rocketWindow
  let rocketBody
  let rocketBurn

function setup() {
  createCanvas(400,400);
  
  // Bounding Box Values
  rocketX = 400/4
  rocketY = 400/4
  rocketW = 400/2
  rocketH = 400/2
  
  // Rocket Colors
  rocketFins = 'red'
  rocketWindow = 'blue'
  rocketBody = 'gray'
  rocketBurn = 'yellow'
  
  // 'c' is a constant to compress
  c = 400
}

function draw() {
  background('#87ceeb');
  esb(rocketX,rocketY,rocketW,rocketH)
}

function esb(x,y,w,h){
  fill(rocketFins)
  stroke('black')
  // point 1, point 2, point 3
  // RocketTip
  triangle(x+200/c*w,y,x+150/c*w,y+50/c*h,x+250/c*w,y+50/c*h)
  
  //LeftRocketSide
  triangle(x+150/c*w,y+250/c*h,x,y+h,x+150/c*w,y+200/c*h)
  //RightRocketSide
  triangle(x+250/c*w,y+250/c*h,x+w,y+h,x+250/c*w,y+200/c*h)
  
  beginShape();
  //rectangle part, needs to be made of 4 triangles because of issue
  fill(rocketBody)
  stroke(rocketBody)
  triangle(x+150/c*w,y+50/c*h,x+250/c*w,y+50/c*h,x+200/c*w,y+150/c*h)
  triangle(x+150/c*w,y+50/c*h,x+150/c*w,y+250/c*h,x+200/c*w,y+150/c*h)
  triangle(x+250/c*w,y+50/c*h,x+250/c*w,y+250/c*h,x+200/c*w,y+150/c*h)
  triangle(x+250/c*w,y+250/c*h,x+150/c*w,y+250/c*w,x+200/c*w,y+150/c*h)
  endShape();
  
  //Boost
  fill(rocketBurn)
  triangle(x+160/c*w,y+275/c*h,x+240/c*w,y+275/c*h,x+200/c*w,y+h)
  
  //RocketWindow
  fill(rocketWindow)
  circle(x+200/c*w,y+150/c*h,20)
}
