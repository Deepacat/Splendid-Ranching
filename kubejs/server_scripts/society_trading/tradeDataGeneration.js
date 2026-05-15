ServerEvents.highPriorityData(function (e) {
    addTrades(e, {
        id: 'prefabs',
        texture: 'stone',
        trades: [
            {
                item: 'portable_blueprints:worn_blueprint', count: 1,
                nbt: {
                    nome: "base_camp", owner_name: "SSCCOGAC", blueprint_name: "base_camp",
                    display: {
                        Name: { "italic": false, "color": "#FFFF00", "text": "Blueprint: Base Camp" }
                    },
                    free_build: 1, allow_nbt: 1, remaining_uses: 1, worn_set: 1, owner: "worn",
                },
                cost: 256,
                trade_id: 'splendid_basic_corral'
            }
        ]
    })
})

/**
 * SNBT converter function
 * Converts a JavaScript object to a Minecraft SNBT string.
 * - Strings that contain a double quote will be wrapped in single quotes (escaping ' as \').
 * - All other strings use double quotes.
 * - Keys are left unquoted (must be simple identifiers).
 */
function toSnbt(obj) {
    if (typeof obj === 'string') {
        // If the string contains a double quote, use single quotes to avoid heavy escaping
        if (obj.indexOf('"') !== -1) {
            let escaped = obj.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
            return `"${escaped}"`
        } else {
            let escaped = obj.replace(/\\/g, '\\\\').replace(/"/g, '\\"')
            return `"${escaped}"`
        }
    }
    if (typeof obj === 'number') return '' + obj
    if (typeof obj === 'boolean') return obj ? 'true' : 'false'

    if (Array.isArray(obj)) {
        let items = []
        for (let i = 0; i < obj.length; i++) {
            items.push(toSnbt(obj[i]))
        }
        return `[ ${items.join(', ')} ]`
    }
    if (obj !== null && typeof obj === 'object') {
        let pairs = []
        let keys = Object.keys(obj)
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i]
            pairs.push(key + ':' + toSnbt(obj[key]))
        }
        return `{ ${pairs.join(', ')} }`
    }
    return '""'
}

/**
 * Registers a full shop JSON.
 * @param {Internal.DataPackEventJS} e   - highPriorityData event
 * @param {Object}   shop                - The shop category data object
 * @param {string}   shop.id             - Shop category id (e.g. "prefabs" or "banking")
 * @param {string}   shop.texture        - Shops texture path; e.g. "minecraft:textures/block/stone" or just "stone"
 * @param {Object}   [shop.jei_catalyst] - optional; uses shop texture if omitted
 * @param {Object[]} shop.trades         - array of trade definitions (Offers)
 *
 * Offer definition:
 * {
 *   item     : string,        // e.g. "numismatics:bank_terminal"
 *   count    : number,        // offer count (defaults to 1 if omitted)
 *   nbt?     : object|string, // optional NBT; if an object it's converted to SNBT, if a string used as-is
 *   cost     : number,        // total numismatic cost
 *   trade_id?: string         // optional explicit id; otherwise auto‑generated
 * }
 */
function addTrades(e, shop) {
    let shopId = shop.id
    let texture = shop.texture.indexOf(':') >= 0
        ? shop.texture
        : 'minecraft:textures/block/' + shop.texture
    let blockTag = `splendid_ranching:open_${shopId}`
    let name = `shop.society_trading.${shopId}`

    // JEI catalyst
    let jeiCatalyst
    if (shop.jei_catalyst) {
        jeiCatalyst = shop.jei_catalyst
    } else {
        let blockName = texture.replace('minecraft:textures/block/', 'minecraft:')
        jeiCatalyst = { item: blockName }
    }

    let coinMap = global.coinMap.slice().sort(function (a, b) { return b.value - a.value })

    let tradesArray = []
    for (let i = 0; i < shop.trades.length; i++) {
        let tradeDef = shop.trades[i]

        let offer = {
            item: tradeDef.item,
            count: tradeDef.count || 1
        }
        if (tradeDef.nbt) {
            if (typeof tradeDef.nbt === 'string') {
                offer.nbt = tradeDef.nbt
            } else {
                offer.nbt = toSnbt(tradeDef.nbt)
            }
        }

        let rawCost = tradeDef.cost
        let roundedCost = global.roundPrice(rawCost)
        if (roundedCost !== rawCost) {
            console.warn(`[Shop:${shopId}] Cost ${rawCost} was rounded to ${roundedCost}. This should be fixed to be an exact coin value.`)
        }

        let requestCoin = null
        for (let j = 0; j < coinMap.length; j++) {
            let coin = coinMap[j]
            if (roundedCost % coin.value === 0 && roundedCost / coin.value <= 64) {
                requestCoin = coin
                break
            }
        }

        if (!requestCoin) {
            requestCoin = coinMap[coinMap.length - 1]
            console.warn(`Shop:${shopId} Could not find a coin for cost ${roundedCost}, using ${requestCoin.coin}`)
        }

        let request = {
            item: requestCoin.coin,
            count: roundedCost / requestCoin.value
        }

        let tradeId = tradeDef.trade_id
        if (!tradeId) {
            let suffix = tradeDef.item.split(':')[suffix.length - 1]
            tradeId = `splendid_${suffix}`
        }

        tradesArray.push({
            offer: offer,
            request: request,
            numismatics_cost: roundedCost,
            trade_id: tradeId
        })
    }

    let shopData = {
        shop_id: shopId,
        name: name,
        texture: texture,
        block_tag: blockTag,
        jei_catalyst: jeiCatalyst,
        trades: tradesArray
    }

    e.addJson(`society_trading:shops/${shopId}.json`, shopData)
}