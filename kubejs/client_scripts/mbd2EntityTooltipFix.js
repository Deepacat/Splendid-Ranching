// just a small workaround by cyb.. pls dont cringe ^-^
let patch = (() => {
    let fields = Utils.newList();
    let clazz = base.__javaObject__;
    while (clazz) {
        fields.addAll(clazz.getDeclaredFields());
        clazz = clazz.getSuperclass();
    }
    let entities = null;
    for (let field of fields) {
        field.setAccessible(true);
        if (field.getName() == "entities") {
            entities = field;
        }
    }
    return (src) => {
        if (src.class != base) {
            return null;
        }
        let dst = new JavaAdapter(base, {
            getTooltipTexts: function() {
                return Utils.emptyList();
            },
            getXEIIngredients: function() {
                let stacks = Utils.newList();
                for (let entity of entities.get(this)) {
                    let item = egg.fromEntityType(entity.getType());
                    if (!item) {
                        continue;
                    }
                    let nameComps = Utils.newList();
                    nameComps.add(entity.getName());
                    item = new JavaAdapter(emiItem, {
                        getTooltip: function() {
                            return forgeClient.gatherTooltipComponents(
                                this.stack, nameComps, 0, 0x7FFFFFFF, 0x7FFFFFFF, mc.font
                            );
                        }
                    }, Item.of(item));
                    item.setChance(this.getXEIChance());
                    stacks.add(item);
                }
                return stacks;
            }
        });
        for (let field of fields) {
            field.set(dst, field.get(src));
        }
        return dst;
    };
})();

MBDRecipeTypeEvents.onRecipeUI(evt => {
    let widgets = evt.event.root.widgets;
    let nWidgets = widgets.size();
    for (let i = 0; i != nWidgets; ++i) {
        let patched = patch(widgets.get(i));
        if (patched) {
            widgets.set(i, patched);
        }
    }
});
