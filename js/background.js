'use scrict';
// Star Background
window.requestAnimFrame = (function () { return window.requestAnimationFrame; })();
var canvas = document.getElementById('space');
var c = canvas.getContext('2d');
var numStars = 2200;
var radius = '0.' + Math.floor(Math.random() * 9) + 1;
var focalLength = canvas.width * 2;
var centerX, centerY;
var stars = [], star;
var i;

var animate = true;

initializeStars();

function executeFrame() {

  if (animate)
    requestAnimFrame(executeFrame);
  moveStars();
  drawStars();
}

function initializeStars() {
  centerX = canvas.width / 2;
  centerY = canvas.height / 2;

  stars = [];
  for (i = 0; i < numStars; i++) {
    star = {
      x: Math.random() * 1920,
      y: Math.random() * 1080,
      z: Math.random() * 1920,
      o: '0.' + Math.floor(Math.random() * 99) + 1
    };
    stars.push(star);
  }
}

function moveStars() {
  for (i = 0; i < numStars; i++) {
    star = stars[i];
    star.z--;

    if (star.z <= 0) {
      star.z = 1920;
    }
  }
}

function drawStars() {
  var pixelX, pixelY, pixelRadius;

  // Resize to the screen
  if (canvas.width !== window.innerWidth || canvas.width !== window.innerWidth) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeStars();
  }

  c.fillStyle = 'rgba(0,0,0,1)';
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.fillStyle = 'rgba(0, 0, 0, ' + radius + ')';
  for (i = 0; i < numStars; i++) {
    star = stars[i];

    pixelX = (star.x - centerX) * (focalLength / star.z);
    pixelX += centerX;
    pixelY = (star.y - centerY) * (focalLength / star.z);
    pixelY += centerY;
    pixelRadius = 1 * (focalLength / star.z);

    c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
    c.fillStyle = 'rgba(255, 255, 255, ' + star.o + ')';
    c.fill();
  }
}
executeFrame();
