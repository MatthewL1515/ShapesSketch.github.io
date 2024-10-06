function setup() {
  createCanvas(400,400);
}

function draw() {
  background('#87ceeb');
  esb(400/4,400/4,400/2,400/2)
}

function esb(x,y,w,h){
  fill('red')
  stroke('black')
  // point 1, point 2, point 3
  // RocketTip
  triangle(x+200/400*w,y,x+150/400*w,y+50/400*h,x+250/400*w,y+50/400*h)
  
  //LeftRocketSide
  triangle(x+150/400*w,y+250/400*h,x,y+h,x+150/400*w,y+200/400*h)
  //RightRocketSide
  triangle(x+250/400*w,y+250/400*h,x+w,y+h,x+250/400*w,y+200/400*h)
  
  beginShape();
  //rectangle part, needs to be made of 4 triangles because of issue
  fill('grey')
  stroke('grey')
  triangle(x+150/400*w,y+50/400*h,x+250/400*w,y+50/400*h,x+200/400*w,y+150/400*h)
  triangle(x+150/400*w,y+50/400*h,x+150/400*w,y+250/400*h,x+200/400*w,y+150/400*h)
  triangle(x+250/400*w,y+50/400*h,x+250/400*w,y+250/400*h,x+200/400*w,y+150/400*h)
  triangle(x+250/400*w,y+250/400*h,x+150/400*w,y+250/400*w,x+200/400*w,y+150/400*h)
  endShape();
  
  //Boost
  fill('yellow')
  triangle(x+160/400*w,y+275/400*h,x+240/400*w,y+275/400*h,x+200/400*w,y+h)
  
  //RocketWindow
  fill('blue')
  circle(x+200/400*w,y+150/400*h,20)
}