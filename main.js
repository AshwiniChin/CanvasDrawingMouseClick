
/**function setup is used to create a canvas on screen syntax- 
*createCanvas(width,height);
*/
function setup() {
  canvas = createCanvas(700, 400);
}

function draw() {
  if (mouseIsPressed) {
    fill("cyan");
    ellipse(mouseX, mouseY, 80, 80);
  } else {
    fill(255);
  }

}
function clearCanvas() {
  clear();
}


