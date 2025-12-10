///////// WIZARD'S REBORN x CREATE /////////

function rawFromIngot(ingot,rawOre,event){
	event.recipes.create.compacting(
		[rawOre],
		[
			Fluid.water(100),
			Item.of(ingot,2),
			Item.of('minecraft:sand',4),
			Item.of('minecraft:gravel',4)
		]
	).heated()
}

function oreFromRaw(rawOre,oreBlock,event){
	event.recipes.create.compacting(
		[oreBlock],
		[
			Fluid.water(100),
			Item.of(rawOre,4),
			Item.of('minecraft:stone',8)
		]
	).superheated()
}

ServerEvents.recipes(event => {

	const oreList = [
		['minecraft','gold'],
		['minecraft','iron'],
		['minecraft','copper'],
		['embers','lead'],
		['embers','silver'],
		['create','zinc']
	]

	// obtain ores from their raw versions
	// and raw ores from their ingots
	oreList.forEach(material => {
		var oreBlock = material[0] + ":" + material[1] + "_ore"
		var rawOre = material[0] + ":raw_" + material[1]
		var ingot = material[0] + ":" + material[1] + "_ingot"

		rawFromIngot(ingot,rawOre,event)
		oreFromRaw(rawOre,oreBlock,event)
	})

})