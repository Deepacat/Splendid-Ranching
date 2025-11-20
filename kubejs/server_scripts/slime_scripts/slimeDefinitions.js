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
            item: "alexscaves:abyssmarine"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.abyssal",
        foods: [
            { item: "alexscaves:lanternfish" },
            { item: "alexscaves:tripodfish" },
            { item: "alexscaves:radgill" },
            { item: "alexscaves:sea_pig" },
            { item: "alexscaves:trilocaris_tail" },
            { item: "alexscaves:spawn_egg_gossamer_worm" },
        ],
        entities: [
            "alexscaves:gossamer_worm",
        ],
        favorite_food: {
            item: "alexscaves:sea_pig"
        }
    },
    alien: {
        breed: "alien",
        name: "Alien",
        color: "#994399",
        particle: {
            item: "minecraft:purpur_block"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.alien",
        foods: [
            { item: "supplementaries:soap" },
            { item: "minecraft:amethyst_shard" },
        ],
        favorite_food: {
            item: "supplementaries:soap"
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
        foods: [{ tag: "forge:chests" }],
        favorite_food: { item: "woodworks:jungle_chest" }
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
                tag: "minecraft:coals"
            }
        ],
        favorite_food: {
            item: "minecraft:coal"
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
            { item: "supplementaries:pancake" },
            { tag: "kubejs:baked_slices" }
        ],
        favorite_food: {
            item: "farmersdelight:cake_slice"
        }
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
            { tag: "forge:cooked_meat" }
        ],
        favorite_food: {
            item: "minecraft:cooked_chicken"
        },
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
        diet: "diet.splendid_slimes.burger",
        foods: [
            { item: "farmersdelight:hamburger" }
        ]
    },
    candy: {
        breed: "candy",
        name: "Candy",
        color: "#c094e3",
        particle: {
            item: "alexscaves:candy_cane_block"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.candy",
        foods: [
            { item: "minecraft:sugar" },
            { tag: "kubejs:candies" },
            { tag: "alexscaves:gummy_items" }

        ],
        favorite_food: {
            item: "alexscaves:sweetish_fish_red"
        }
    },
    charred: {
        breed: "charred",
        name: "Charred",
        color: "#290e00",
        particle: {
            item: "minecraft:charcoal"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.charred",
        foods: [
            { tag: "minecraft:logs" }
        ],
        favorite_food: {
            item: "quark:azalea_log"
        }
    },
    crimson: {
        breed: "crimson",
        name: "Crimson",
        color: "#980000",
        particle: {
            item: "minecraft:nether_wart_block"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.crimson",
        foods: [
            { item: "minecraft:blaze_powder", item: "minecraft:twisting_vines" }
        ],
        favorite_food: {
            item: "minecraft:twisting_vines"
        }
    },
    crystal: {
        breed: "crystal",
        name: "Crystal",
        color: "#769ece",
        particle: {
            item: "quark:indigo_corundum"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.crystal",
        foods: [
            { tag: "forge:berries" }
        ],
        favorite_food: {
            item: "minecraft:glow_berries"
        }
    },
    dark: {
        breed: "dark",
        name: "Dark",
        color: "#26003f",
        particle: {
            item: "minecraft:obsidian"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.dark",
        foods: [
            { item: "minecraft:glow_berries" },
            { item: "minecraft:glow_lichen" },
            { item: "minecraft:glowstone" },
            { item: "minecraft:glow_ink_sac" }
        ],
        favorite_food: {
            item: "minecraft:glow_ink_sac"
        }
    },
    dusty: {
        breed: "dusty",
        name: "Dusty",
        color: "#575122",
        particle: {
            item: "minecraft:gravel"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.dusty",
        foods: [{ item: "supplementaries:ash" }, { item: "create:powdered_obsidian" }],
        favorite_food: {
            item: "create:powdered_obsidian"
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
        foods: [{ item: "quark:chorus_fruit_block" }, { item: "minecraft:chorus_flower" }],
        entities: [
            'minecraft:endermite'
        ],
        favorite_entity: "minecraft:endermite",
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
            item: "minecraft:magma_block"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.fire",
        foods: [
            { tag: "forge:logs" },
            { tag: "minecraft:coals" },
            { item: "supplementaries:lumisene_bottle" }
        ],
        favorite_food: {
            item: "supplementaries:lumisene_bottle"
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
        diet: "diet.splendid_slimes.forge",
        foods: [
            { item: "farmersdelight:roast_chicken_block" }, { item: "farmersdelight:squid_ink_pasta" }, { item: "farmersdelight:grilled_salmon" }, { item: "farmersdelight:roasted_mutton_chops" }, { item: "farmersdelight:vegetable_noodles" }
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
            item: "alexscaves:thornwood_wood"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.forlorn",
        foods: [
            { item: "alexscaves:thornwood_branch" },
            { item: "alexscaves:thornwood_log" },
        ],
        favorite_food: {
            item: "alexscaves:thornwood_branch"
        }
    },
    fungus: {
        breed: "fungus",
        name: "Fungus",
        color: "#ff4e4e",
        particle: {
            item: "galosphere:lichen_moss"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.fungus",
        foods: [
            { item: "minecraft:glow_lichen" },
            { item: "galosphere:lichen_moss" },
            { item: "galosphere:bowl_lichen" },
            { item: "galosphere:lichen_shelf" },
            { item: "galosphere:lichen_roots" },
            { item: "quark:glow_lichen_growth" },
            { item: "galosphere:lichen_cordyceps" }
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
            item: "minecraft:diamond_ore"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.gem",
        foods: [
            { item: "minecraft:tuff" },
            { item: "minecraft:calcite" },
            { item: "minecraft:smooth_basalt" }
        ],
        favorite_food: {
            item: "minecraft:calcite"
        }
    },
    geode: {
        breed: "geode",
        name: "Geode",
        color: "#8c7461",
        particle: {
            item: "minecraft:iron_ore"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.geode",
        foods: [
            { item: "minecraft:tuff" },
            { item: "minecraft:sandstone" },
            { item: "architects_palette:myonite" }
        ],
        favorite_food: {
            item: "architects_palette:myonite"
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
            { item: "minecraft:golden_carrot" }, { item: "minecraft:golden_apple" }, { item: "galosphere:golden_lichen_cordyceps" }, { item: "atmospheric:golden_dragon_fruit" }
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
            item: "alexscaves:primal_magma"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.infernal",
        foods: [
            { item: "minecraft:red_nether_bricks", item: "architects_palette:molten_nether_bricks" }
        ],
        favorite_food: {
            item: "architects_palette:molten_nether_bricks"
        }
    },
    jewel: {
        breed: "jewel",
        name: "Jewel",
        color: "#27d263",
        particle: {
            item: "minecraft:emerald_block"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.jewel",
        foods: [{ item: "minecraft:amethyst_shard", item: "minecraft:amethyst_cluster", item: "minecraft:prismarine_crystals" }],
        favorite_food: {
            item: "minecraft:amethyst_cluster"
        }
    },
    jurassic: {
        breed: "jurassic",
        name: "Jurassic",
        color: "#d25d27",
        particle: {
            item: "alexscaves:dinosaur_chop"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.jurassic",
        foods: [{ tag: "forge:cooked_meat" }],
        favorite_food: {
            item: "minecraft:cooked_beef"
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
        foods: [{ item: "minecraft:quartz_block" }, { item: "minecraft:nether_quartz_ore" }, { item: "minecraft:quartz" }, { item: "minecraft:smooth_quartz" }],
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
            item: "minecraft:moss_block"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.lush",
        foods: [{ tag: "forge:seeds" }, { item: "minecraft:bone_meal" }, { item: "quark:moss_paste" }],
        favorite_food: {
            item: "quark:moss_paste"
        }
    },
    magma: {
        breed: "magma",
        name: "Magma",
        color: "#7a2214",
        particle: {
            item: "minecraft:magma_block"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.magma",
        foods: [{ item: "minecraft:magma_block" }, { item: "alexscaves:primal_magma" }],
        favorite_food: {
            item: "alexscaves:primal_magma"
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
        diet: "diet.splendid_slimes.magnetic",
        foods: [{ tag: "forge:ingots" }],
        favorite_food: {
            item: "minecraft:iron_ingot"
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
        diet: "diet.splendid_slimes.mechanical",
        foods: [{ item: "minecraft:andesite" }, { item: "create:andesite_alloy" }],
        favorite_food: {
            item: "create:andesite_alloy"
        }
    },
    metallic: {
        breed: "metallic",
        name: "Metallic",
        color: "#bebfd2",
        particle: {
            item: "galosphere:silver_block"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.metallic",
        foods: [{ tag: "forge:raw_materials" }],
        favorite_food: {
            item: "galosphere:raw_silver"
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
        foods: [{ item: "minecraft:chorus_flower" }],
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
            item: "architects_palette:rotten_flesh_block"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.monster",
        foods: [{ tag: "forge:raw_meat" }, { tag: "forge:cooked_meat" }],
        favorite_food: {
            item: "minecraft:cooked_porkchop"
        }
    },
    neodymium: {
        breed: "neodymium",
        name: "Neodymium",
        color: "#896a8d",
        particle: {
            item: "alexscaves:energized_galena_neutral"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.neodymium",
        foods: [{ tag: "forge:nuggets" }],
        favorite_food: {
            item: "minecraft:iron_nugget"
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
        diet: "diet.splendid_slimes.nuclear",
        foods: [{ item: "alexscaves:uranium_rod" }]
    },
    ocean: {
        breed: "ocean",
        name: "Ocean",
        color: "#304398",
        particle: {
            item: "minecraft:water_bucket"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.ocean",
        foods: [{ item: "minecraft:kelp" }, { item: "minecraft:dried_kelp" }, { tag: "minecraft:fishes" }],
        favorite_food: {
            item: "minecraft:pufferfish"
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
        foods: [{ tag: "splendid_slimes:animal_spawn_eggs" }],
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
            "minecraft:sheep"
        ],
        favorite_entity: "minecraft:cow",
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
        foods: [{ tag: "minecraft:wools" }, { tag: "minecraft:beds" }],
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
        foods: [{ tag: "forge:cooked_fishes" }],
        favorite_food: {
            item: "farmersdelight:cooked_salmon_slice"
        },
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
        foods: [{ tag: "minecraft:fishes" }],
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
        diet: "diet.splendid_slimes.quantum",
        foods: [{ item: "architects_palette:unobtanium" }]
    },
    rad: {
        breed: "rad",
        name: "Rad",
        color: "#6cbe3d",
        particle: {
            item: "alexscaves:unrefined_waste"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.rad",
        foods: [{ item: "alexscaves:radgill" }, { item: "alexscaves:spelunkie" }, { item: "alexscaves:slam" }, { item: "alexscaves:green_soylent" }],
        favorite_food: {
            item: "alexscaves:slam"
        }
    },
    radiant: {
        breed: "radiant",
        name: "Radiant",
        color: "#f0ff80",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.radiant",
        foods: [{ item: "alexscaves:sundae" }],
        favorite_food: {
            item: "alexscaves:sundae"
        }
    },
    rocky: {
        breed: "rocky",
        name: "Rocky",
        color: "#4b4b4b",
        particle: {
            item: "minecraft:deepslate"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.rocky",
        foods: [{ tag: "forge:vegetables", item: 'minecraft:pumpkin_pie' }],
        favorite_food: {
            item: "minecraft:pumpkin_pie"
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
        foods: [{ tag: "forge:raw_meat" }, { tag: "splendid_slimes:animal_spawn_eggs" }],
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
            item: "minecraft:sand"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.sandy",
        foods: [{ tag: "minecraft:fruits" }],
        favorite_food: {
            item: "atmospheric:passion_fruit"
        }
    },
    sculk: {
        breed: "sculk",
        name: "Sculk",
        color: "#155152",
        particle: {
            item: "minecraft:sculk"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.sculk",
        foods: [{ item: "create:experience_nugget" }],
        favorite_food: { item: "create:experience_nugget" }
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
        foods: [{ item: "minecraft:purpur_block" }, { item: "architects_palette:oracle_jelly" }, { item: "architects_palette:choral_end_stone_bricks" }],
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
        foods: [{ tag: "minecraft:flowers" }, { tag: "forge:vegetables" }, { tag: "forge:fruits" }, { tag: "forge:cooked_meat" }, { tag: "forge:raw_meat" },],
        favorite_food: {
            item: "minecraft:blue_orchid"
        }
    },
    stony: {
        breed: "stony",
        name: "Stony",
        color: "#717171",
        particle: {
            item: "minecraft:andesite"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.stony",
        foods: [{ item: "minecraft:gravel" }, { item: "create:scoria" }, { item: "minecraft:basalt" }],
        favorite_food: {
            item: "create:scoria"
        }
    },
    sweet: {
        breed: "sweet",
        name: "slime.splendid_slimes.sweet",
        color: "#eaeaea",
        hat_scale: 1,
        hat_y_offset: -0.5,
        diet: "diet.splendid_slimes.sweet",
        foods: [{ tag: "forge:fruits" }],
        favorite_food: {
            item: "minecraft:apple"
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
            item: "minecraft:gray_wool"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.tabby",
        foods: [{ tag: "forge:raw_meat" }, { tag: "kubejs:small_animals" }],
        entities: [
            "minecraft:rabbit",
            "minecraft:chicken"
        ],
        favorite_entity: "minecraft:rabbit"
    },
    tendril: {
        breed: "tendril",
        name: "Tendril",
        color: "#173837",
        particle: {
            item: "minecraft:sculk_catalyst"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.tendril",
        foods: [{ item: "minecraft:sculk_sensor" }]
    },
    time: {
        breed: "time",
        name: "Time",
        color: "#9692cf",
        particle: {
            item: "minecraft:pink_concrete"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.time",
        foods: [{ item: "create:experience_block" }]
    },
    tree: {
        breed: "tree",
        name: "Tree",
        color: "#80461f",
        particle: {
            item: "minecraft:oak_log"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.tree",
        foods: [{ item: "minecraft:bone_meal" }, { item: "create:tree_fertilizer" }, { item: "alexscaves:guano" }],
        favorite_food: {
            item: "create:tree_fertilizer"
        }
    },
    warped: {
        breed: "warped",
        name: "Warped",
        color: "#05b9ad",
        particle: {
            item: "minecraft:warped_wart_block"
        },
        hat_y_offset: -0.55,
        diet: "diet.splendid_slimes.warped",
        foods: [{ item: "minecraft:blaze_powder" }, { item: "minecraft:weeping_vines" }],
        favorite_food: {
            item: "minecraft:weeping_vines"
        }
    },
    webby: {
        breed: "webby",
        name: "disabled",
        color: "#bebfd2",
        particle: {
            item: "minecraft:cobweb"
        },
        diet: "disabled",
    },
    weeping: {
        breed: "weeping",
        name: "slime.splendid_slimes.weeping",
        particle: {
            item: "minecraft:ghast_tear"
        },
        color: "#cff1f1",
        diet: "diet.splendid_slimes.weeping",
        foods: [{ tag: "forge:mushrooms" }, { item: "minecraft:warped_fungus" }, { item: "minecraft:crimson_fungus" }],
        traits: [
            "weeping"
        ],
        favorite_food: {
            item: "minecraft:warped_fungus"
        }
    }
}
