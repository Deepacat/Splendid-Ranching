//priority: 1000

// Global variable for storing recipe stages, done in startup for server and client access without
// data sending (didn't work great kinda)

/* stage_id: {
    name: stageDisplayName, // Used for tooltips, should probably match the research quest name
    ingredients: itemids[] // All the items that are recipe gated behind this stage (ONLY VANILLA RECIPE TYPES)
} */

// PLEEEEEEEEEASE DON'T MAKE DUPLICATE ITEMS IN STAGES THANK YOU. (WILL BREAK EVERYTHING I THINK)
global.recipeStages = {
    // crate
    "create_basic": {
        "name": "Basic Mechanical Components",
        "ingredients": ["create:cogwheel", "create:large_cogwheel", "create:shaft", "create:gearbox", "create:vertical_gearbox", "create:encased_chain_drive"]
    },
    "create_water": {
        "name": "Water Rotation",
        "ingredients": ["create:water_wheel"]
    },
    "create_wind": {
        "name": "Wind Rotation",
        "ingredients": ["create:windmill_bearing"]
    },
    "create_blaze": {
        "name": "Blaze Burning",
        "ingredients": ["create:empty_blaze_burner"]
    },
    "create_glue": {
        "name": "Super Glue",
        "ingredients": ["create:super_glue"]
    },
    "create_harvest": {
        "name": "Harvesting \& Sawing",
        "ingredients": ["create:mechanical_saw", "create:mechanical_harvester"]
    },
    "create_process": {
        "name": "Mechanical Processing",
        "ingredients": ["create:mechanical_mixer", "create:mechanical_press", "create:millstone"]
    },
    "create_interact": {
        "name": "Placing \& Breaking",
        "ingredients": ["create:mechanical_drill", "create:deployer"]
    },
    "create_cart": {
        "name": "Cart Contraptions",
        "ingredients": ["create:cart_assembler"]
    },
    "create_train": {
        "name": "Trains",
        "ingredients": ["create:track_station", "create:controls", "create:schedule"]
    },
    "create_package": {
        "name": "Package Logistics",
        "ingredients": ["create:packager", "create:package_frogport", "create:stock_ticker", "create:stock_link"]
    },
    "create_fluids": {
        "name": "Fluid Logistics",
        "ingredients": ["#kubejs:fluid_logistics"]
    },
    "create_gauge": {
        "name": "Factory Gauges",
        "ingredients": ["create:factory_gauge", "#kubejs:extra_gauges"]
    },
    "create_boiler": {
        "name": "Steam Boilers",
        "ingredients": ["create:steam_engine"]
    },
    "create_electric": {
        "name": "Electrical Management",
        "ingredients": ["createaddition:capacitor", "createaddition:rolling_mill", "createaddition:portable_energy_interface"]
    },
    "create_mechanical_craft": {
        "name": "Mechanical Crafting",
        "ingredients": ["create:mechanical_crafter"]
    },
    // bosnia
    "botania_start": {
        "name": "Botanic Beginnings",
        "ingredients": ["botania:fertilizer", "#kubejs:apothecaries", "botania:twig_wand"]
    },
    "botania_mana": {
        "name": "Mana Management",
        "ingredients": ["botania:mana_spreader", "botania:mana_pool", "botania:diluted_pool", "botania:spark"]
    },
    "botania_alchemy": {
        "name": "Transmutation",
        "ingredients": ["botania:alchemy_catalyst"]
    },
    "botania_altar": {
        "name": "Runic Infusing",
        "ingredients": ["botania:runic_altar"]
    },
    "botania_terra": {
        "name": "Terra Agglomeration",
        "ingredients": ["botania:terra_plate"]
    },
    "botania_elven": {
        "name": "Elven Gateway",
        "ingredients": ["botania:natura_pylon"]
    },
    "botania_conjuration": {
        "name": "Duplication",
        "ingredients": ["botania:conjuration_catalyst"]
    },
    "botania_corporea": {
        "name": "Spirtual Networking",
        "ingredients": ["botania:corporea_index", "botania:corporea_spark"]
    },
    "botania_gaia": {
        "name": "Gaia Guardian",
        "ingredients": ["botania:gaia_pylon"]
    },

}
