// Canvas setup for bouncing balls
const canvas = document.createElement("canvas");
canvas.id = "backgroundCanvas";
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Ball physics setup with continuous bounce
const balls = [];
const gravity = 0.2;
const colorChangeSpeed = 0.01; // Speed of color transition

for (let i = 0; i < 10; i++) {
    balls.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 15 + Math.random() * 20,
        colorHue: Math.random() * 360,
        dx: Math.random() * 2 - 1,
        dy: Math.random() * 2 - 1
    });
}

function animateBalls() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    balls.forEach(ball => {
        // Gradual color transition
        ball.colorHue = (ball.colorHue + colorChangeSpeed) % 360;
        const color = `hsl(${ball.colorHue}, 100%, 50%)`;

        // Draw ball
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();

        // Continuous bounce without friction
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
            ball.dy = -ball.dy;
        }
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
            ball.dx = -ball.dx;
        }

        ball.x += ball.dx;
        ball.y += ball.dy;
    });
    requestAnimationFrame(animateBalls);
}

animateBalls();

