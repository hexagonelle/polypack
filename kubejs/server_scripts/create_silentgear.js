ServerEvents.recipes(event => {

	function hammerToCrushing(event,material){
		// remove hammer crushing
		event.remove({id:`silentgear:${material}_dust`})

		// add crushing recipe
		event.recipes.create.crushing(
			[`silentgear:${material}_dust`],
			`silentgear:${material}_ingot`
		).processingTime(100)
	}

	let materialsList = [
		"crimson_iron",
		"crimson_steel",
		"blaze_gold",
		"azure_silver",
		"azure_electrum",
		"tyrian_steel"
	]

	materialsList.forEach(mat =>{
		hammerToCrushing(event,mat)
	});


		event.remove({id:`silentgear:crushed_shulker_shell`})
		event.recipes.create.crushing(
			[`silentgear:crushed_shulker_shell`],
			`minecraft:shulker_shell`
		).processingTime(100)



});