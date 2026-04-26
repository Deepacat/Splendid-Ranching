const slimeBiomeList = {
    "splendid_ranching:dry_reef": ["slimy", "tabby", "dusty", "sandy", "fire"],
    "splendid_ranching:indigo_quarry": ["puddle", "rocky", "monster", "orby", "lush", "crystal", "alien"],
    "splendid_ranching:magma_mounts": ["rocky", "monster", "fire", "dusty"],
    "splendid_ranching:moss_blanket": ["slimy", "puddle", "tabby", "lush"],
    "splendid_ranching:opal_desert": ["slimy", "orby", "sweet", "dusty", "crystal", "sandy", "alien"],
    "splendid_ranching:slimey_sea": ["puddle", "sandy", "lush", "crystal"],

    "alexscaves:abyssal_chasm": ["abyssal", "ocean"],
    "alexscaves:candy_cavity": ["slimy", "orby", "sweet", "candy"],
    "alexscaves:forlorn_hollows": ["puddle", "monster", "lush", "forlorn"],
    "alexscaves:magnetic_caves": ["rocky", "monster", "crystal", "neodymium"],
    "alexscaves:primordial_caves": ["lush", "fire", "tabby", "jurassic"],
    "alexscaves:toxic_caves": ["rocky", "monster", "orby", "dusty", "crystal", "rad"]
}

// get slime spawn event and replace them with a random breed from their biome
EntityEvents.spawned('splendid_slimes:splendid_slime', e => {
    let biome = e.level.getBiome(e.entity.pos).unwrapKey().get().location()
    let slimeMob = e.entity
    if (slimeMob.nbt.Breed != false) { return }

    if (slimeBiomeList[biome] === undefined) {
        console.error(`biome ${biome} not found in slimeBiomeList`)
        e.cancel()
    }

    let randomSlimeBreed = slimeBiomeList[biome][Math.floor(Math.random() * slimeBiomeList[biome].length)]

    if (slimeBaseDefinitions[randomSlimeBreed] === undefined) {
        console.error(`slime breed ${randomSlimeBreed} not found in slimeDefinitionsData`)
        e.cancel()
    }

    let copyNbt = Object.assign({}, slimeMob.nbt)

    let newSlimeNbt = {
        "Breed": `splendid_slimes:${randomSlimeBreed}`,
        "Attributes": [
            {
                "Name": "minecraft:generic.max_health",
                "Base": 20
            }
        ],
        "Health": 20,
        "Happiness": 500,
        "Size": 1
    }
    Object.assign(copyNbt, newSlimeNbt)
    slimeMob.mergeNbt(copyNbt)
    // console.log(`attempting to spawn ${randomType} slime at ${e.entity.pos} in biome ${biome}`)
})
