ServerEvents.recipes(e => {
    for (let [slimeType, _] of Object.entries(global.slimeDefinitionsData)) {
        let valueData = global.baseSlimeValueData[slimeType]
        let disabled = global.disabledSlimes.includes(slimeType)

        if (valueData && disabled) { // skip and log if slimes disabled but has value data
            console.warn(`"${slimeType}" slime is disabled but has value data!`)
            continue
        }
        if (disabled) continue // skip disabled slimes
        if (valueData === undefined) { // skip and log if no value data
            console.warn(`no slime value data for - "${slimeType}"`)
            continue
        }

        // these recipes don't function they're just there to display selling in recipe viewer
        e.recipes.mbd2.plort_selling()
            .inputItems(
                Item.of(`splendid_slimes:plort`, `{plort:{id:"splendid_slimes:${slimeType}"}}`).weakNBT()
            )
    }
})