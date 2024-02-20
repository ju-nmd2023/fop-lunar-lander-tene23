//setup the canvas
function setup() {
  createCanvas(600, 300);
  background(255, 255, 255);
}

//Draw the background with a blue sky, ocean, and iceblock
function scenery() {
  push();
  noStroke();
  //draw the sky in a standard light blue html color

  fill(172, 219, 232);
  rect(0, 0, 600, height);

  //draw the ocean
  fill(72, 157, 207);
  rect(0, 200, 600, 100);

  //draw the iceblock
  fill(215, 237, 250);
  ellipse(300, 280, 160, 50);
  pop();
}

//draw icebergs
function iceberg() {
  push();
  noStroke();
  fill(215, 237, 250);
  triangle(0, 210, 43, 170, 85, 210);
  pop();
}

/*Step 2
  Draw the penguin, dont forget to add x and y (position) as a parameter, 
  because the penguin needs to move*/
function penguin(x, y) {
  push();
  translate(x, y);

  //black body and head
  fill(0, 0, 0);
  //body
  ellipse(280, 230, 75, 80);
  //head
  ellipse(280, 175, 68, 70);

  //face white
  beginShape();
  fill(250);
  vertex(268, 202);
  bezierVertex(224, 190, 280, 100, 300, 202);
  endShape();

  beginShape();
  fill(250);
  vertex(268, 202);
  bezierVertex(284, 96, 330, 200, 292, 202);
  noStroke();

  endShape();

  //bodywhite
  fill(250);
  ellipse(280, 225, 55, 75);

  //left wing

  //right wing

  //feet
  function feet(x) {
    fill(212, 130, 36);
    ellipse(x, 270, 30, 15);
    noStroke();
  }
  feet(300);
  feet(262);

  //beak
  triangle(275, 188, 280, 195, 285, 188);

  //eyes
  function eyes(x) {
    fill(0, 0, 0);
    ellipse(x, 176, 10, 13);
    fill(250);
    ellipse(x, 173, 3, 3);
  }
  eyes(270);
  eyes(290);

  pop();
}
//start button
function startButton() {
  push();
  let x = 150;
  let y = 40;

  fill(222, 243, 252);
  stroke(44, 92, 112);
  strokeWeight(5);
  rect(230, 100, x, y);
  textSize(20);
  text("Start Game", 278, 125);

  pop();
}

//Restart button
function restart() {
  push();

  let x = 150;
  let y = 40;

  fill(222, 243, 252);
  stroke(44, 92, 112);
  strokeWeight(5);
  rect(230, 100, x, y);
  textSize(20);
  text("Restart", 278, 125);

  pop();
}

function gameover() {
  fill(212, 130, 36);
  textSize(40);
  text("Game Over", 200, 80);
}

function youwin() {
  fill(212, 130, 36);

  textSize(40);
  text("You Win", 200, 80);
}
//Add variable so things are happening when game is running, is true
let gameIsRunning = true;
let gameOver = false;

/*Step 3
  Add gravity to the penguin by using a variable for the y position of the penguin
  Add velocity and acceleration */

//define a variable, this variable is the value for the penguins start y position
let penguinY = -280;
//Add velocity to mimic gravity
let velocity = 0.9;
//Add acceleration
const acceleration = 0.05;

//----Function draw
function draw() {
  //draws objects
  scenery();
  penguin(20, penguinY);
  iceberg();

  //more icebergs
  //2nd iceberg from the left
  push();
  translate(50, -105);
  scale(1.5);
  iceberg();
  pop();

  //3rd iceberg from the left
  push();
  translate(390, -96);
  scale(1.5);
  iceberg();
  pop();

  //4th iceberg from the left
  push();
  translate(460, -180);
  scale(1.9);
  iceberg();
  pop();

  startButton();

  restart();

  gameover();

  youwin();
  //---If statements

  /*Step 4
  Make the penguin fly by clicking the mouse button
  - Add an if statement
  - velocity = velocity - 0.2 since the acceleration 0.1 is too little
  */

  if (keyIsDown(38)) {
    velocity = velocity - 0.2;
  }

  if (gameIsRunning === true) {
    /*Giving movement to the penguin
     */
    penguinY = penguinY + velocity;
    velocity = velocity + acceleration;
    //velocity= hastighet
    //acceleration= usual acceleration
  }

  /*Step 5
  Detect the collision between the penguin and the iceblock. 
  If the penguin hits the ground, the game should stop.
  How to do it:
  - Change the direction, form the pingpong animation
  - Using an if statement*/
  /*if penguin y value is bigger than 10, the gam is no longer running
  console will show Game over*/

  if (penguinY > 10) {
    gameIsRunning = false;
  }

  if (penguinY > 10 && velocity > 2) {
    gameIsRunning = false;
    gameOver = true;
    //console.log("Game Over");
    restart();
  }

  if (penguinY > 10 && velocity <= 2) {
    gameIsRunning = false;
    gameOver = false;
    //console.log("You Win!!");
    youwin();
    restart();
  }
} //end of function draw
