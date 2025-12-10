ServerEvents.recipes(event=> {

	event.shapeless(
		Item.of("kubejs:baby_coal", 8),
		["minecraft:coal"]
	)
	event.shapeless(
		Item.of("kubejs:baby_charcoal", 8),
		["minecraft:charcoal"]
	)

	event.shapeless(
		"minecraft:coal",
		[Item.of("kubejs:baby_coal", 8)]
	)
	event.shapeless(
		"minecraft:charcoal",
		[Item.of("kubejs:baby_charcoal", 8)]
	)
})