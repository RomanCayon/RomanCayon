// Game variables
let player = {
    level: 1,
    experience: 0,
    gold: 0,
    resources: 0
};

// DOM elements
const levelDisplay = document.getElementById('level');
const experienceDisplay = document.getElementById('experience');
const goldDisplay = document.getElementById('gold');
const resourcesDisplay = document.getElementById('resources');
const gatherResourcesBtn = document.getElementById('gather-resources-btn');
const logList = document.getElementById('log-list');

// Event listeners
gatherResourcesBtn.addEventListener('click', gatherResources);

// Functions
function gatherResources() {
    const resourcesGained = Math.floor(Math.random() * 10) + 1; // Random resources gained (1-10)

    // Update player resources
    player.resources += resourcesGained;
    updatePlayerStats();

    // Log the action
    logAction(`Gathered ${resourcesGained} resources.`);
}

function updatePlayerStats() {
    levelDisplay.textContent = player.level;
    experienceDisplay.textContent = player.experience;
    goldDisplay.textContent = player.gold;
    resourcesDisplay.textContent = player.resources;
}

function logAction(message) {
    const logItem = document.createElement('li');
    logItem.textContent = message;
    logList.appendChild(logItem);
}

// Initial update of player stats
updatePlayerStats();

