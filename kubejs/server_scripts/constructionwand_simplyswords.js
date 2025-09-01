ServerEvents.recipes(event => {
	
	// names for construction wand materials
	const constructionWandMaterials = [
		["stone","cobblestone"],
		["iron","iron_ingot"],
		["diamond","diamond"],
		["infinity","nether_star"]
	];

	// conflict b/t simplyswords spears & construction wand
	constructionWandMaterials.forEach(material => {
		let itemID = "constructionwand:" + material[0] + "_wand"
		let materialID = "minecraft:" + material[1]
		event.remove({output: itemID})
		event.shaped(itemID,
			[
				' AB',
				' CA',
				'C  '
			],
			{
				A: "#forge:string",
				B: materialID,
				C: "#forge:rods/wooden"
			}
		)
	})
	
})