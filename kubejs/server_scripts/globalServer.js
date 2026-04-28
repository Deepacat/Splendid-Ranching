// priority: 1000
// Should always be the highest priority script in server

const $NbtUtils = Java.loadClass("net.minecraft.nbt.NbtUtils")
const $CuriosApi = Java.loadClass("top.theillusivec4.curios.api.CuriosApi")
const $SlimyConfig = Java.loadClass("io.github.chakyl.splendidslimes.SlimyConfig")
const $UsernameCache = Java.loadClass("net.minecraftforge.common.UsernameCache")

// List of known players on server for tooltips (Set in plortDataMangement)
let knownPlayers = {}

// Splendid Slimes config elements for tooltips
const splendid_config = {
    HAPPY_THRESHOLD: $SlimyConfig.slimeHappyThreshold,
    UNHAPPY_THRESHOLD: $SlimyConfig.slimeUnhappyThreshold,
    FURIOUS_THRESHOLD: $SlimyConfig.slimeFuriousThreshold,
    MAX_EATING_COOLDOWN: $SlimyConfig.slimeStarvingTime
}

const slimeBaseDefinitions = JsonIO.read("kubejs/server_scripts/slimes/slimeBaseDefinitions.jsonc");
const slimeBaseValues = JsonIO.read("kubejs/server_scripts/slimes/slimeBaseValues.jsonc");

// base slimes from splendid slimes that are disabled in this modpack
const disabledSlimes = ["webby"]

global.mainUiElementIds = [

];


const clearUiPaint = (player, ids) => {
    let removedText = {};
    let removedShadow = {};
    // Spawn and clear instance of paint element to prevent warnings that they don't exist
    ids.forEach((id) => {
        removedText[id] = { type: "text" };
        removedShadow[`${id}Shadow`] = { type: "text" };
    });
    player.paint(removedText);
    player.paint(removedShadow);
    ids.forEach((id) => {
        removedText[id] = { remove: true };
        removedShadow[`${id}Shadow`] = { remove: true };
    });
    player.paint(removedText);
    player.paint(removedShadow);
};

global.renderUiText = (player, server, messages, clearedMessages) => {
    server.scheduleInTicks(0, () => {
        clearUiPaint(player, clearedMessages);
        player.paint(messages);
        player.persistentData.ageLastShownMessage = player.age;
        server.scheduleInTicks(100, () => {
            if (player.age - player.persistentData.get("ageLastShownMessage") >= 100)
                clearUiPaint(player, clearedMessages);
        });
    });
};

global.clearUiItemPaint = (player, ids) => {
    let removedItem = {};
    // Spawn and clear instance of paint element to prevent warnings that they don't exist
    ids.forEach((id) => {
        removedItem[id] = { type: "item" };
    });
    player.paint(removedItem);
    ids.forEach((id) => {
        removedItem[id] = { remove: true };
    });
    player.paint(removedItem);
};

global.renderUiItemText = (player, items, ids) => {
    global.clearUiItemPaint(player, ids);
    player.paint(items);
};

global.addItemCooldown = (player, item, time) => {
    if (!player.isFake()) player.addItemCooldown(item, time);
};
