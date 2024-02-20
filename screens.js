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


function startScreen () {
    scenery();
  }
  
  //Game screen
  function gameScreen () {
  
  }
  
  //End screen
  function endScreen () {
  
  }

