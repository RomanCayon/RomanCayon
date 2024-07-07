document.addEventListener('DOMContentLoaded', function() {
    const ball = document.getElementById('ball');
    const paddle = document.getElementById('paddle');
    const playerScoreDisplay = document.getElementById('player-score');
    const computerScoreDisplay = document.getElementById('computer-score');

    let ballX = 290;
    let ballY = 190;
    let ballSpeedX = 5;
    let ballSpeedY = 2;
    let playerScore = 0;
    let computerScore = 0;

    function updateBall() {
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        // Check collision with walls
        if (ballY >= 380 || ballY <= 0) {
            ballSpeedY = -ballSpeedY;
        }
        if (ballX >= 580 || ballX <= 0) {
            ballSpeedX = -ballSpeedX;
            if (ballX <= 0) {
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
            } else if (ballX >= 580) {
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
            }
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
