// // Tarr bombs
// e.create('kubejs:water_grenade')
//     .tooltip(Text.of(["§8[§7 Purifies §cTarrs§7 in a §bsmall§7 area §8]"]))
//     .displayName('Water Grenade')
// e.create('kubejs:water_bomb')
//     .tooltip(Text.of(["§8[§7 Purifies §cTarrs§7 in a §bmedium§7 area §8]"]))
//     .displayName('Water Bomb')
// e.create('kubejs:water_nuke')
//     .tooltip(Text.of(["§8[§7 Purifies §cTarrs§7 in a §blarge§7 area §8]"]))
//     .displayName('Tsarr Bomba')

// Throwable bomb projectile for purifying tarrs

/** @param {Internal.ContextUtils$ProjectileEntityHitContext} context */
global.projHit = (context) => {
    const { entity, result } = context
    if (entity.level.isClientSide()) return
    const rX = result.location.x()
    const rY = result.location.y()
    const rZ = result.location.z()

    // explosion effects
    entity.level.spawnParticles(`supplementaries:bomb_explosion`, false, rX, rY + 0.25, rZ, 1, 1, 1, 10, 0)
    entity.level.spawnParticles(`alexscaves:big_splash`, false, rX, rY + 0.25, rZ, 2.5, 0, 2.5, 25, 0)
    entity.level.spawnParticles(`alexscaves:bio_pop`, false, rX, rY + 0.25, rZ, 2.5, 0, 2.5, 25, 0)
    entity.level.spawnParticles(`alexscaves:big_splash_effect`, false, rX, rY + 0.25, rZ, 2.5, 0, 2.5, 50, 0)
    entity.level.playSound(null, rX, rY, rZ, "alexscaves:mine_guardian_explode", "players", 1, Math.random() * (2 - 1.6) + 1.6)

    let explosionRadius = 7.5
    entity.level
        // get enities within 7.5 block range cube I think
        .getEntitiesWithin(AABB.of(rX, rY, rZ, rX, rY, rZ).inflate(explosionRadius))
        // filter all mobs but tarrs
        .filter(/** @param {Internal.LivingEntity} entity */ entity => {
            let type = entity.type == 'splendid_slimes:tarr'
            let dist = entity.distanceToSqr(result.location) <= explosionRadius * explosionRadius
            return type && dist
        })
        // loop every tarr and hurt + apply weakness
        .forEach(/** @param {Internal.LivingEntity} entity */ entity => {
            entity.potionEffects.add("weakness", 200, 99, true, true)
            entity.attack(entity.damageSources().generic(), 8)
        })
    // remove projectile entity after explosion
    entity.remove("discarded")
}

// registering projectile + item
StartupEvents.registry('entity_type', event => {
    let proj = event.create('tarr_bomb', 'entityjs:projectile')
    proj.renderOffset(0, 0, 0)
    proj.renderScale(1, 1, 1)
    proj.isAttackable(false)
    proj.sized(1, 1)
    proj.item(item => { item.canThrow(true) }) // add a throwable item for the projectile
    proj.onHitBlock(context => { global.projHit(context) })
    proj.onHitEntity(context => { global.projHit(context) })
})
