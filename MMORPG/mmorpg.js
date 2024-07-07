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
const questList = document.getElementById('quest-list');
const logList = document.getElementById('log-list');

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

function questAction(questNumber) {
    // Simulate completing a quest
    const questReward = Math.floor(Math.random() * 20) + 10; // Random reward (10-29)

    // Update player stats for completing the quest
    player.experience += questReward;
    questsCompleted++;

    // Update quest UI to indicate completion
    updateQuestStatus(questNumber);

    // Update player stats UI
    updatePlayerStats();

    // Log the action
    logAction(`Completed Quest ${questNumber} and gained ${questReward} experience.`);
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

    // Insert new log entry at the top (before the first child)
    logList.insertBefore(logItem, logList.firstChild);

    const logItems = logList.getElementsByTagName('li');

    // Check if log list exceeds maximum entries
    if (logItems.length > MAX_LOG_ENTRIES) {
        // Remove the last entry to maintain the maximum number
        logList.removeChild(logItems[MAX_LOG_ENTRIES]);
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
    questItem.addEventListener('click', () => questAction(questNumber)); // Execute quest action on click
    return questItem;
}

function updateQuestStatus(questNumber) {
    const questItems = questList.getElementsByTagName('li');
    const questItem = questItems[questNumber - 1]; // Adjust index since questNumber starts from 1
    questItem.classList.add('completed'); // Example: add completed class for styling or indication
}

// Initial update of player stats
updatePlayerStats();
