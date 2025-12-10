ServerEvents.recipes(event => {

	const shelvesList = [
		["minecraft:oak_",""],
		["cluttered:crabapple_","_pink"]
	]

	// fix conflict with handcrafted plate
	shelvesList.forEach(shelf => {
		let materialBlockID = shelf[0] + "slab"
		let outputID = "cluttered:small_shelf" + shelf[1]
		let recipeID = outputID
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