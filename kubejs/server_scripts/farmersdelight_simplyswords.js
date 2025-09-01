ServerEvents.recipes(event => {

	// names for some tools and the corresponding materials 
	const toolMaterials = [
		["iron","iron_ingot"],
		["gold","gold_ingot"],
		["diamond","diamond"]
	];

	// recipe to reshape simply swords rapiers
	// avoids conflict with farmer's delight knives
	toolMaterials.forEach(toolMat => {
		let itemID = "simplyswords:" + toolMat[0] + "_rapier"
		let materialID = "minecraft:" + toolMat[1]
		event.remove({output: itemID})
		event.shaped(
			Item.of(itemID, 3),
			[
				'  B',
				' BB',
				'A  '
			],
			{
				A: '#forge:rods/wooden',
				B: materialID
			}
		)
	})

})