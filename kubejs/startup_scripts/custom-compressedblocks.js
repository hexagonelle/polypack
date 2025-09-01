StartupEvents.registry("block", (event) => {
	let toCompress = [
		["minecraft:andesite", "stone", "pickaxe"],
		["minecraft:clay", "clay", "shovel"],
		["minecraft:cobblestone", "stone", "pickaxe"],
		["minecraft:cobbled_deepslate", "stone", "pickaxe"],
		["minecraft:diorite", "stone", "pickaxe"],
		["minecraft:dirt", "dirt", "shovel"],
		["minecraft:granite", "stone", "pickaxe"],
		["minecraft:gravel", "dirt", "shovel"],
		["minecraft:netherrack", "stone", "pickaxe"],
		["minecraft:sand", "sand", "shovel"],
		["minecraft:red_sand", "sand", "shovel"],
		["minecraft:snow", "snow", "shovel"],
		["minecraft:soul_sand", "sand", "shovel"],
		["minecraft:soul_soil", "dirt", "shovel"],
		["minecraft:stone", "stone", "pickaxe"],
		["minecraft:tuff", "stone", "pickaxe"],
		["minecraft:deepslate", "stone", "pickaxe"]
	];

	let compressLevel = [
		["single", 1],
		["double", 2],
		["triple", 3],
		["quadruple", 4],
		["quintuple", 5],
		["hextuple", 6]
	];

	function toTitleCase(str) {
		var output = "";
		var text = str.split("_");
		text.forEach(word=> {
			var capitalize =
				word.charAt(0).toUpperCase() +
				word.substring(1);
			output = output + capitalize + " ";
		})

		return output.trim();
	}

	var internalName = "";
	var internalCompressedName = "";
	var baseBlockDisplayName = "";
	var displayCompressedName = "";
	var materialType = "";
	var toolNeeded = "";
	var compressionLevel = "";
	var blockHardness = "";

	toCompress.forEach(block=> {
		internalName = block[0];
		materialType = block[1];
		toolNeeded = block[2];
		baseBlockDisplayName = internalName.split(":")[1]

		compressLevel.forEach(level=> {
			compressionLevel = level[0];
			blockHardness = 1.0*level[1]/2;

			internalCompressedName =
				compressionLevel +
				"_compressed_" + 
				baseBlockDisplayName;
			displayCompressedName = toTitleCase(internalCompressedName);

			event.create(internalCompressedName)
				.displayName(displayCompressedName)
				.material(materialType)
				.hardness(blockHardness)
				.resistance(blockHardness)
				.requiresTool(true)
				.tagBlock("mineable/" + toolNeeded)
				.tagBlock('minecraft:needs_stone_tool');
		})
	})
})