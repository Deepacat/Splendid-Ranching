// // Dialogue system with queuing and chainable configuration

// class DialogueConfig {
//     constructor(player, npc, text) {
//         this.player = player;
//         this.npc = npc;
//         this.text = text;

//         // Defaults
//         this.minX = -100;
//         this.maxX = 5;
//         this.minY = 5;
//         this.maxY = 5;
//         this.baseX = 5;
//         this.baseY = 5;
//         this.displayDuration = 100; // in ticks
//     }

//     minX(val) {
//         this.minX = val;
//         return this;
//     }

//     maxX(val) {
//         this.maxX = val;
//         return this;
//     }

//     minY(val) {
//         this.minY = val;
//         return this;
//     }

//     maxY(val) {
//         this.maxY = val;
//         return this;
//     }

//     baseX(val) {
//         this.baseX = val;
//         return this;
//     }

//     baseY(val) {
//         this.baseY = val;
//         return this;
//     }

//     displayDuration(val) {
//         this.displayDuration = val;
//         return this;
//     }

//     queue() {
//         let dialogueQueue = this.player.getPersistentData().get("DialogueQueue") || [];
//         dialogueQueue.push({
//             npc: this.npc,
//             text: this.text,
//             minX: this.minX,
//             maxX: this.maxX,
//             minY: this.minY,
//             maxY: this.maxY,
//             baseX: this.baseX,
//             baseY: this.baseY,
//             displayDuration: this.displayDuration
//         });
//         this.player.getPersistentData().put("DialogueQueue", dialogueQueue);

//         // Start dialogue if not already running
//         if (!this.player.getPersistentData().contains("DialogueSpeaker")) {
//             startNextDialogue(this.player);
//         }
//     }
// }

// function BeginDialogue(player, npc, text) {
//     const config = new DialogueConfig(player, npc, text);
//     config.queue();
//     return config;
// }

// function startNextDialogue(player) {
//     let dialogueQueue = player.getPersistentData().get("DialogueQueue") || [];

//     if (dialogueQueue.length === 0) {
//         return;
//     }

//     const dialogue = dialogueQueue[0];
//     player.getPersistentData().put("DialogueSpeaker", dialogue);
//     player.getPersistentData().put("DialogueAnimation", [0, dialogue.minX, 0, 0]);
// }

// function finishCurrentDialogue(player) {
//     let dialogueQueue = player.getPersistentData().get("DialogueQueue") || [];

//     if (dialogueQueue.length > 0) {
//         dialogueQueue.shift(); // Remove current dialogue
//         player.getPersistentData().put("DialogueQueue", dialogueQueue);
//     }

//     player.getPersistentData().remove("DialogueSpeaker");
//     player.getPersistentData().remove("DialogueAnimation");

//     // Start next dialogue if available
//     if (dialogueQueue.length > 0) {
//         startNextDialogue(player);
//     }
// }

// function printDialogueOverlay(player) {
//     const dialogue = player.getPersistentData().get("DialogueSpeaker");
//     if (!dialogue) return;

//     const animation = player.getPersistentData().get("DialogueAnimation");
//     const currentX = animation[1];
//     const currentTick = animation[0];
//     const lastCharLimit = animation[2];
//     const displayTime = animation[3];

//     const npc = dialogue.npc;
//     let text = dialogue.text;
//     const minX = dialogue.minX;
//     const maxX = dialogue.maxX;
//     const baseY = dialogue.baseY;
//     const displayDuration = dialogue.displayDuration;
//     const speakerItem = `kubejs:${npc}`;

