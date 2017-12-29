// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min, max) {
    var num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

//Ball constructor

function Ball(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
}

Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
}

Ball.prototype.update = function () {
    //Si se acerca al margen, entonces q retroceda
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }
    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }
    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }
    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }
    this.x += this.velX;
    this.y += this.velY;
}
Ball.prototype.collisionDetect = function () {
    for (var j = 0; j < balls.length; j++) {
        if (!(this === balls[j])) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
            }
        }
    }
}
//--Animating the ball -------------------------------------
console.log('Animating the ball');
var balls = []; //Guardamos todas las bolas que se crean en este Array
console.log('before loop()');

function loop() {
    console.log('Inside loop()');
    ctx.fillStyle = 'rgba(0,0,0,0.4)';
    ctx.fillRect(0, 0, width, height);

    while (balls.length < 18) {
        var ball = new Ball(
            random(0, width),
            random(0, height),
            random(-2, 0),
            random(-2, 0),
            'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
            random(5, 30)
        );
        balls.push(ball); // La ultima creada la envia al final con push()
    }
    for (var i = 0; i < balls.length; i++) {
        console.log('i = ' + i);
        balls[i].draw();
        balls[i].update();
        balls[i].collisionDetect();
    }
    requestAnimationFrame(loop);
}
loop();

var testBall = new Ball(50, 100, 4, 4, 'blue', 10);
var testBall2 = new Ball(0, 0, 4, 4, 'red', 30);
