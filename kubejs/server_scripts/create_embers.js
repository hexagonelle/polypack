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

	// remove embers plate-crafting with hammer

	event.remove({id:"embers:lead_plate_hammering"})
	event.remove({id:"embers:silver_plate_hammering"})
	event.remove({id:"embers:dawnstone_plate_hammering"})
	event.remove({id:"embers:iron_plate_hammering"})
	event.remove({id:"embers:copper_plate_hammering"})
});