ServerEvents.recipes(event => {

	// conflict with luphie closed cardboard box
	event.remove({id:"supplementaries:present"})
	event.shaped(
		Item.of("supplementaries:present",1),
		[
			'AAA',
			'ABA',
			'AAA'
		],
		{
			A: "minecraft:paper",
			B: "#forge:string"
		}
	)

})