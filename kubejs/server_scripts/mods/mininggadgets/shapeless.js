ServerEvents.recipes(e => {
    // All function the same, make them swappable
    
    // mk1 > mk2
    e.shapeless('mininggadgets:mininggadget_fancy', ['mininggadgets:mininggadget_simple'])
        .modifyResult((grid, result) => {
            let input = grid.find('mininggadgets:mininggadget_simple')
            return result.withNBT(input.nbt)
        })
        .id(`kubejs:mininggadgets/shapeless/mk1_to_mk2`)
    // mk2 > mk3
    e.shapeless('mininggadgets:mininggadget', ['mininggadgets:mininggadget_fancy'])
        .modifyResult((grid, result) => {
            let input = grid.find('mininggadgets:mininggadget_fancy')
            return result.withNBT(input.nbt)
        })
        .id(`kubejs:mininggadgets/shapeless/mk2_to_mk3`)
    // mk3 > mk1
    e.shapeless('mininggadgets:mininggadget_simple', ['mininggadgets:mininggadget'])
        .modifyResult((grid, result) => {
            let input = grid.find('mininggadgets:mininggadget')
            return result.withNBT(input.nbt)
        })
        .id(`kubejs:mininggadgets/shapeless/mk3_to_mk1`)
})