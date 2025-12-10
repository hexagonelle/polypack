JEIEvents.removeRecipes(event => {
	event.remove(
		"malum:coal_fragment",
		"malum:charcoal_fragment"
	)
})

JEIEvents.information(event => {

	const desertEnchants = [
		"Fire Protection",
		"Thorns",
		"Infinity",
		"Efficiency"
	];
	const plainsEnchants = [
		"Bane of Arthropods",
		"Smite",
		"Punch",
		"Protection"
	];
	const savannaEnchants = [
		"Knockback",
		"Curse of Binding",
		"Sweeping Edge",
		"Sharpness"
	];
	const snowEnchants = [
		"Looting",
		"Aqua Affinity",
		"Frost Walker",
		"Silk Touch"
	]
	const taigaEnchants = [
		"Blast protection",
		"Fire aspect",
		"Flame",
		"Fortune"
	]
	const jungleEnchants = [
		"Projectile Protection",
		"Power",
		"Feather Falling",
		"Unbreaking"
	]
	const swampEnchants = [
		"Respiration",
		"Depth Strider",
		"Curse of Vanishing",
		"Mending"
	]

	const enchantsList = [
		["Desert", desertEnchants],
		["Plains", plainsEnchants],
		["Savanna", savannaEnchants],
		["Snow", snowEnchants],
		["Taiga", taigaEnchants],
		["Jungle", jungleEnchants],
		["Swamp", swampEnchants]
	]

	function jeiEnchantEntry(location, enchants, inputEvent){
		inputEvent.addItem(
			'kubejs:enchanted_book',
			[
				'Obtained by trading with a ' +
				location +
				' Librarian villager:',
				enchants[0] + ", " +
				enchants[1] + ", " +
				enchants[2] + ", " +
				enchants[3]
			]
		)
	}

	var location = "";
	var enchants = [];
	enchantsList.forEach(enchantSet => {
		location = enchantSet[0];
		enchants = enchantSet[1];

		jeiEnchantEntry(location,enchants,event)

	});



	const earthenClayCrops = [
		"Wheat",
		"Bamboo"
	];

	const loamCrops = [
		"Melons",
		"Pumpkins",
		"Sweet Berries",
		"Tomatoes (currently defunct)"
	];

	const sandyDirtCrops = [
		"Carrots",
		"Beetroots",
		"Cabbages"
	];

	const siltCrops = [
		"Potato",
		"Wheat",
		"Cabbage",
		"Onion",
		"Supplementaries Flax"
	];

	const cropsList = [
		["earthen_clay", earthenClayCrops],
		["loam", loamCrops],
		["sandy_dirt", sandyDirtCrops],
		["silt", siltCrops]
	]

	function jeiCropEntry(soil, crops, inputEvent){

		var cropListString = ""
		var numcrops = crops.length;
		for (var i = 0; i < numcrops; i++){
			if(i == numcrops - 1){
				cropListString = cropListString + crops[i]
			} else {
				cropListString = cropListString + crops[i] + ", "
			}
		}

		console.log('soil: ' + soil);
		console.log('cropListString: ' + cropListString);

		inputEvent.addItem(
			'immersive_weathering:' + soil,
			[
				'Can be used to grow the following crops:',
				cropListString
			]
		)
	}

	var soil = "";
	var crops = [];
	cropsList.forEach(cropSet => {
		soil = cropSet[0];
		crops = cropSet[1];

		jeiCropEntry(soil,crops,event)

	});





	const wheatSoil = [
		"Earthen Clay",
		"Silt",
		"Rich Soil"
	];

	const bambooSoil = [
		"Earthen Clay",
		"Rich Soil"
	];

	const melonSoil = [
		"Loam",
		"Rich Soil"
	];

	const pumpkinSoil = [
		"Loam",
		"Rich Soil"
	];

	const sweetBerrySoil = [
		"Loam",
		"Rich Soil"
	];

	const tomatoSoil = [
		"Loam",
		"Rich Soil"
	];

	const carrotSoil = [
		"Sandy Dirt",
		"Rich Soil"
	];

	const beetrootSoil = [
		"Sandy Dirt",
		"Rich Soil"
	];

	const cabbageSoil = [
		"Sandy Dirt",
		"Silt"
	];

	const potatoSoil = [
		"Silt",
		"Rich Soil"
	];

	const onionSoil = [
		"Silt",
		"Rich Soil"
	];

	const flaxSoil = [
		"Silt",
		"Rich Soil"
	];

	const soilsList = [
		["minecraft:wheat", wheatSoil],
		["minecraft:bamboo", bambooSoil],
		["minecraft:melon_slice", melonSoil],
		["minecraft:pumpkin", pumpkinSoil],
		["minecraft:sweet_berries", sweetBerrySoil],
		["farmersdelight:tomato", tomatoSoil],
		["minecraft:carrot", carrotSoil],
		["minecraft:beetroot", beetrootSoil],
		["farmersdelight:cabbage", cabbageSoil],
		["minecraft:potato", potatoSoil],
		["farmersdelight:onion", onionSoil],
		["supplementaries:flax", flaxSoil]
	]

	function jeiSoilEntry(crop, soils, inputEvent){

		var soilListString = ""
		var numsoils = soils.length;
		for (var i = 0; i < numsoils; i++){
			if(i == numsoils - 1){
				soilListString = soilListString + soils[i]
			} else {
				soilListString = soilListString + soils[i] + ", "
			}
		}

		console.log('crop: ' + crop);
		console.log('soilListString: ' + soilListString);

		inputEvent.addItem(
			crop,
			[
				'Grows faster on the following soils:',
				soilListString
			]
		)
	}

	var crop = "";
	var soils = [];
	soilsList.forEach(soilSet => {
		crop = soilSet[0];
		soils = soilSet[1];

		jeiSoilEntry(crop,soils,event)

	});




})