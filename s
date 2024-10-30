const backgroundAnimation = document.querySelector('.background-animation');

// Create and animate balls
for (let i = 0; i < 10; i++) { // Adjust the number of balls as needed
  const ball = document.createElement('div');
  ball.className = 'ball';
  
  // Randomize position and animation duration
  ball.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
  ball.style.animationDuration = (Math.random() * 3 + 2) + 's'; // Random animation duration
  
  backgroundAnimation.appendChild(ball);
}

