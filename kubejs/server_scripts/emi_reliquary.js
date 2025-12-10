ServerEvents.tags('item', event => {
	// remove some recipes from emi
	function removeFromEMI(item){
		event.add('c:hidden_from_recipe_viewers', item)
	}
	const farmingForBlockheadsList = [
		"reliquary:apothecary_mortar",
		"reliquary:apothecary_cauldron"
	]
	farmingForBlockheadsList.forEach(item => {
		removeFromEMI(item)
	})
})