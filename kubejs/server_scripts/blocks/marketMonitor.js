BlockEvents.broken("kubejs:market_monitor", (e) => {
    global.clearDisplaysAtPos(e.block, "market_monitor_text")
    global.clearDisplaysAtPos(e.block, "market_monitor_plort")
})