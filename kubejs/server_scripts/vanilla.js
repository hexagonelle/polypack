ServerEvents.tags('item', event => {
	// Add a forge tag for unstripped logs
	// This way recipes can distinguish between unstripped and stripped

	event.removeAll('forge:unstripped_logs')
	const logsList = event.get('minecraft:logs').getObjectIds()
	const blacklistStripped = Ingredient.of(/.*stripped.*/)
	logsList.forEach(log => {
		if (!blacklistStripped.test(log)) event.add('forge:unstripped_logs', log)
	})

	const unstrippedLogsList = event.get('forge:unstripped_logs').getObjectIds()
	const blacklistWood = Ingredient.of(/.*wood.*/)
	const blacklistHyphae = Ingredient.of(/.*hyphae.*/)
	const blacklistCarved = Ingredient.of(/.*carved.*/)
	unstrippedLogsList.forEach(log => {
		if (
			!blacklistWood.test(log) &&
			!blacklistHyphae.test(log) &&
			!blacklistCarved.test(log)
		)
		{
			event.add('forge:tree_trunks', log)
		}
	})

	const treeTrunksList = event.get('forge:tree_trunks').getObjectIds()
	treeTrunksList.forEach(trunk => {
		let plank = String(trunk).replace("_log","_planks")
		plank = String(plank).replace("_stem","_planks")
		event.add('forge:regular_planks', plank)
	})
	
})

ServerEvents.recipes(event => {

	///////////// VANILLA /////////////

	//add a saddle recipe
	event.shaped("minecraft:saddle",
		[
			'AAA',
			'BBB',
			'C C'
		],
		{
			A: "#minecraft:wool",
			B: "#forge:leather",
			C: "minecraft:tripwire_hook"
		  }
	)

})