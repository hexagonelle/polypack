ServerEvents.tags('item', event => {
	// Add a forge tag for unstripped logs
	// This way recipes can distinguish between unstripped and stripped

	event.removeAll('forge:unstripped_logs')
	const logsList = event.get('minecraft:logs').getObjectIds()
	const blacklistStripped = Ingredient.of(/.*stripped.*/)
	logsList.forEach(log => {
		if (!blacklistStripped.test(log)) event.add('forge:unstripped_logs', log)
	})

	const unstrippedLogsList = event.get('forge:unstripped_logs').getObjectIds()
	const blacklistWood = Ingredient.of(/.*wood.*/)
	const blacklistHyphae = Ingredient.of(/.*hyphae.*/)
	const blacklistCarved = Ingredient.of(/.*carved.*/)
	unstrippedLogsList.forEach(log => {
		if (
			!blacklistWood.test(log) &&
			!blacklistHyphae.test(log) &&
			!blacklistCarved.test(log)
		)
		{
			event.add('forge:tree_trunks', log)
		}
	})

	const treeTrunksList = event.get('forge:tree_trunks').getObjectIds()
	treeTrunksList.forEach(trunk => {
		let plank = String(trunk).replace("_log","_planks")
		plank = String(plank).replace("_stem","_planks")
		event.add('forge:regular_planks', plank)
	})


	event.add('minecraft:leaves', 'minecraft:nether_wart_block')
	event.add('minecraft:leaves', 'minecraft:warped_wart_block')
	
})

LootJS.modifiers((event) => {

	const netherWartWhenSilkTouch = LootEntry.of("minecraft:nether_wart_block").when((c) =>
		c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
	);
	const crimsonFungus = LootEntry.of("minecraft:crimson_fungus").when((c) => c.randomChance(0.05));

	event
		.addBlockLootModifier("minecraft:nether_wart_block")
		.removeLoot(Ingredient.all)
		.addAlternativesLoot(netherWartWhenSilkTouch, crimsonFungus);

	const warpedWartWhenSilkTouch = LootEntry.of("minecraft:warped_wart_block").when((c) =>
		c.matchMainHand(ItemFilter.hasEnchantment("minecraft:silk_touch"))
	);
	const warpedFungus = LootEntry.of("minecraft:warped_fungus").when((c) => c.randomChance(0.05));

	event
		.addBlockLootModifier("minecraft:warped_wart_block")
		.removeLoot(Ingredient.all)
		.addAlternativesLoot(warpedWartWhenSilkTouch, warpedFungus);
});

ServerEvents.recipes(event => {

	///////////// VANILLA /////////////

	//add a saddle recipe
	event.shaped("minecraft:saddle",
		[
			'AAA',
			'BBB',
			'C C'
		],
		{
			A: "#minecraft:wool",
			B: "#forge:leather",
			C: "minecraft:tripwire_hook"
		  }
	)

})

//add custom villager trades
const villagerType = Java.loadClass("net.minecraft.world.entity.npc.VillagerType")

