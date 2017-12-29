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

//Shape constructor (ex-Ball constructor)

function Shape(x, y, velX, velY, exists) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.exists = exists;
}

function Ball(x, y, velX, velY, exists, color, size) {
    Shape.call(this, x, y, velX, velY, exists);
    this.color = color;
    this.size = size;
}
Ball.prototype.constructor = Ball;

function EvilCircle(x, y, exists, color, size, velX, velY) {
    Shape.call(this, x, y, exists);
    this.color = 'white';
    this.size = 50;
    this.velX = 20;
    this.velY = 20;
}

EvilCircle.prototype.constructor;

// FUNCTIONS ------------------------------------------------------------

//EvilCircle functions ------------------------------
EvilCircle.prototype.draw = function () {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
}
EvilCircle.prototype.checkBounds = function () {
    //Si se acerca al margen, entonces q retroceda
    if ((this.x + this.size) >= width) {
        this.x = -(this.size);
    }
    if ((this.x - this.size) <= 0) {
        this.x = -(this.size);
    }
    if ((this.y + this.size) >= height) {
        this.y = -(this.size);
    }
    if ((this.y - this.size) <= 0) {
        this.y = -(this.size);
    }
}
EvilCircle.prototype.setControls = function () {
    var _this = this;
    window.onkeydown = function (e) {
        if (e.keyCode === 65) {
            _this.x -= _this.velX;
        } else if (e.keyCode === 68) {
            _this.x += _this.velX;
        } else if (e.keyCode === 87) {
            _this.y -= _this.velY;
        } else if (e.keyCode === 83) {
            _this.y += _this.velY;
        }
    }
}
EvilCircle.prototype.collisionDetect = function () {
    for (var j = 0; j < balls.length; j++) {
        if (balls[j].exists) {
            var dx = this.x - balls[j].x;
            var dy = this.y - balls[j].y;
            var distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].exists = false;
            }
        }
    }
}
//Ball functions ------------------------------
Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.lineWidth = 3;
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
    ctx.fillStyle = 'rgba(0,0,0,0.75)';
    ctx.fillRect(0, 0, width, height);

    while (balls.length < 10) {
        var ball = new Ball(
            random(0, width),
            random(0, height),
            random(-7, -5),
            random(-7, -5),
            true,
            'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')',
            random(20, 30)
        );
        balls.push(ball); // La ultima creada la envia al final con push()
    }
    //    function EvilCircle(x, y, exists, color, size, velX, velY) {
    var evilCircle = new EvilCircle(
        800,
        500,
        true,
        'white',
        20,
        20,
        20
    );
    evilCircle.setControls();
    console.log('balls.length: ' + balls.length);
    var ballEated = 0;
    for (var i = 0; i < balls.length; i++) {
        console.log('i = ' + i);
        if (balls[i].exists) {
            balls[i].draw();
            balls[i].update();
            balls[i].collisionDetect();
        } else if (!(balls[i].exists)) {
            ballEated++;
        }
    }
    evilCircle.draw();
    evilCircle.checkBounds();
    evilCircle.collisionDetect();

    // Counting eated balls
    var para = document.querySelector('p');
    para.textContent = ballEated;
    if (ballEated === balls.length) {
        ctx.fillStyle = 'rgba(255,255,0,0.75)';
        ctx.fillRect(0, 0, width, height);
    }

    requestAnimationFrame(loop);
}
loop();

//var testBall = new Ball(50, 100, 4, 4, 'blue', 10);
//var testBall2 = new Ball(0, 0, 4, 4, 'red', 30);
