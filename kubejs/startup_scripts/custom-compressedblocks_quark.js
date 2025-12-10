StartupEvents.registry("block", (event) => {
	let toCompress = [
		["quark:jasper", "stone", "stone", "pickaxe"],
		["quark:limestone", "stone", "stone", "pickaxe"],
		["quark:shale", "stone", "stone", "pickaxe"],
		["quark:permafrost", "stone", "stone", "pickaxe"],
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
	var displayCompressedName = "";
	var baseBlockDisplayName = "";
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