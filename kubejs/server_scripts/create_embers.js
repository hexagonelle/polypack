ServerEvents.recipes(event => {

	// overlap with create
	event.remove({id:"embers:copper_nugget_to_ingot"})

	// get silver from asurine
	event.recipes.create.crushing(
		[
			Item.of('embers:silver_nugget').withChance(0.05)
		],
		'create:asurine'
	).processingTime(500)
	
});