ServerEvents.tags('item', event => {

	//fix tallow & animal fat
	event.add('hexerei:tallow_meltable', 'delightful:animal_fat')
	event.add('hexerei:tallow_meltable', 'immersive_weathering:tallow')
	event.add('forge:tallow', 'hexerei:animal_fat')
	event.add('forge:tallow', 'delightful:animal_fat')
	event.add('forge:tallow', 'immersive_weathering:tallow')
})

ServerEvents.recipes(event => {

  	//make animal fat and tallow compatible
	event.replaceInput(
		{id:"supplementaries:soap_from_animal_fat"},
		"delightful:animal_fat",
		"#forge:tallow"
	)

	event.replaceInput(
		{id:"delightful:candle_from_animal_fat"},
		"delightful:animal_fat",
		"#forge:tallow"
	)

	event.replaceInput(
		{id:"jei:/delightful/cooking/animal_oil_bottle"},
		"delightful:animal_fat",
		"#forge:tallow"
	)

	event.replaceInput(
		{id:"jei:/farmersdelight/cooking/dog_food_from_animal_fat"},
		"delightful:animal_fat",
		"#forge:tallow"
	)

});