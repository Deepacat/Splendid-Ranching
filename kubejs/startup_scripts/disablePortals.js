// Disables travelling through nether portals for any entity
// Technically blocks travelling to any dimension in any way including commands
// But that probably doesn't matter
ForgeEvents.onEvent("net.minecraftforge.event.entity.EntityTravelToDimensionEvent", e => {
    e.setCanceled(true)
})
