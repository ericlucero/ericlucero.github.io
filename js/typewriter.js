// window.onresize = displayWindowSize();
window.onresize = displayWindowSize;
window.onload = function() {
  displayWindowSize()
  changePosition();
  // elem =   document.getElementById("screenYposition");
  var elements = document.getElementsByClassName('typewrite');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    // if (toRotate) {
    //   new TxtType(elements[i], JSON.parse(toRotate), period);
    // }
  }
};

// window.addEventListener("resize", displayWindowSize);

function displayWindowSize() {
  // your size calculation code here
  var myWidth = window.innerWidth;
  var myHeight = window.innerHeight;

  document.getElementById("dimensions").textContent = myWidth + "x" + myHeight;
};

function changePosition() {

  var writer = document.getElementsByClassName('typewrite');
  for (var i = 0; i < writer.length; i++) {
    var randiTop = Math.random() * (window.innerHeight);
    var randiLeft = Math.random() * (window.innerWidth - 60);
    writer[i].style.top = randiTop.toString() + 'px';
    writer[i].style.left = randiLeft.toString() + 'px';
  }
}


var TxtType = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {

    this.txt = fullTxt.substring(0, this.txt.length + 1);

  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;

  } else if (this.isDeleting && this.txt === '') {
    changePosition();
    this.isDeleting = false;
    this.loopNum++;
    delta = 1000;
  }

  setTimeout(function() {
    that.tick();
  }, delta);

  function changePosition() {
    var randiTop = Math.random() * (window.innerHeight);
    var randiLeft = Math.random() * (window.innerWidth - 60);
    var writer = document.getElementById('typewrt');
    writer.style.top = randiTop.toString() + 'px';
    writer.style.left = randiLeft.toString() + 'px';
  }

};
