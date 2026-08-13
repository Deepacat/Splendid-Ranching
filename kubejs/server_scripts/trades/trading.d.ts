/// <reference types="kubejs" />
// somewhat ai sloperated completion data and should be corrected if anything is wrong :D lmk! -deepacat
// https://github.com/Chakyl/society-trading/wiki/Tutorial:-Creating-and-Using-Shops

declare global {
    /**
     * A single entry in the `$trades` shortcut.
     * 
     * Used to auto-generate full trade definitions with automatic coin selection.
     * 
     * **All properties of a regular trade** (except `offer`, `request`, and the auto‑generated `numismatics_cost`) can be placed directly in a `$trades` entry; they will be copied into the final trade definition unchanged.
     */
    interface DollarTradeEntry {
        /** Item ID of the offered product. */
        item: Internal.ItemStack_;
        /** Number of items given. Defaults to 1. */
        count?: number;
        /** Optional NBT data, can be a raw SNBT string or a plain object. */
        nbt?: string | object;
        /**
         * The raw cost of the trade.
         * 
         * The system will round this value to the nearest coin item using `global.roundPrice()` and determine the appropriate coin type automatically.
         */
        cost: number;
        /**
         * Unique trade identifier.
         * 
         * If not supplied, it will be generated from the offer item's path.
         */
        trade_id?: string;
        /**
         * Explicitly sets the Numismatics cost.
         * 
         * If omitted, the rounded coin cost is used automatically.
         * 
         * Supply this if you want a different value from the auto‑calculated one.
         */
        numismatics_cost?: number;
        /** An additional cost item stack. */
        second_request?: {
            item: Internal.ItemStack_;
            count?: number;
            nbt?: string;
        };
        /**
         * Resource location of an image displayed when the shop's `display_type` is set to `"image"`.
         * 
         * Uses a 14:11 aspect ratio (140×110px).
         */
        image?: string;
        /**
         * KubeJS gamestage required to show this trade.
         */
        stage_required?: string;
        /**
         * Serene Seasons sub-seasons during which the trade is available.
         * 
         * Example: `["late_spring", "late_summer"]` (Requires Serene Seasons installed.)
         */
        seasons_required?: string[];
        /**
         * KubeJS stage that, if present, bypasses all other visibility checks (stage, season) for this trade.
         */
        stage_override?: string;
        /**
         * Any other custom data that Society Trading might recognise.
         * 
         * Allows forward‑compatibility with future trade properties.
         */
        [key: string]: any;
    }

    /** A complete trade definition, as it appears in the final `trades` array. */
    interface TradeDefinition {
        /** The item the player receives. */
        offer: {
            item: Internal.ItemStack_;
            count?: number;
            nbt?: string;     // SNBT string after processing
        };
        /** The primary cost item the player must provide. */
        request: {
            item: Internal.ItemStack_;
            count?: number;
            nbt?: string;
        };
        /** An optional additional cost item. */
        second_request?: {
            item: Internal.ItemStack_;
            count?: number;
            nbt?: string;
        };
        /**
         * Numismatics cost – the amount of Create Numismatics currency that will be deducted from the player's balance.
         * 
         * Usually used together with a Numismatic coin in the request.
         */
        numismatics_cost?: number;
        /** Unique identifier for this trade. */
        trade_id?: string;
        /**
         * Resource location of an image displayed when the shop's `display_type` is set to `"image"`.
         * 
         * Uses a 14:11 aspect ratio (140×110px).
         */
        image?: string;
        /**
         * KubeJS stage required to show this trade.
         * 
         * (Requires KubeJS installed.)
         */
        stage_required?: string;
        /**
         * Serene Seasons sub-seasons during which the trade is available.
         * 
         * Example: `["late_spring", "late_summer"]` (Requires Serene Seasons installed.)
         */
        seasons_required?: string[];
        /**
         * KubeJS stage that, if present, bypasses all other visibility checks (stage, season) for this trade.
         */
        stage_override?: string;
        /** Any other custom data. */
        [key: string]: any;
    }

    /**
     * A set of trades that are randomly rolled.
     * 
     * Multiple random sets can be placed in the `random_sets` array of a shop.
     */
    interface RandomSet {
        /** How many trades from this set will be shown. */
        rolled_count: number;
        /**
         * How the randomization is seeded.
         * 
         * `"per_day"` – rerolled every Minecraft day (6am).
         * 
         * `"per_player"` – fixed per player, cannot be re‑rolled.
         * 
         * `"per_entity"` – seeded by the entity's UUID.
         * 
         * `"default"` – rerolled every time the shop opens.
         */
        random_style?: "per_day" | "per_player" | "per_entity" | "default";
        /** KubeJS stage required to show this set. */
        stage_required?: string;
        /** Serene Seasons sub-seasons required to show this set. */
        seasons_required?: string[];
        /** Bypass stage for this set. */
        stage_override?: string;
        /** The trades inside this random set. */
        trades: TradeDefinition[];
    }

    /**
     * Data object passed to `addTrades()` to define a Society Trading shop.
     * 
     * **Shortcut keys:** `$id` : automatically sets `shop_id` and `name` (as `shop.society_trading.${id}`).
     * 
     * `$trades` : an array of simplified trade entries that will be expanded into full trade definitions with automatic coin selection and cost rounding.
     * 
     * When using `$id` you can omit `shop_id` and `name` (they will be filled in).
     * 
     * When using `$trades` you can omit the standard `trades` array.
     */
    interface ShopData {
        /**
         * Shortcut for `shop_id` and `name`.
         * 
         * Sets `shop_id` to this string and `name` to `"shop.society_trading.<id>"`.
         * 
         * The `$id` key is removed before writing the final JSON.
         */
        $id?: string;
        /** The unique ID of the shop (e.g. "prefabs", "travel_aids"). */
        shop_id?: string;
        /**
         * The display name of the shop.
         * 
         * Best practice is to use a translation key, e.g. `"shop.society_trading.travel_aids"`.
         */
        name?: string;
        /** Resource location of the texture shown on the left side of the shop screen. */
        texture: string;
        /**
         * Display variant of the shop screen.
         * 
         * `"default"` : standard view.
         * 
         * `"thin"` : narrower layout.
         * 
         * `"image"` : supports trades with an `image` field.
         */
        display_type?: "thin" | "image" | "default";
        /** Villager profession that opens this shop when right‑clicked (overrides default). */
        villager_profession?: string;
        /** Entity ID that opens this shop when right‑clicked (overrides default). */
        entity?: string;
        /** NBT data string that must be present on the entity for the shop to open. */
        entity_data?: string;
        /**
         * Block tag (e.g. `"#minecraft:anvil"`) that, when right‑clicked, opens this shop (overrides default block interaction).
         */
        block_tag?: string;
        /** If `true`, the shop is hidden from the Shop Selector. */
        hidden_from_selector?: boolean;
        /**
         * Position weight in the Shop Selector list.
         * 
         * Lower weights appear first.
         * 
         * Defaults to 1.
         */
        selector_weight?: number;
        /** KubeJS stage the player must have to see this shop in the list. */
        stage_required?: string;
        /**
         * Serene Seasons sub-seasons during which the shop is visible.
         * 
         * Example: `["late_spring", "late_summer"]`.
         */
        seasons_required?: string[];
        /** KubeJS stage that bypasses all other visibility checks for this shop. */
        stage_override?: string;
        /**
         * Array of full trade definitions.
         * 
         * Not needed if you use the `$trades` shortcut.
         */
        trades?: TradeDefinition[];
        /**
         * Shortcut array of simplified trades.
         * 
         * Each entry is processed into a full `TradeDefinition` with automatic coin handling.
         * 
         * This array is removed after processing.
         */
        $trades?: DollarTradeEntry[];
        /** Array of random trade sets (appear before the static trades). */
        random_sets?: RandomSet[];
        /**
         * Optional JEI catalyst item (used by JEI integration).
         * 
         * Example: `{ item: "minecraft:stone" }`.
         */
        jei_catalyst?: { item: Internal.ItemStack_ };
        /**
         * Any other custom data that the Society Trading mod might recognise.
         * 
         * This index signature allows extra properties (e.g. from future updates).
         */
        [key: string]: any;
    }

    /**
     * Registers a Society Trading shop by writing its JSON definition to the data pack.
     * 
     * If `$id` is present, it automatically fills in `shop_id` and `name`.
     * 
     * If `$trades` is present, those entries are expanded into full `TradeDefinition` objects with rounded coin costs using `global.roundPrice()` and `global.coinMap`.
     * 
     * **All extra fields** in a `$trades` entry (e.g. `second_request`, `image`, `stage_required`, `seasons_required`, `stage_override`) are copied into the final trade definition unchanged.
     * @param e - The high‑priority data event.
     * @param shopData - The shop definition.
     * 
     * At minimum `texture` must be provided, and either `shop_id` + `name` or `$id`, and either `trades` or `$trades`.
     */
    function addTrades(e: Internal.DataPackEventJS, shopData: ShopData): void;

    /**
     * Helper to build NBT for a worn blueprint item.
     * @param blueprintId - The blueprint ID string (e.g. "base_camp").
     * @param itemName - The display name of the blueprint.
     * @param usesAmount - The number of remaining uses.
     * @returns An NBT object suitable for the `nbt` property of an offer.
     */
    function prefabNBT(blueprintId: string, itemName: string, usesAmount: number): object;
}

export {};