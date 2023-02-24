const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Draw a rectangle
ctx.fillStyle = '#34568B';
ctx.fillRect(0, 0, 10, 10);

// Draw a circle
ctx.arc(50, 50, 50, 0, 2 * Math.PI);
ctx.fillStyle = '#FF6F61';
ctx.fill();

// Draw a line
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(50, 50);
ctx.lineWidth = 5;
ctx.strokeStyle = '#88B04B';
ctx.stroke();

// Draw text
ctx.font = '30px Arial';
ctx.fillStyle = '#45B8AC';
ctx.fillText('Hello World', 100, 75);

// Draw an image
const image = document.querySelector('img');
image.style.display = 'none';

image.addEventListener('load', () => {
    ctx.drawImage(image, 20, 20, 100, 100);
});