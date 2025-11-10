ServerEvents.recipes(e => {
    e.remove({ type: 'splendid_slimes:plort_pressing' })

    // loop over all slimes
    for (const [slimeType, slimeData] of Object.entries(global.slimeDefinitionsData)) {
        let valueData = global.baseSlimeValueData[slimeType]

        if (valueData === undefined) { continue }
        if (1 > valueData.slimeDupeCost || valueData.slimeDupeCost === undefined) { continue }

        e.custom({
            type: "splendid_slimes:plort_pressing",
            ingredient: {
                count: valueData.slimeDupeCost,
                item: "splendid_slimes:plort",
                nbt: {
                    plort: {
                        id: `splendid_slimes:${slimeType}`
                    }
                }
            },
            result: {
                item: "splendid_slimes:slime_heart",
                nbt: {
                    slime: {
                        id: `splendid_slimes:${slimeType}`
                    }
                }
            }
        }).id(`kubejs:generated/heart_pressing/${slimeType}`)
    }
})

// let placeholder = {
//     type: "splendid_slimes:plort_pressing",
//     ingredient: {
//         item: "splendid_slimes:slime_heart",
//         nbt: {
//             slime: {
//                 id: "splendid_slimes:luminous"
//             }
//         }
//     },
//     output: {
//         item: "splendid_slimes:slime_heart",
//         nbt: {
//             slime: {
//                 id: "splendid_slimes:webby"
//             }
//         }
//     },
//     result: {
//         item: "splendid_slimes:slime_heart",
//         nbt: {
//             slime: {
//                 id: "splendid_slimes:all_seeing"
//             }
//         }
//     }
// }

let placeholder = {
    type: "splendid_slimes:plort_pressing",
    ingredient: {
        count: 32,
        item: "splendid_slimes:plort",
        nbt: {
            plort: {
                id: "splendid_slimes:blazing"
            }
        }
    },
    result: {
        item: "splendid_slimes:slime_heart",
        nbt: {
            slime: {
                id: "splendid_slimes:blazing"
            }
        }
    }
}