//     if (currentX < maxX && displayTime == 0) {
//         // Do Fade in Animation
//         if (currentTick >= 1) {
//             player.persistentData.put('DialogueAnimation', [0, currentX + 10, lastCharLimit, displayTime]);
//         }
//         else {
//             player.persistentData.put('DialogueAnimation', [currentTick + 1, currentX, lastCharLimit, displayTime]);
//         }
//         text = '';
//     }
//     else {
//         // ANIMATION COMPLETE >> WRITE DIALOGUE TEXT
//         if (lastCharLimit < text.length) {
//             // Start Writing Text
//             if (currentTick >= 1) {
//                 player.persistentData.put('DialogueAnimation', [0, maxX, lastCharLimit + 2, displayTime]);
//             }
//             else {
//                 player.persistentData.put('DialogueAnimation', [currentTick + 1, maxX, lastCharLimit, displayTime]);
//             }
//             text = text.substring(0, lastCharLimit);
//         }
//         else {
//             // DIALOGUE TEXT COMPLETE >> SHOW FOR DISPLAY DURATION
//             if (displayTime < displayDuration) {
//                 // Every tick
//                 if (currentTick >= 1) {
//                     player.persistentData.put('DialogueAnimation', [0, maxX, lastCharLimit, displayTime + 1]);
//                 }
//                 else {
//                     player.persistentData.put('DialogueAnimation', [currentTick + 1, maxX, lastCharLimit, displayTime]);
//                 }
//             }
//             else {
//                 // WAIT IS OVER >> ANIMATE OUT
//                 if (currentX > minX) {
//                     if (currentTick >= 1) {
//                         player.persistentData.put('DialogueAnimation', [0, currentX - 10, lastCharLimit, displayTime]);
//                     }
//                     else {
//                         player.persistentData.put('DialogueAnimation', [currentTick + 1, currentX, lastCharLimit, displayTime]);
//                     }
//                 }
//                 else {
//                     // CLOSE THE MENU AND START NEXT DIALOGUE
//                     finishCurrentDialogue(player);
//                     return;
//                 }
//             }
//         }
//     }

//     const rootX = currentX;
//     const rootY = baseY;

//     player.paint({ '*': { remove: true } });
//     player.paint({
//         radioBG: {
//             type: 'rectangle',
//             x: rootX,
//             y: rootY,
//             w: 48,
//             h: 48,
//             color: '#FFFFFF',
//             texture: 'lostcontact:textures/gui/radio_overlay.png',
//             alignX: 'left',
//             alignY: 'top',
//             draw: 'ingame'
//         }
//     });
//     player.paint({
//         radioDialogue: {
//             type: 'rectangle',
//             x: rootX + 50,
//             y: rootY,
//             w: 96,
//             h: 48,
//             color: '#FFFFFF',
//             texture: 'lostcontact:textures/gui/radio_overlay_dialogue.png',
//             alignX: 'left',
//             alignY: 'top',
//             draw: 'ingame'
//         },
//         dialogueSpeaker: {
//             type: 'text',
//             text: npc,
//             scale: 0.5,
//             x: rootX + 55,
//             y: rootY + 4,
//             alignX: 'left',
//             alignY: 'top',
//             draw: 'ingame'
//         },
//         dialogueText: {
//             type: 'text',
//             textLines: splitStringToLines(text, 34),
//             scale: 0.5,
//             x: rootX + 55,
//             y: rootY + 20,
//             alignX: 'left',
//             alignY: 'top',
//             draw: 'ingame'
//         },
//         dialogueSpeakerIcon: {
//             type: 'item',
//             item: speakerItem,
//             w: 42,
//             h: 42,
//             x: rootX + 24,
//             y: rootY + 24,
//             alignX: 'left',
//             alignY: 'top',
//             draw: 'ingame'
//         }
//     });
// }

// function splitStringToLines(inputString, maxLineLength) {
//     let result = [];
//     let words = inputString.split(' ');
//     let currentLine = '';

//     for (let word of words) {
//         if ((currentLine + word).length <= maxLineLength) {
//             currentLine += (currentLine ? ' ' : '') + word;
//         } else {
//             result.push(currentLine);
//             currentLine = word;
//         }
//     }
//     if (currentLine) {
//         result.push(currentLine);
//     }
//     return result;
// }

// PlayerEvents.tick(event => {
//     const player = event.player;
//     if (player.getPersistentData().contains("DialogueSpeaker")) {
//         printDialogueOverlay(player);
//     }
//     else {
//         player.paint({ '*': { remove: true } });
//     }
// });

// // Example usage:
// ItemEvents.rightClicked('minecraft:stick', event => {
//     const player = event.player;

//     // Single dialogue
//     BeginDialogue(player, 'npc_reeve',
//         'Hello, I am a very long text box and I have a lot to say to you right now.'
//     )
//         .displayDuration(120)
//         .baseX(5)
//         .baseY(5);

//     // Chain multiple dialogues - they will queue and play one after another
//     // BeginDialogue(player, 'npc_reeve', 'First message').displayDuration(100);
//     // BeginDialogue(player, 'npc_reeve', 'Second message').displayDuration(100);
// });