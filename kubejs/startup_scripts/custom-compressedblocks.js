StartupEvents.registry("block", (event) => {
	let toCompress = [
		[
			"minecraft:andesite",
			"stone",
			"stone",
			"pickaxe"
		],[
			"minecraft:clay",
			"clay",
			"gravel",
			"shovel"
		],[
			"minecraft:cobblestone",
			"stone",
			"stone",
			"pickaxe"
		],[
			"minecraft:cobbled_deepslate",
			"stone",
			"stone",
			"pickaxe"
		],[
			"minecraft:diorite",
			"stone",
			"stone",
			"pickaxe"
		],[
			"minecraft:dirt",
			"dirt",
			"gravel",
			"shovel"
		],[
			"minecraft:granite",
			"stone",
			"stone",
			"pickaxe"
		],[
			"minecraft:gravel",
			"dirt",
			"gravel",
			"shovel"
		],[
			"minecraft:netherrack",
			"stone",
			"stone",
			"pickaxe"
		],[
			"minecraft:sand",
			"sand",
			"sand",
			"shovel"
		],[
			"minecraft:red_sand",
			"sand",
			"sand",
			"shovel"
		],[
			"minecraft:snow",
			"snow",
			"snow",
			"shovel"
		],[
			"minecraft:soul_sand",
			"sand",
			"sand",
			"shovel"
		],[
			"minecraft:soul_soil",
			"dirt",
			"gravel",
			"shovel"
		],[
			"minecraft:stone",
			"stone",
			"stone",
			"pickaxe"
		],[
			"minecraft:tuff",
			"stone",
			"stone",
			"pickaxe"
		],[
			"minecraft:deepslate",
			"stone",
			"stone",
			"pickaxe"
		]
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
	var soundType = "";
	var toolNeeded = "";
	var compressionLevel = "";
	var blockHardness = "";

	toCompress.forEach(block=> {
		internalName = block[0];
		materialType = block[1];
		soundType = block[2];
		toolNeeded = block[3];
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
				.soundType(soundType)
				.mapColor(materialType)
				.hardness(blockHardness)
				.resistance(blockHardness)
				.requiresTool(true)
				.tagBlock("mineable/" + toolNeeded)
				.tagBlock('minecraft:needs_stone_tool');
		})
	})
})