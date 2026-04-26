// Disables travelling through nether portals for any entity
// Technically blocks travelling to any dimension in any way including commands
// But that probably doesn't matter
ForgeEvents.onEvent("net.minecraftforge.event.entity.EntityTravelToDimensionEvent", e => {
    e.setCanceled(true)
})

/**
 * @param {Internal.ExplosionEvent} e
 * Fills a 3x3x3 area around explosions in acid with air
 */
global.onExplosion = (e) => {
    try {
        let server = e.getExplosion().level.server
        let { x, y, z } = {
            x: Math.floor(e.getExplosion().exploder.pos.x()),
            y: Math.floor(e.getExplosion().exploder.pos.y()),
            z: Math.floor(e.getExplosion().exploder.pos.z())
        }
        let block = e.getExplosion().level.getBlock(x, y, z)
        if (block.id !== "alexscaves:acid") { return }
        e.getExplosion().radius = 0
        Utils.server.runCommandSilent(`/fill ${x - 1} ${y - 1} ${z - 1} ${x + 1} ${y + 1} ${z + 1} air`)
    } catch (error) {
        console.error(error)
    }
}

ForgeEvents.onEvent("net.minecraftforge.event.level.ExplosionEvent", e => {
    global.onExplosion(e)
})
