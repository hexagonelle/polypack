ServerEvents.recipes(event=> {
	let toCompress = [
		"quark:jasper",
		"quark:limestone",
		"quark:shale",
		"quark:permafrost"
	];

	let compressLevel = [
		"single",
		"double",
		"triple",
		"quadruple",
		"quintuple",
		"hextuple"
	];

	let compressionDepth = compressLevel.length;

	var internalCompressedName = ""
	var previousLevelInternalName = ""
	var modOfOrigin = ""
	var baseBlockDisplayName = ""

	toCompress.forEach(block=> {
		modOfOrigin = block.split(":")[0];
		baseBlockDisplayName = block.split(":")[1];
		for(var i = 0; i < compressionDepth; i++){
			internalCompressedName =
				"kubejs:" + 
				compressLevel[i] +
				"_compressed_" + 
				baseBlockDisplayName;
			if(i==0){
				previousLevelInternalName = 
				block;
			} else {
				previousLevelInternalName = 
				"kubejs:" + 
				compressLevel[i-1] +
				"_compressed_" + 
				baseBlockDisplayName;
			}
			
			event.shapeless(
				internalCompressedName,
				[Item.of(previousLevelInternalName, 9)]
			)
			event.shapeless(
				Item.of(previousLevelInternalName, 9),
				[internalCompressedName]
			)
		}
	})

	// conflict with custom compressed blocks
	event.remove({id:"quark:building/crafting/sturdy_stone"})

})