// Whenever a slime dies (loses a size or converts to tarr) apply weakness to nearby tarrs
// to prevent quickly spreading throughout a base
EntityEvents.death("splendid_slimes:splendid_slime", e => {
    const X = e.entity.pos.x()
    const Y = e.entity.pos.y()
    const Z = e.entity.pos.z()

    let weakenRadius = 3
    e.entity.level
        .getEntitiesWithin(AABB.of(X, Y, Z, X, Y, Z).inflate(weakenRadius))
        .filter(/** @param {Internal.LivingEntity} entity */ entity => {
            let type = entity.type == 'splendid_slimes:tarr'
            let dist = entity.distanceToSqr(e.entity.pos) <= weakenRadius * weakenRadius
            return type && dist
        })
        .forEach(/** @param {Internal.LivingEntity} entity */ entity => {
            entity.potionEffects.add("weakness", 300, 99, true, true)
        })
})

// Weakness on newly created tarrs so they don't kill mobs as soon as they spawn
EntityEvents.spawned("splendid_slimes:tarr", e => {
    e.entity.potionEffects.add("weakness", 600, 99, true, true)
})
