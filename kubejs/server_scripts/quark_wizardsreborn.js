///////// MAGIC /////////

ServerEvents.recipes(event => {

	///////// WIZARD'S REBORN x QUARK /////////

	// add framed block to wizard's reborn baulk recipes
	// prevents a conflict with quark vertical planks

	const baulkMaterials = [
		[
			"arcane_wood",
			["","_log","",""],
			["stripped_","_log","stripped_",""],
			["","_planks","","_planks"]
		],
		[
			"innocent_wood",
			["","_log","",""],
			["stripped_","_log","stripped_",""],
			["","_planks","","_planks"]
		],
		[
			"cork_bamboo",
			["","_block","",""],
			["","_planks","","_planks"],
			["","_chiseled_planks","","_chiseled_planks"]
		],
	]

	baulkMaterials.forEach(baulk => {
		let j = 1;
		while (j < baulk.length){
			let baulkInput =
				"wizards_reborn:" +
				baulk[j][0] +
				baulk[0] +
				baulk[j][1]
			let baulkOutput =
				"wizards_reborn:" +
				baulk[j][2] +
				baulk[0] +
				baulk[j][3] +
				"_baulk"

			event.remove({output: baulkOutput});
			event.shaped(
				Item.of(baulkOutput, 1),
				[
					' A ',
					' B ',
					' A '
				],
				{
					A: baulkInput,
					B: "#minecraft:logs"
				}
			)
			j++
		}
	})

})