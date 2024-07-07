document.addEventListener('DOMContentLoaded', function() {
    const ball = document.getElementById('ball');
    const paddle = document.getElementById('paddle');

    let ballX = 290;
    let ballY = 190;
    let ballSpeedX = 5;
    let ballSpeedY = 2;

    function updateBall() {
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        // Check collision with walls
        if (ballY >= 380 || ballY <= 0) {
            ballSpeedY = -ballSpeedY;
        }
        if (ballX >= 580 || ballX <= 0) {
            ballSpeedX = -ballSpeedX;
        }

        // Check collision with paddle
        if (ballX <= 20 && ballY >= paddle.offsetTop && ballY <= paddle.offsetTop + paddle.offsetHeight) {
            ballSpeedX = -ballSpeedX;
        }

        // Update ball position
        ball.style.left = ballX + 'px';
        ball.style.top = ballY + 'px';
    }

    function gameLoop() {
        updateBall();
        requestAnimationFrame(gameLoop);
    }

    gameLoop();

    // Paddle controls
    document.addEventListener('mousemove', function(e) {
        paddle.style.top = (e.clientY - 50) + 'px';
    });
});