MoreJSEvents.villagerTrades(event => {

	function generateSimpleOffer(
		profession,
		level,
		item,
		numItems,
		isBuying,
		price,
		multiplier,
		uses,
		villagerXP
	){
		if(isBuying){
			var generatedTrade = event.addTrade(
				profession, level,
				Item.of(item,numItems),
				Item.of("minecraft:emerald",price)
			);
			generatedTrade.maxUses(uses);
			generatedTrade.villagerExperience(villagerXP);
			generatedTrade.priceMultiplier(multiplier);
		} else {
			var generatedTrade = event.addTrade(
				profession, level,
				Item.of("minecraft:emerald",price),
				Item.of(item,numItems)
			);
			generatedTrade.maxUses(uses);
			generatedTrade.villagerExperience(villagerXP);
			generatedTrade.priceMultiplier(multiplier);
		}
	}

	const low = 0.05;
	const high = 0.2;
	const buy = true;
	const sell = false;

	for (let i=1; i<6; i++){
		event.removeVanillaTrades("librarian",i);
	}

	generateSimpleOffer("librarian",1,"minecraft:paper",24,buy,1,low,16,2);
	generateSimpleOffer("librarian",2,"minecraft:bookshelf",5,sell,2,low,12,1);
	generateSimpleOffer("librarian",3,"minecraft:lantern",1,sell,1,low,12,5);
	generateSimpleOffer("librarian",4,"minecraft:writable_book",1,sell,3,low,12,30);
	generateSimpleOffer("librarian",4,"minecraft:ink_sac",5,buy,1,low,12,30);
	generateSimpleOffer("librarian",4,"minecraft:name_tag",1,buy,5,low,12,30);

	event.addCustomTrade("librarian", 2, (offer, entity, random) => {
		function generateMagicBookOffer(
			level,
			enchant,
			villagerXP
		){
		offer.setFirstInput(Item.of("minecraft:emerald",15));
		offer.setSecondInput("minecraft:book");
		offer.setOutput(
			Item.
				of("minecraft:enchanted_book").
				enchant(enchant[0],enchant[1]),);
		offer.setMaxUses(12);
		offer.setVillagerExperience(villagerXP);
		offer.setPriceMultiplier(high);
	}
		if(entity.villagerData.type === villagerType.DESERT){
			generateMagicBookOffer(1,["minecraft:fire_protection",3],1);
			generateMagicBookOffer(2,["minecraft:thorns",3],5);
			generateMagicBookOffer(3,["minecraft:infinity",1],10);
			generateMagicBookOffer(5,["minecraft:efficiency",3],30);
		} else if(entity.villagerData.type === villagerType.PLAINS) {
			generateMagicBookOffer(1,["minecraft:bane_of_arthropods",3],1);
			generateMagicBookOffer(2,["minecraft:smite",3],5);
			generateMagicBookOffer(3,["minecraft:punch",2],10);
			generateMagicBookOffer(5,["minecraft:protection",3],30);
		} else if(entity.villagerData.type === villagerType.SAVANNA) {
			generateMagicBookOffer(1,["minecraft:knockback",1],1);
			generateMagicBookOffer(2,["minecraft:curse_of_binding",1],5);
			generateMagicBookOffer(3,["minecraft:sweeping_edge",2],10);
			generateMagicBookOffer(5,["minecraft:sharpness",3],30);
		} else if(entity.villagerData.type === villagerType.SNOW) {
			generateMagicBookOffer(1,["minecraft:looting",2],1);
			generateMagicBookOffer(2,["minecraft:aqua_affinity",1],5);
			generateMagicBookOffer(3,["minecraft:frost_walker",2],10);
			generateMagicBookOffer(5,["minecraft:silk_touch",1],30);
		} else if(entity.villagerData.type === villagerType.TAIGA) {
			generateMagicBookOffer(1,["minecraft:blast_protection",3],1);
			generateMagicBookOffer(2,["minecraft:fire_aspect",2],5);
			generateMagicBookOffer(3,["minecraft:flame",1],10);
			generateMagicBookOffer(5,["minecraft:fortune",2],30);
		} else if(entity.villagerData.type === villagerType.JUNGLE) {
			generateMagicBookOffer(1,["minecraft:projectile_protection",3],1);
			generateMagicBookOffer(2,["minecraft:power",2],5);
			generateMagicBookOffer(3,["minecraft:feather_falling",2],10);
			generateMagicBookOffer(5,["minecraft:unbreaking",2],30);
		} else if(entity.villagerData.type === villagerType.SWAMP) {
			generateMagicBookOffer(1,["minecraft:respiration",3],1);
			generateMagicBookOffer(2,["minecraft:depth_strider",2],5);
			generateMagicBookOffer(3,["minecraft:curse_of_vanishing",2],10);
			generateMagicBookOffer(5,["minecraft:mending",1],30);
		}
	});
});