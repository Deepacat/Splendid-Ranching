// priority: 1000

// base slimes from splendid slimes that are disabled in this modpack
global.disabledSlimes = ["webby"]

// The main slime definitions file, 
// all slimes entries here will be generated
global.slimeDefinitionsData = {
    abyssal: {
        breed: "abyssal",
        name: "Abyssal",
        color: "#003249",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    alien: {
        breed: "alien",
        name: "Alien",
        color: "#994399",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    all_seeing: {
        breed: "all_seeing",
        name: "slime.splendid_slimes.all_seeing",
        color: "#65062b",
        particle: {
            item: "minecraft:cobweb"
        },
        diet: "diet.splendid_slimes.all_seeing",
        foods: [
            {
                tag: "forge:vegetables"
            }
        ],
        favorite_food: {
            item: "minecraft:golden_carrot"
        },
        negative_emit_effects: [
            {
                effect: "minecraft:poison",
                duration: 120,
                amplifier: 0
            }
        ],
        positive_emit_effects: [
            {
                effect: "minecraft:night_vision",
                duration: 300,
                amplifier: 0
            }
        ]
    },
    bitwise: {
        breed: "bitwise",
        name: "slime.splendid_slimes.bitwise",
        color: "#aa0f01",
        particle: {
            item: "minecraft:redstone_block"
        },
        diet: "diet.splendid_slimes.bitwise",
        foods: [
            {
                tag: "minecraft:logs"
            }
        ],
        favorite_food: {
            item: "minecraft:mangrove_log"
        }
    },
    blazing: {
        breed: "blazing",
        name: "slime.splendid_slimes.blazing",
        particle: {
            item: "minecraft:blaze_powder"
        },
        color: "#c96c03",
        diet: "diet.splendid_slimes.blazing",
        foods: [
            {
                tag: "forge:cooked_meat"
            }
        ],
        favorite_food: {
            item: "minecraft:cooked_porkchop"
        },
        traits: [
            "flaming"
        ]
    },
    bony: {
        breed: "bony",
        name: "slime.splendid_slimes.bony",
        color: "#e8e5d2",
        particle: {
            item: "minecraft:bone"
        },
        diet: "diet.splendid_slimes.bony",
        foods: [
            {
                item: "minecraft:milk_bucket"
            },
            {
                tag: "forge:raw_meat"
            },
            {
                tag: "forge:cooked_meat"
            },
            {
                tag: "splendid_slimes:animal_spawn_eggs"
            }
        ],
        favorite_food: {
            item: "minecraft:milk_bucket"
        },
        entities: [
            "minecraft:chicken",
            "minecraft:cow",
            "minecraft:pig",
            "minecraft:rabbit",
            "minecraft:sheep"
        ],
        favorite_entity: "minecraft:sheep"
    },
    boomcat: {
        breed: "boomcat",
        name: "slime.splendid_slimes.boomcat",
        color: "#8a8a8a",
        particle: {
            item: "minecraft:gunpowder"
        },
        diet: "diet.splendid_slimes.boomcat",
        foods: [
            {
                tag: "forge:raw_meat"
            },
            {
                tag: "forge:cooked_meat"
            },
            {
                tag: "splendid_slimes:animal_spawn_eggs"
            }
        ],
        favorite_food: {
            item: "minecraft:cooked_beef"
        },
        entities: [
            "minecraft:chicken",
            "minecraft:cow",
            "minecraft:pig",
            "minecraft:rabbit",
            "minecraft:sheep"
        ],
        favorite_entity: "minecraft:cow",
        traits: [
            "explosive"
        ]
    },
    burger: {
        breed: "burger",
        name: "Burger",
        color: "#723a1e",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    candy: {
        breed: "candy",
        name: "Candy",
        color: "#c094e3",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    charred: {
        breed: "charred",
        name: "Charred",
        color: "#290e00",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    crimson: {
        breed: "crimson",
        name: "Crimson",
        color: "#980000",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    crystal: {
        breed: "crystal",
        name: "Crystal",
        color: "#769ece",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    dark: {
        breed: "dark",
        name: "Dark",
        color: "#26003f",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    dusty: {
        breed: "dusty",
        name: "Dusty",
        color: "#575122",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    ender: {
        breed: "ender",
        name: "slime.splendid_slimes.ender",
        color: "#216d54",
        particle: {
            item: "minecraft:ender_pearl"
        },
        diet: "diet.splendid_slimes.ender",
        foods: [
            {
                tag: "forge:gems"
            }
        ],
        favorite_food: {
            item: "minecraft:amethyst_shard"
        },
        traits: [
            "foodporting"
        ],
        negative_commands: [
            "tp @e[distance=..8] @e[limit=1,sort=nearest]",
            "playsound minecraft:entity.enderman.teleport block @a[distance=..10]"
        ]
    },
    fire: {
        breed: "fire",
        name: "Fire",
        color: "#ff6613",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    forge: {
        breed: "forge",
        name: "Forge",
        color: "#705d50",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    forlorn: {
        breed: "forlorn",
        name: "Forlorn",
        color: "#463e29",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    fungus: {
        breed: "fungus",
        name: "Fungus",
        color: "#ff4e4e",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    gem: {
        breed: "gem",
        name: "Gem",
        color: "#33e4f0",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    geode: {
        breed: "geode",
        name: "Geode",
        color: "#8c7461",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    gold: {
        breed: "gold",
        name: "slime.splendid_slimes.gold",
        color: "#e9b115",
        particle: {
            item: "minecraft:raw_gold_block"
        },
        hat_y_offset: -1,
        diet: "diet.splendid_slimes.gold",
        foods: [
            {
                tag: "forge:ingots"
            }
        ],
        favorite_food: {
            item: "minecraft:copper_ingot"
        },
        traits: [
            "moody",
            "picky"
        ]
    },
    infernal: {
        breed: "infernal",
        name: "Infernal",
        color: "#fe1100",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    jewel: {
        breed: "jewel",
        name: "Jewel",
        color: "#27d263",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    jurassic: {
        breed: "jurassic",
        name: "Jurassic",
        color: "#d25d27",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    luminous: {
        breed: "luminous",
        name: "slime.splendid_slimes.luminous",
        color: "#ffbc5e",
        particle: {
            item: "minecraft:glowstone"
        },
        diet: "diet.splendid_slimes.luminous",
        foods: [
            {
                item: "minecraft:quartz_block"
            },
            {
                item: "minecraft:nether_quartz_ore"
            },
            {
                item: "minecraft:quartz"
            },
            {
                item: "minecraft:smooth_quartz"
            }
        ],
        favorite_food: {
            item: "minecraft:quartz_block"
        },
        negative_emit_effects: [
            {
                effect: "minecraft:glowing",
                duration: 220,
                amplifier: 0
            }
        ]
    },
    lush: {
        breed: "lush",
        name: "Lush",
        color: "#16852b",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    magma: {
        breed: "magma",
        name: "Magma",
        color: "#7a2214",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    magnetic: {
        breed: "magnetic",
        name: "Magnetic",
        color: "#2b3650",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    mechanical: {
        breed: "mechanical",
        name: "Mechanical",
        color: "#bd863f",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    metallic: {
        breed: "metallic",
        name: "Metallic",
        color: "#bebfd2",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    minty: {
        breed: "minty",
        name: "slime.splendid_slimes.minty",
        color: "#cd75a4",
        particle: {
            item: "minecraft:dragon_egg"
        },
        hat_y_offset: -0.7,
        diet: "diet.splendid_slimes.minty",
        foods: [
            {
                tag: "splendid_slimes:monster_spawn_eggs"
            }
        ],
        entities: [
            "minecraft:zombie",
            "minecraft:zombie_villager",
            "minecraft:skeleton",
            "minecraft:enderman",
            "minecraft:husk",
            "minecraft:stray",
            "minecraft:drowned",
            "minecraft:creeper",
            "minecraft:wither",
            "minecraft:warden",
            "minecraft:spider",
            "minecraft:cave_spider"
        ],
        favorite_entity: "minecraft:enderman",
        traits: [
            "feral",
            "defiant",
            "floating",
            "putrid"
        ],
        innate_effects: [
            {
                effect: "minecraft:strength",
                amplifier: 2
            },
            {
                effect: "minecraft:slow_falling",
                amplifier: 0
            }
        ],
        positive_emit_effects: [
            {
                effect: "minecraft:regeneration",
                duration: 40,
                amplifier: 0
            }
        ]
    },
    monster: {
        breed: "monster",
        name: "Monster",
        color: "#509e55",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    nuclear: {
        breed: "nuclear",
        name: "Nuclear",
        color: "#00ff08",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    ocean: {
        breed: "ocean",
        name: "Ocean",
        color: "#304398",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    orby: {
        breed: "orby",
        name: "slime.splendid_slimes.orby",
        color: "#b8e45a",
        particle: {
            item: "minecraft:experience_bottle"
        },
        hat_y_offset: -0.5,
        diet: "diet.splendid_slimes.orby",
        foods: [
            {
                tag: "splendid_slimes:animal_spawn_eggs"
            },
            {
                tag: "splendid_slimes:monster_spawn_eggs"
            }
        ],
        traits: [
            "defiant",
            "handy",
            "inverse"
        ],
        entities: [
            "minecraft:chicken",
            "minecraft:cow",
            "minecraft:pig",
            "minecraft:rabbit",
            "minecraft:sheep",
            "minecraft:zombie",
            "minecraft:zombie_villager",
            "minecraft:skeleton",
            "minecraft:enderman",
            "minecraft:husk",
            "minecraft:stray",
            "minecraft:drowned",
            "minecraft:creeper",
            "minecraft:warden",
            "minecraft:wither",
            "minecraft:spider",
            "minecraft:cave_spider"
        ],
        favorite_entity: "minecraft:skeleton",
        innate_effects: [
            {
                effect: "minecraft:strength",
                amplifier: 0
            }
        ]
    },
    phantom: {
        breed: "phantom",
        name: "slime.splendid_slimes.phantom",
        color: "#dcd9c0",
        particle: {
            item: "minecraft:lapis_block"
        },
        hat_z_offset: -0.06,
        diet: "diet.splendid_slimes.phantom",
        foods: [
            {
                tag: "minecraft:beds"
            }
        ],
        favorite_food: {
            item: "minecraft:purple_bed"
        },
        traits: [
            "floating"
        ],
        innate_effects: [
            {
                effect: "minecraft:slow_falling",
                amplifier: 0
            }
        ]
    },
    prisma: {
        breed: "prisma",
        name: "slime.splendid_slimes.prisma",
        color: "#a4d1c2",
        particle: {
            item: "minecraft:prismarine_shard"
        },
        diet: "diet.splendid_slimes.prisma",
        foods: [
            {
                tag: "minecraft:fishes"
            }
        ],
        favorite_food: {
            item: "minecraft:tropical_fish"
        },
        entities: [
            "minecraft:cod",
            "minecraft:salmon",
            "minecraft:pufferfish",
            "minecraft:tropical_fish"
        ],
        favorite_entity: "minecraft:tropical_fish",
        traits: [
            "aquatic",
            "spiky"
        ],
        innate_effects: [
            {
                effect: "minecraft:water_breathing",
                amplifier: 0
            }
        ],
        emit_effect_particle: "minecraft:splash",
        negative_emit_effects: [
            {
                effect: "minecraft:mining_fatigue",
                duration: 120,
                amplifier: 0
            }
        ],
        positive_emit_effects: [
            {
                effect: "minecraft:dolphins_grace",
                duration: 600,
                amplifier: 0
            },
            {
                effect: "minecraft:conduit_power",
                duration: 600,
                amplifier: 0
            }
        ]
    },
    puddle: {
        breed: "puddle",
        name: "slime.splendid_slimes.puddle",
        color: "#68c9ff",
        particle: {
            item: "minecraft:prismarine_shard"
        },
        diet: "diet.splendid_slimes.puddle",
        foods: [
            {
                tag: "minecraft:fishes"
            }
        ],
        favorite_food: {
            item: "minecraft:tropical_fish"
        },
        entities: [
            "minecraft:cod",
            "minecraft:salmon",
            "minecraft:pufferfish",
            "minecraft:tropical_fish"
        ],
        favorite_entity: "minecraft:tropical_fish",
        traits: [
            "aquatic",
            "spiky"
        ],
        innate_effects: [
            {
                effect: "minecraft:water_breathing",
                amplifier: 0
            }
        ],
        emit_effect_particle: "minecraft:splash",
        positive_emit_effects: [
            {
                effect: "minecraft:water_breathing",
                duration: 600,
                amplifier: 0
            }
        ]
    },
    quantum: {
        breed: "quantum",
        name: "Quantum",
        color: "#423364",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    rad: {
        breed: "rad",
        name: "Rad",
        color: "#6cbe3d",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    rock: {
        breed: "rock",
        name: "Rocky",
        color: "#4b4b4b",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    rotting: {
        breed: "rotting",
        name: "slime.splendid_slimes.rotting",
        color: "#6f4d1b",
        particle: {
            item: "minecraft:rotten_flesh"
        },
        diet: "diet.splendid_slimes.rotting",
        foods: [
            {
                tag: "forge:raw_meat"
            },
            {
                tag: "splendid_slimes:animal_spawn_eggs"
            }
        ],
        favorite_food: {
            item: "minecraft:chicken"
        },
        entities: [
            "minecraft:chicken",
            "minecraft:cow",
            "minecraft:pig",
            "minecraft:rabbit",
            "minecraft:sheep"
        ],
        traits: [
            "putrid"
        ],
        favorite_entity: "minecraft:chicken",
        hostile_to_entities: [
            "minecraft:villager"
        ],
        negative_emit_effects: [
            {
                effect: "minecraft:hunger",
                duration: 220,
                amplifier: 0
            }
        ],
        attack_commands: [
            "summon zombie ~ ~ ~ {DeathLootTable:\"minecraft:empty\",Health:8f,ArmorItems:[{},{},{},{id:\"minecraft:slime_block\",Count:1b}],ArmorDropChances:[0.085F,0.085F,0.085F,0.000F],Attributes:[{Name:generic.max_health,Base:8}]}"
        ]
    },
    sandy: {
        breed: "sandy",
        name: "Sandy",
        color: "#fffa85",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    sculk: {
        breed: "sculk",
        name: "Sculk",
        color: "#155152",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    shulking: {
        breed: "shulking",
        name: "slime.splendid_slimes.shulking",
        color: "#976997",
        particle: {
            item: "minecraft:purpur_block"
        },
        hat_y_offset: -1,
        diet: "diet.splendid_slimes.shulking",
        foods: [
            {
                item: "minecraft:popped_chorus_fruit"
            },
            {
                item: "minecraft:chorus_flower"
            },
            {
                item: "minecraft:chorus_plant"
            },
            {
                item: "minecraft:chorus_fruit"
            }
        ],
        favorite_food: {
            item: "minecraft:chorus_flower"
        },
        traits: [
            "foodporting"
        ],
        emit_effect_particle: "minecraft:end_rod",
        negative_emit_effects: [
            {
                effect: "minecraft:levitation",
                duration: 120,
                amplifier: 0
            }
        ]
    },
    slimy: {
        breed: "slimy",
        name: "slime.splendid_slimes.slimy",
        color: "#ff7d9d",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.slimy",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    stony: {
        breed: "stony",
        name: "Stony",
        color: "#717171",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    sweet: {
        breed: "sweet",
        name: "slime.splendid_slimes.sweet",
        color: "#eaeaea",
        hat_scale: 1,
        hat_y_offset: -0.5,
        diet: "diet.splendid_slimes.sweet",
        foods: [
            {
                tag: "forge:fruits"
            }
        ],
        favorite_food: {
            item: "minecraft:glow_berries"
        },
        traits: [
            "moody"
        ],
        innate_effects: [
            {
                effect: "minecraft:speed",
                amplifier: 2
            }
        ],
        positive_emit_effects: [
            {
                effect: "minecraft:speed",
                duration: 200,
                amplifier: 3
            }
        ]
    },
    tabby: {
        breed: "tabby",
        name: "Tabby",
        color: "#a39c98",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    tendril: {
        breed: "tendril",
        name: "Tendril",
        color: "#173837",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    time: {
        breed: "time",
        name: "Time",
        color: "#9692cf",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    tree: {
        breed: "tree",
        name: "Tree",
        color: "#80461f",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    warped: {
        breed: "warped",
        name: "Warped",
        color: "#05b9ad",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "replace me",
        foods: [
            {
                tag: "minecraft:flowers"
            }
        ],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    webby: {
        breed: "webby",
        name: "slime.splendid_slimes.webby",
        color: "#bebfd2",
        particle: {
            item: "minecraft:cobweb"
        },
        diet: "diet.splendid_slimes.webby",
        foods: [{}],
        favorite_food: {},
        negative_emit_effects: []
    },
    weeping: {
        breed: "weeping",
        name: "slime.splendid_slimes.weeping",
        particle: {
            item: "minecraft:ghast_tear"
        },
        color: "#cff1f1",
        diet: "diet.splendid_slimes.weeping",
        foods: [
            {
                tag: "forge:fruits"
            }
        ],
        traits: [
            "weeping"
        ],
        favorite_food: {
            item: "minecraft:glow_berries"
        }
    }
}