LootJS.modifiers(event => {

	const cryingWhenSilkTouch =
		LootEntry.
			of("minecraft:crying_obsidian").
			when(c =>
				c.matchMainHand(
					ItemFilter.hasEnchantment("minecraft:silk_touch")
				)
			);

	const obsidian = "minecraft:obsidian";

	event
		.addBlockLootModifier("minecraft:crying_obsidian")
		.removeLoot(Ingredient.all)
		.addAlternativesLoot(cryingWhenSilkTouch, obsidian);
});