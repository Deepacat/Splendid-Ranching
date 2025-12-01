ServerEvents.recipes((event) => {
  const removedTypes = [

  ];

  const removedIDs = [
    'create:crafting/kinetics/mechanical_drill',
    'create:crafting/kinetics/mechanical_saw',
    'create:crafting/materials/andesite_alloy_from_zinc',
    'create:crafting/materials/andesite_alloy',
    'create:mixing/andesite_alloy_from_zinc',
    'create:mixing/andesite_alloy'
  ];
  const removedInputs = [];
  const removedOutputs = [];

  removedTypes.forEach((type) => event.remove({ type: type }));
  removedIDs.forEach((id) => event.remove({ id: id }));
  removedInputs.forEach((input) => event.remove({ input: input }));
  removedOutputs.forEach((output) => event.remove({ output: output }));
});