ServerEvents.recipes(event => {

	const shelvesList = [
		["minecraft:oak_",""],
		["luphieclutteredmod:luphie_pink_","pink_"]
	]

	// fix conflict with handcrafted plate
	shelvesList.forEach(shelf =>{
		let materialBlockID = shelf[0] + "slab"
		let outputID = "luphieclutteredmod:small_" + shelf[1] + "shelf"
		let recipeID = outputID.concat("_recipe")
		let fenceBlockID = shelf[0] + "fence"

		event.remove({id:recipeID})
		event.shaped(
			Item.of(outputID,1),
			[
				'   ',
				'AAA',
				'B B'
			],
			{
				A: materialBlockID,
				B: fenceBlockID
			}
		)
	})
	
});