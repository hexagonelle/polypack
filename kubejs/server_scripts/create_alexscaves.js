//////// ALEXSCAVES X CREATE /////////

ServerEvents.recipes(event => {

	//add radrock uranium ore to crushing
	event.recipes.create.crushing(
		[
			'2x create:crushed_raw_uranium',
			Item.of('create:crushed_raw_uranium').withChance(0.5),
			'create:experience_nugget',
			Item.of('minecraft:cobblestone').withChance(0.12)
		],
		'alexscaves:radrock_uranium_ore'
	)
})