ServerEvents.recipes(event => {

	let pillarTrimMaterials = [
		"minecraft:granite",
		"minecraft:andesite",
		"minecraft:diorite",
		"minecraft:"
	]

	// list of the 16 minecraft colors
	const minecraftColors = [
		"white",
		"light_gray",
		"gray",
		"black",
		"brown",
		"red",
		"orange",
		"yellow",
		"lime",
		"green",
		"cyan",
		"light_blue",
		"blue",
		"purple",
		"magenta",
		"pink"
	];

	///////// HANDCRAFTED CONFLICTS /////////

	// conflict with handcrafted sheet
	minecraftColors.forEach(color=> {
		let wool = "minecraft:" + color + "_wool"
		let carpet = "minecraft:" + color + "_carpet"
		let sheet = "handcrafted:" + color + "_sheet"
		event.replaceInput(
			{type:"minecraft:crafting_shapeless", output:sheet},
			wool,
			carpet
		)
	})

	Ingredient.of("#handcrafted:pillar_trims").itemIds.forEach(pillarTrim => {
		var inputPlank
		let outputID = String(pillarTrim)
		event.forEachRecipe(
			{type:"minecraft:crafting_shaped",output:outputID},
			trimRecipe => {
				let ingredient = trimRecipe.originalRecipeIngredients
				inputPlank = ingredient[0]
				inputPlank = inputPlank.itemIds[0]
				inputPlank = String(inputPlank)
			}
		)

		let nameSplit = outputID.split(":")
		let inputSlab = ""
		if (nameSplit[0]=="handcrafted"){
			inputSlab = inputSlab.concat(
				"minecraft:",
				nameSplit[1].replace("pillar_trim","slab")
			)
		} else {
			let nameSplit2 = nameSplit[1].split("/")
			inputSlab = inputSlab.concat(
				nameSplit2[1],
				":",
				nameSplit2[2].replace("pillar_trim","")
			)
			if (nameSplit2[1] == "quark"){
				inputSlab = inputSlab.concat("planks_slab")
			} else if (nameSplit2[2]=="luphie_glow_pillar_trim"){
				inputSlab = inputSlab.concat("wood_set_slab")
			} else if (nameSplit2[2]=="luphie_purple_pillar_trim"){
				inputSlab = inputSlab.concat("plank_set_slab")
			} else if (nameSplit2[2]=="dreadwood_pillar_trim"){
				inputSlab = "minecraft:oak_slab"
			} else {
				inputSlab = inputSlab.concat("slab")
			}
		}

		event.remove({type:"minecraft:crafting_shaped",output:outputID})
		event.shaped(Item.of(outputID,8),
			[
				"ABA",
				"ABA",
				"ABA"
			],
			{
				A: inputSlab,
				B: inputPlank
			}
		)
	})

});