ServerEvents.recipes((event) => {
  event.shapeless("create:mechanical_drill", ["create:andesite_casing", "thermal:drill_head"]);
  event.shapeless("create:mechanical_saw", ["create:andesite_casing", "thermal:saw_blade"]);
  event.smelting("create:andesite_alloy", "kubejs:mycelial_blend").xp(0.35);
  event.shapeless("kubejs:mycelial_blend", [
    "#forge:crops/flax",
    "kubejs:mushroom_paste",
    "#forge:crops/flax",
    "kubejs:mushroom_paste",
  ]);
  event.custom({
    type: "farmersdelight:cutting",
    ingredients: [{ tag: "forge:mushrooms" }],
    tool: { tag: "forge:tools/knives" },
    result: [{ item: "kubejs:mushroom_paste", count: 2 }],
  });
});
