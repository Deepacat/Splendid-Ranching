BlockEvents.broken("kubejs:market_monitor", (e) => {
    global.clearOldDisplay(e.block, "market_monitor_text");
    global.clearOldDisplay(e.block, "market_monitor_plort");
});
