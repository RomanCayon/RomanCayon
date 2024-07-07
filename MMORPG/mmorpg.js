// Game variables
let player = {
    level: 1,
    experience: 0,
    gold: 0,
    resources: 0
};

let questsCompleted = 0; // Track completed quests

// DOM elements
const levelDisplay = document.getElementById('level');
const experienceDisplay = document.getElementById('experience');
const goldDisplay = document.getElementById('gold');
const resourcesDisplay = document.getElementById('resources');
const gatherResourcesBtn = document.getElementById('gather-resources-btn');
const logList = document.getElementById('log-list');
const questList = document.getElementById('quest-list');

const MAX_LOG_ENTRIES = 5; // Maximum number of log entries to display

// Event listeners
gatherResourcesBtn.addEventListener('click', gatherResources);

// Initialize quests
initializeQuests();

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
    const logItems = logList.getElementsByTagName('li');

    // Check if log list exceeds maximum entries
    if (logItems.length >= MAX_LOG_ENTRIES) {
        // Remove the oldest entry
        logList.removeChild(logItems[0]);
    }

    // Add new log entry
    const logItem = document.createElement('li');
    logItem.textContent = message;
    logList.appendChild(logItem);
}

function initializeQuests() {
    for (let i = 1; i <= 50; i++) {
        const quest = createQuest(i);
        questList.appendChild(quest);
    }
}

function createQuest(questNumber) {
    const questItem = document.createElement('li');
    questItem.textContent = `Quest ${questNumber}: Collect 10 resources`;
    return questItem;
}

// Initial update of player stats
updatePlayerStats();
// Game variables
let player = {
    level: 1,
    experience: 0,
    gold: 0,
    resources: 0
};

let questsCompleted = 0; // Track completed quests

// DOM elements
const levelDisplay = document.getElementById('level');
const experienceDisplay = document.getElementById('experience');
const goldDisplay = document.getElementById('gold');
const resourcesDisplay = document.getElementById('resources');
const gatherResourcesBtn = document.getElementById('gather-resources-btn');
const logList = document.getElementById('log-list');
const questList = document.getElementById('quest-list');

const MAX_LOG_ENTRIES = 5; // Maximum number of log entries to display

// Event listeners
gatherResourcesBtn.addEventListener('click', gatherResources);

// Initialize quests
initializeQuests();

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
    const logItems = logList.getElementsByTagName('li');

    // Check if log list exceeds maximum entries
    if (logItems.length >= MAX_LOG_ENTRIES) {
        // Remove the oldest entry
        logList.removeChild(logItems[0]);
    }

    // Add new log entry
    const logItem = document.createElement('li');
    logItem.textContent = message;
    logList.appendChild(logItem);
}

function initializeQuests() {
    for (let i = 1; i <= 50; i++) {
        const quest = createQuest(i);
        questList.appendChild(quest);
    }
}

function createQuest(questNumber) {
    const questItem = document.createElement('li');
    questItem.textContent = `Quest ${questNumber}: Collect 10 resources`;
    return questItem;
}

// Initial update of player stats
updatePlayerStats();
