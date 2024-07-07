// Get the canvas element
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Game loop function
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw game elements
    // Example: Draw a rectangle
    ctx.fillStyle = '#ff0000';
    ctx.fillRect(50, 50, 100, 100);

    // Request animation frame to loop the game
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
