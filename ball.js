var length = data.length;

// you work goes here
// -----------------------
// var index = 0;
// var looper = setInterval(function(){
//     console.log(data[index]);
//     create(data[index].x, data[index].y, data[index].color);
//     index++;
//     if(index >= length) {
//         clearInterval(looper);
//     }
// }, 10);

var balls = [];
for (let i = 0; i < 20; i++) {
    let ball = create();
    ball.id = 'ball-' + i;
    balls.push(ball);
};

var constantMoving = (ball, i, velocity = 5) => {
//Set global variable that would contain the position, velocity and the html element "ball"

    function arrayRGB(ball) {
        var rgb = ball.style.background;
        rgb = rgb.replace(/[^\d,]/g, '').split(',');
        return rgb;
    }

    var positionX = 0;
    var positionY = 0;
    var reverseX = false;
    var reverseY = false;

    var red = parseInt(arrayRGB(balls[i])[0]);
    var green = parseInt(arrayRGB(balls[i])[1]);;
    var blue = parseInt(arrayRGB(balls[i])[2]);;
    var redReverse = false;
    var greenReverse = false;
    var blueReverse = false;
    var ballColor;

    //write a function that can change the position of the html element "ball"
    function moveBall(ball) {
        // two fixed x-axis coordinates (you will use these variable in step 3)
        var Xmin = 0;
        var Xmax = window.innerWidth - ball.offsetWidth - 5;
        var Ymin = 0;
        var Ymax = window.innerHeight - ball.offsetHeight - 5;

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
    setInterval(() => {
        moveBall(ball);
    }, 10);
    
}


let index = 0;
var createLoop = setInterval(() => {
    document.getElementsByTagName('body')[0].appendChild(balls[index]);
    constantMoving(balls[index], index);
    console.log(index);
    if(index > balls.length) {
        clearInterval(createLoop);
    }
    index++;
}, 2000);

