//Set global variable that would contain the position, velocity and the html element "ball"
var ball = document.getElementById('ball');
var velocity = 5;
var positionX = 0;
var positionY = 0;
var reverseX = false;
var reverseY = false;

var red = 0;
var green = 100;
var blue = 200;
var redReverse = false;
var greenReverse = false;
var blueReverse = false;
var ballColor;

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 0;
  var Xmax = window.innerWidth - ball.offsetWidth;
  var Ymin = 0;
  var Ymax = window.innerHeight - ball.offsetHeight;

  if (reverseX === false) {
    positionX = positionX + velocity;
  }
  else {
    positionX = positionX - velocity;
  }
  if (reverseY === false) {
    positionY = positionY + velocity;
  }
  else {
    positionY = positionY - velocity;
  }

  ball.style.left = positionX + 'px';
  ball.style.top = positionY + 'px';

  if(positionX >= Xmax || positionX <= Xmin) {
    reverseX = !reverseX;
  }
  if(positionY >= Ymax || positionY <= Ymin) {
      reverseY = !reverseY;
  }

  if(redReverse == false) {
      red++;
  }
  else {
      red--;
  }
  if(greenReverse == false) {
      green++;
  }
  else {
      green--;
  }
  if(blueReverse == false) {
      blue++;
  }
  else {
      blue--;
  }
  ballColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
  ball.style.backgroundColor = ballColor;
  console.log(ballColor);

  if(red > 254 || red < 1) {
      redReverse = !redReverse;
  }
  if(green > 254 || green < 1) {
      greenReverse = !greenReverse;
  }
  if(blue > 254 || blue < 1) {
      blueReverse = !blueReverse;
  }
}

// This call the moveBall function every 10ms
setInterval(moveBall, 10);