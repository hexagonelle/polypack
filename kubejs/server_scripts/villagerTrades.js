//add custom villager trades
const VillagerType = Java.loadClass("net.minecraft.world.entity.npc.VillagerType")


MoreJSEvents.villagerTrades(event => {
	function rand(min,max){
		if (min==max){
			return min
		} else {
			return Math.floor(Math.random()*(max-min)+min);
		}
	}

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

	function generateOffer(
		offer,
		input1,
		input2,
		output,
		maxUses,
		villagerXP,
		priceMultiplier
	){
		offer.setFirstInput(input1);
		offer.setSecondInput(input2);
		offer.setOutput(output);
		offer.setMaxUses(maxUses);
		offer.setVillagerExperience(villagerXP);
		offer.setPriceMultiplier(priceMultiplier);
	}

	function generateMagicBookOffer(
		offer,
		priceLow,
		priceHigh,
		enchant,
		villagerXP
	){
		generateOffer(
			offer,
			Item.of("minecraft:emerald",rand(priceLow,priceHigh)),
			"minecraft:book",
			Item.
				of("minecraft:enchanted_book").
				enchant(enchant[0],enchant[1]),
			12,
			villagerXP,
			high
		)
	}

	function generateFoundryOffer(
		offer,
		priceLow,
		priceHigh,
		smithedObject,
		villagerXP
	){
		itemToSell = "minecraft:" + smithedObject[0] + "_" + smithedObject[1]
		generateOffer(
			offer,
			Item.of("minecraft:emerald",rand(priceLow,priceHigh)),
			itemToSell,
			3,
			villagerXP,
			high
		)
	}

	function generateButcherOffer(
		offer,
		priceLow,
		priceHigh,
		meatItemBuySell,
		villagerXP
	){
		itemToTrade = "minecraft:" + meatItemBuySell[1] + "_" + meatItemBuySell[2];
		isBuying = meatItemBuySell[0];
		if (isBuying){
			generateOffer(
				offer,
				Item.of(itemToTrade,rand(priceLow,priceHigh)),
				"minecraft:emerald",
				16,
				villagerXP,
				low
			)
		} else {
			generateOffer(
				offer,
				Item.of("minecraft:emerald",rand(priceLow,priceHigh)),
				itemToTrade,
				16,
				villagerXP,
				low
			)
		}
	}

	const useStructure = false;
	const useBiome = true;

	function generateCartographerOffer(
		offer,
		priceLow,
		priceHigh,
		location,
		mapName
	){
		isBiome = location[0];
		if(isBiome){
			var cartographyTrade = VillagerUtils.createBiomeMapTrade(
				rand(priceLow,priceHigh),
				location[1]
			)
		} else {
			var cartographyTrade = VillagerUtils.createStructureMapTrade(
				rand(priceLow,priceHigh),
				location[1]
			)
		}

		cartographyTrade.displayName(mapName);
		cartographyTrade.scale(3);
	}

	function generateBiomeTrade(
		profession,
		level,
		offerTypeFunction,
		priceLow,
		priceHigh,
		tradesByBiome,
		villagerXP
	){
		event.addCustomTrade(profession, level, (offer, entity, random) => {
			if(entity.villagerData.type === VillagerType.DESERT){
				offerTypeFunction(offer,priceLow,priceHigh,tradesByBiome[0],villagerXP);
			} else if(entity.villagerData.type === VillagerType.PLAINS) {
				offerTypeFunction(offer,priceLow,priceHigh,tradesByBiome[1],villagerXP);
			} else if(entity.villagerData.type === VillagerType.SAVANNA) {
				offerTypeFunction(offer,priceLow,priceHigh,tradesByBiome[2],villagerXP);
			} else if(entity.villagerData.type === VillagerType.SNOW) {
				offerTypeFunction(offer,priceLow,priceHigh,tradesByBiome[3],villagerXP);
			} else if(entity.villagerData.type === VillagerType.TAIGA) {
				offerTypeFunction(offer,priceLow,priceHigh,tradesByBiome[4],villagerXP);
			} else if(entity.villagerData.type === VillagerType.JUNGLE) {
				offerTypeFunction(offer,priceLow,priceHigh,tradesByBiome[5],villagerXP);
			} else if(entity.villagerData.type === VillagerType.SWAMP) {
				offerTypeFunction(offer,priceLow,priceHigh,tradesByBiome[6],villagerXP);
			}
		})
	}
	
	//////////////////////////////////////////////////
	/////////////////	LIBRARIAN	//////////////////
	//////////////////////////////////////////////////

	for (let i=1; i<6; i++){
		event.removeVanillaTrades("librarian",i);
	}

	generateSimpleOffer("librarian",1,"minecraft:paper",24,buy,1,low,16,2);
	generateSimpleOffer("librarian",2,"minecraft:bookshelf",5,sell,2,low,12,1);
	generateSimpleOffer("librarian",3,"minecraft:lantern",1,sell,1,low,12,5);
	generateSimpleOffer("librarian",4,"minecraft:writable_book",1,sell,3,low,12,30);
	generateSimpleOffer("librarian",4,"minecraft:ink_sac",5,buy,1,low,12,30);
	generateSimpleOffer("librarian",5,"minecraft:name_tag",1,buy,5,low,12,30);
	
	generateBiomeTrade(
		"librarian",
		1,
		generateMagicBookOffer,
		5,64,
		[
			["minecraft:fire_protection",3],
			["minecraft:bane_of_arthropods",3],
			["minecraft:knockback",2],
			["minecraft:looting",2],
			["minecraft:blast_protection",2],
			["minecraft:projectile_protection",2],
			["minecraft:respiration",2]
		],
		1
	)
	generateBiomeTrade(
		"librarian",
		2,
		generateMagicBookOffer,
		5,64,
		[
			["minecraft:thorns",3],
			["minecraft:smite",3],
			["minecraft:curse_of_binding",1],
			["minecraft:aqua_affinity",1],
			["minecraft:fire_aspect",2],
			["minecraft:power",2],
			["minecraft:depth_strider",2]
		],
		5
	)
	generateBiomeTrade(
		"librarian",
		3,
		generateMagicBookOffer,
		5,64,
		[
			["minecraft:infinity",1],
			["minecraft:punch",2],
			["minecraft:sweeping_edge",2],
			["minecraft:frost_walker",2],
			["minecraft:flame",1],
			["minecraft:feather_falling",2],
			["minecraft:curse_of_vanishing",2]
		],
		10
	)
	generateBiomeTrade(
		"librarian",
		5,
		generateMagicBookOffer,
		5,64,
		[
			["minecraft:efficiency",3],
			["minecraft:protection",3],
			["minecraft:sharpness",3],
			["minecraft:silk_touch",1],
			["minecraft:fortune",2],
			["minecraft:unbreaking",2],
			["minecraft:mending",1]
		],
		30
	);

	//////////////////////////////////////////////////
	/////////////////	TOOLSMITH	//////////////////
	//////////////////////////////////////////////////

	for (let i=1; i<6; i++){
		event.removeVanillaTrades("toolsmith",i);
	}

	generateSimpleOffer("toolsmith",2,"minecraft:diamond",5,buy,1,low,16,5);
	generateSimpleOffer("toolsmith",4,"minecraft:bell",1,sell,20,low,12,15);
	
	generateBiomeTrade(
		"toolsmith",
		1,
		generateFoundryOffer,
		1,1,
		[
			["stone","pickaxe"],
			["stone","shovel"],
			["stone","hoe"],
			["stone","pickaxe"],
			["stone","shovel"],
			["stone","hoe"],
			["stone","pickaxe"],
		],
		1
	)

	generateBiomeTrade(
		"toolsmith",
		3,
		generateFoundryOffer,
		7,21,
		[
			["iron","pickaxe"],
			["iron","shovel"],
			["iron","hoe"],
			["iron","pickaxe"],
			["iron","shovel"],
			["iron","hoe"],
			["iron","pickaxe"],
		],
		10
	)

	generateBiomeTrade(
		"toolsmith",
		5,
		generateFoundryOffer,
		15,29,
		[
			["diamond","pickaxe"],
			["diamond","shovel"],
			["diamond","hoe"],
			["diamond","pickaxe"],
			["diamond","shovel"],
			["diamond","hoe"],
			["diamond","pickaxe"],
		],
		30
	)

	//////////////////////////////////////////////////
	/////////////////	WEAPONSMITH	//////////////////
	//////////////////////////////////////////////////

	for (let i=1; i<6; i++){
		event.removeVanillaTrades("weaponsmith",i);
	}

	generateSimpleOffer("weaponsmith",2,"minecraft:iron_ingot",10,buy,1,low,16,5);
	generateSimpleOffer("weaponsmith",4,"minecraft:shield",1,sell,10,low,12,15);
	
	generateBiomeTrade(
		"weaponsmith",
		1,
		generateFoundryOffer,
		1,1,
		[
			["stone","sword"],
			["stone","axe"],
			["stone","sword"],
			["stone","axe"],
			["stone","sword"],
			["stone","axe"],
			["stone","sword"],
		],
		1
	)

	generateBiomeTrade(
		"weaponsmith",
		3,
		generateFoundryOffer,
		7,21,
		[
			["iron","sword"],
			["iron","axe"],
			["iron","sword"],
			["iron","axe"],
			["iron","sword"],
			["iron","axe"],
			["iron","sword"],
		],
		10
	)

	generateBiomeTrade(
		"weaponsmith",
		5,
		generateFoundryOffer,
		15,29,
		[
			["diamond","sword"],
			["diamond","axe"],
			["diamond","sword"],
			["diamond","axe"],
			["diamond","sword"],
			["diamond","axe"],
			["diamond","sword"],
		],
		30
	)

	//////////////////////////////////////////////////
	//////////////////    ARMORER	//////////////////
	//////////////////////////////////////////////////

	for (let i=1; i<6; i++){
		event.removeVanillaTrades("armorer",i);
	}

	generateSimpleOffer("armorer",2,"minecraft:coal",15,buy,1,low,16,5);
	generateSimpleOffer("armorer",4,"minecraft:anvil",1,sell,10,low,12,15);
	
	generateBiomeTrade(
		"armorer",
		1,
		generateFoundryOffer,
		1,1,
		[
			["chainmail","helmet"],
			["chainmail","chestplate"],
			["chainmail","leggings"],
			["chainmail","boots"],
			["chainmail","helmet"],
			["chainmail","chestplate"],
			["chainmail","leggings"],
		],
		1
	)

	generateBiomeTrade(
		"armorer",
		3,
		generateFoundryOffer,
		7,21,
		[
			["iron","helmet"],
			["iron","chestplate"],
			["iron","leggings"],
			["iron","boots"],
			["iron","helmet"],
			["iron","chestplate"],
			["iron","leggings"],
		],
		10
	)

	generateBiomeTrade(
		"armorer",
		5,
		generateFoundryOffer,
		15,29,
		[
			["diamond","helmet"],
			["diamond","chestplate"],
			["diamond","leggings"],
			["diamond","boots"],
			["diamond","helmet"],
			["diamond","chestplate"],
			["diamond","leggings"],
		],
		30
	)

	//////////////////////////////////////////////////
	//////////////////    BUTCHER	//////////////////
	//////////////////////////////////////////////////

	for (let i=1; i<6; i++){
		event.removeVanillaTrades("butcher",i);
	}

	generateSimpleOffer("butcher",1,"minecraft:campfire",1,buy,2,low,10,1);
	generateSimpleOffer("butcher",2,"minecraft:cooked_rabbit",1,sell,3,low,16,2);
	generateSimpleOffer("butcher",4,"minecraft:rabbit_stew",1,sell,5,low,12,20);
	
	generateBiomeTrade(
		"butcher",
		3,
		generateFoundryOffer,
		3,5,
		[
			[buy,"raw","chicken"],
			[buy,"raw","porkchop"],
			[buy,"raw","mutton"],
			[buy,"raw","beef"],
			[buy,"raw","chicken"],
			[buy,"raw","mutton"],
			[buy,"raw","beef"],
		],
		5
	)

	generateBiomeTrade(
		"butcher",
		5,
		generateFoundryOffer,
		5,7,
		[
			[buy,"cooked","chicken"],
			[buy,"cooked","porkchop"],
			[buy,"cooked","mutton"],
			[buy,"cooked","beef"],
			[buy,"cooked","chicken"],
			[buy,"cooked","mutton"],
			[buy,"cooked","beef"],
		],
		30
	)
})