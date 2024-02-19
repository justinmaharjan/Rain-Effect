const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const numDrops = 100;
const drops = [];

for (let i = 0; i < numDrops; i++) {
  drops.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    length: Math.random() * 20 + 10,
    speed: Math.random() * 5 + 2,
  });
}

function drawRain() {
  c.clearRect(0, 0, canvas.width, canvas.height);

  drops.forEach((drop) => {
    c.beginPath();
    c.moveTo(drop.x, drop.y);
    c.lineTo(drop.x, drop.y + drop.length);
    c.strokeStyle = "blue";
    c.lineWidth = 2;
    c.stroke();

    drop.y += drop.speed;

    if (drop.y > canvas.height) {
      drop.y = 0;
      drop.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(drawRain);
}
0.0;

drawRain();
