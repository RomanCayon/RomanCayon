// Player object
const player = {
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    health: 100,
    maxHealth: 100,
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
    heal: function(amount) {
        this.health = Math.min(this.health + amount, this.maxHealth);
        updateUI();
    }
};

// Update the UI with player information
function updateUI() {
    document.getElementById('level').innerText = player.level;
    document.getElementById('xp').innerText = player.xp;
    document.getElementById('xp-to-next-level').innerText = player.xpToNextLevel;
    document.getElementById('health').innerText = player.health;
    document.getElementById('xp-bar').style.width = (player.xp / player.xpToNextLevel * 100) + '%';
}

// Log events in the game log
function logEvent(message) {
    const log = document.getElementById('log');
    const listItem = document.createElement('li');
    listItem.innerText = message;
    log.appendChild(listItem);

    // Limit the number of logs to 5
    const logs = log.getElementsByTagName('li');
    if (logs.length > 5) {
        log.removeChild(logs[0]); // Remove the oldest log
    }

// Log materials in the materials log
function logMaterial(message) {
    const materialsLog = document.getElementById('materials');
    const listItem = document.createElement('li');
    listItem.innerText = message;
    materialsLog.appendChild(listItem);
}

// Simulate a quest
function quest() {
    const xpGained = 20;
    const questLog = [
        "You fought off a band of goblins!",
        "You rescued a villager from wolves!",
        "You found a hidden treasure!"
    ];
    const questResult = questLog[Math.floor(Math.random() * questLog.length)];
    logEvent(questResult);
    player.gainXp(xpGained);
}

// Simulate material gathering
function gatherMaterials() {
    const materials = [
        { name: 'Wood', value: 10 },
        { name: 'Stone', value: 20 },
        { name: 'Iron', value: 50 },
        { name: 'Gold', value: 100 },
    ];
    const material = materials[Math.floor(Math.random() * materials.length)];
    logMaterial(`You gathered ${material.name} worth ${material.value}`);
    player.gainXp(material.value);
}

// Simulate sleeping
function sleep() {
    const healingAmount = 10;
    player.heal(healingAmount);
    logEvent(`You slept and healed ${healingAmount} health.`);
}

// Attach event listeners to buttons
document.getElementById('quest-button').addEventListener('click', quest);
document.getElementById('gather-button').addEventListener('click', gatherMaterials);
document.getElementById('sleep-button').addEventListener('click', sleep);

// Initialize the game
document.addEventListener('DOMContentLoaded', (event) => {
    updateUI();
});
