// slime list in slimeDefinitions.js

ServerEvents.highPriorityData(e => {
    let slimeList = []
    for (const [slimeType, slimeData] of Object.entries(global.slimeDefinitionsData)) {
        // if slime is in disabled list
        if (global.disabledSlimes[slimeType]) {
            e.addJson( // overwrite slime data, disabling it
                `splendid_slimes:slimes/${slimeData.breed}.json`,
                { conditions: [{ type: "forge:false" }] }
            )
        } else {
            // create new slime/overwrite existing
            e.addJson(
                `splendid_slimes:slimes/${slimeType}.json`, slimeData
            )
        }
        slimeList.push(slimeType)
    }
    console.log(`Generated slimes: ${slimeList.join(", ")}`)
})