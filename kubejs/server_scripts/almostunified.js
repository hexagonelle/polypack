LootJS.modifiers(event => {
	event
		.addBlockLootModifier('#forge:ores')
		.modifyLoot('#forge:raw_materials',
		item => {
			const replacement = AlmostUnified.getReplacementForItem(item);
			if (replacement.isEmpty()) {
				return item;
			}
			replacement.setCount(item.getCount());
			return replacement;
		}
	);

    event.addEntityLootModifier("minecraft:elder_guardian")
		.addLoot("2x bettertridents:trident_fragment");

});