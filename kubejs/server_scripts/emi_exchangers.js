ServerEvents.tags('item', event => {
	// remove some recipes from emi
	function removeFromEMI(item){
		event.add('c:hidden_from_recipe_viewers', item)
	}
	const exchangersList = [
		'exchangers:golden_exchanger',
		'exchangers:copper_exchanger',
		'exchangers:emerald_exchanger',
		'exchangers:obsidian_exchanger',
		'exchangers:amethyst_exchanger',
		'exchangers:end_exchanger',
		'exchangers:bee_exchanger',
		'exchangers:creative_exchanger'
	]
	exchangersList.forEach(exchanger => {
		removeFromEMI(exchanger)
	})
})