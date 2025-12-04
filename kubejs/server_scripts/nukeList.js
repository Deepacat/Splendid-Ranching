// All entries in global.nukelist will be removed from recipe viewers, loot
// tables, recipes, tags, ect.

global.nukelist = [
  "alexscaves:drain",
  'createaddition:electrum_ingot',
  "createaddition:electrum_nugget",
  "essentials:bricks_bronze",
  "essentials:bricks_copshowium",
  "essentials:bricks_gold",
  "essentials:bricks_iron",
  "essentials:bricks_tin",
  "essentials:fertile_soil_acacia",
  "essentials:fertile_soil_beetroot",
  "essentials:fertile_soil_berry",
  "essentials:fertile_soil_birch",
  "essentials:fertile_soil_brown_mushroom",
  "essentials:fertile_soil_carrot",
  "essentials:fertile_soil_dark_oak",
  "essentials:fertile_soil_jungle",
  "essentials:fertile_soil_netherwart",
  "essentials:fertile_soil_oak",
  "essentials:fertile_soil_potato",
  "essentials:fertile_soil_red_mushroom",
  "essentials:fertile_soil_spruce",
  "essentials:fertile_soil_wheat",
  "mininggadgets:upgrade_battery_creative",
  "mininggadgets:upgrade_efficiency_2",
  "mininggadgets:upgrade_efficiency_4",
  "thermal:apple_block",
  "thermal:beetroot_block",
  "thermal:carrot_block",
  "thermal:copper_nugget",
  "thermal:flax_block",
  "thermal:flax_seeds",
  "thermal:flax",
  "thermal:onion_block",
  "thermal:onion_seeds",
  "thermal:onion",
  "thermal:potato_block",
  "thermal:rice_block",
  "thermal:rice_seeds",
  "thermal:rice",
  "thermal:sugar_cane_block",
  "thermal:tomato_block",
  "thermal:tomato_seeds",
  "thermal:tomato",
  /^thermal:.*invar.*/,
  /^thermal:.*lead.*/,
  /^thermal:.*silver.*/,
  /^thermal:.*tin.*/,
  /^thermal:.+?coin/,
  /^thermal:.+?dust/,
  /^thermal:.+?gear/,
  /^thermal:.+?plate/,
];

ServerEvents.tags("item", (event) => {
  event.removeAllTagsFrom(global.nukelist);
  event.add("splendid_ranching:nukelist", global.nukelist);
  event.add("c:hidden_from_recipe_viewers", global.nukelist);
});

ServerEvents.tags("block", (event) => {
  event.removeAllTagsFrom(global.nukelist);
});

ServerEvents.tags("fluid", (event) => {
  event.removeAllTagsFrom(global.nukelist);
  event.add("splendid_ranching:nukelist", global.nukelist);
  event.add("c:hidden_from_recipe_viewers", global.nukelist);
});

ServerEvents.recipes((event) => {
  event.remove({ input: global.nukelist });
  event.remove({ output: global.nukelist });
});

LootJS.modifiers((event) => {
  event
    .addLootTypeModifier(
      LootType.ENTITY,
      LootType.UNKNOWN,
      LootType.BLOCK,
      LootType.CHEST,
      LootType.FISHING,
      LootType.GIFT,
      LootType.ADVANCEMENT_ENTITY,
      LootType.ADVANCEMENT_REWARD,
      LootType.PIGLIN_BARTER
    )
    .removeLoot(global.nukelist);
});
