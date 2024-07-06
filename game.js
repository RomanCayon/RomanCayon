document.addEventListener('DOMContentLoaded', () => {
    const output = document.getElementById('game-output');
    const input = document.getElementById('player-input');
    const button = document.getElementById('submit-btn');

    const gameState = {
        currentRoom: 'start',
        rooms: {
            start: {
                description: 'You are in a small room. There is a door to the north.',
                commands: {
                    go: {
                        north: 'hallway'
                    }
                }
            },
            hallway: {
                description: 'You are in a hallway. There are doors to the south and east.',
                commands: {
                    go: {
                        south: 'start',
                        east: 'kitchen'
                    }
                }
            },
            kitchen: {
                description: 'You are in a kitchen. There is a door to the west.',
                commands: {
                    go: {
                        west: 'hallway'
                    }
                }
            }
        }
    };

    function outputText(text) {
        const newParagraph = document.createElement('p');
        newParagraph.textContent = text;
        output.appendChild(newParagraph);
        output.scrollTop = output.scrollHeight;
    }

    function processCommand(command) {
        const [verb, noun] = command.split(' ');
        const currentRoom = gameState.rooms[gameState.currentRoom];

        if (currentRoom.commands[verb] && currentRoom.commands[verb][noun]) {
            gameState.currentRoom = currentRoom.commands[verb][noun];
            outputText(gameState.rooms[gameState.currentRoom].description);
        } else {
            outputText('Invalid command');
        }
    }

    button.addEventListener('click', () => {
        const command = input.value.trim().toLowerCase();
        if (command) {
            processCommand(command);
            input.value = '';
        }
    });

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            button.click();
        }
    });

    // Initial room description
    outputText(gameState.rooms[gameState.currentRoom].description);
});
