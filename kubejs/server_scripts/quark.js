ServerEvents.recipes(event => {

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
	
	// function to remove minecraft wool dyeing
	// avoids conflict with quark wool dyeing
	minecraftColors.forEach(color => {
		let recipeID = "minecraft:dye_" + color + "_wool"
		event.remove({id: recipeID})
	})

	// avoids conflict with blackstone and deepslate furnaces from quark
	event.remove({id: "quark:building/crafting/furnaces/mixed_furnace"})
	event.replaceInput(
		{
			id: "quark:building/crafting/furnaces/cobblestone_furnace"
		},
		"#forge:cobblestone",
		"minecraft:cobblestone"
	)

	// recipe conflict with other glass shards to glass
	event.remove({id:'quark:tweaks/crafting/dirty_glass'})
	event.shaped('quark:dirty_glass',
		[
			'AA',
			'AA'
		],
		{
			A: 'quark:dirty_shard'
  		}
  	)

	event.shapeless(
		Item.of('quark:dirty_shard', 1),
		[
			'#quark:shards',
			'minecraft:dirt'
		]
	)

	// self conflict with oak chests
	event.remove({id:"quark:tweaks/crafting/utility/chests/mixed_chest_wood"})
	event.remove({id:"quark:building/crafting/chests/mixed_chest"})

})