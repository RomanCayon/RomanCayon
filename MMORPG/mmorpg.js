// Get the canvas element
const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');

// Player object
const player = {
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    x: canvas.width / 2,
    y: canvas.height / 2,
    width: 50,
    height: 50,
    color: '#00f',
    gainXp: function(amount) {
        this.xp += amount;
        if (this.xp >= this.xpToNextLevel) {
            this.levelUp();
        }
        updateUI();
    },
    levelUp: function() {
        this.xp -= this.xpToNextLevel;
        this.level += 1;
        this.xpToNextLevel = Math.floor(this.xpToNextLevel * 1.5);
        logEvent(`You leveled up to level ${this.level}!`);
    },
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
};

// Update the UI with player information
function updateUI() {
    document.getElementById('level').innerText = player.level;
    document.getElementById('xp').innerText = player.xp;
    document.getElementById('xp-to-next-level').innerText = player.xpToNextLevel;
}

// Log events in the game log
function logEvent(message) {
    const log = document.getElementById('log');
    const listItem = document.createElement('li');
    listItem.innerText = message;
    log.appendChild(listItem);
}

// Simulate gaining XP over time
function gainXpOverTime() {
    const xpPerInterval = 10;
    player.gainXp(xpPerInterval);
    logEvent(`Gained ${xpPerInterval} XP.`);
    setTimeout(gainXpOverTime, 3000); // Gain XP every 3 seconds
}

// Game loop function
function gameLoop() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw player
    player.draw();

    // Request animation frame to loop the game
    requestAnimationFrame(gameLoop);
}

// Start the game
document.addEventListener('DOMContentLoaded', (event) => {
    updateUI();
    gainXpOverTime();
    gameLoop();
});
