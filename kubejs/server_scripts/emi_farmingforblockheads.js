ServerEvents.tags('item', event => {
	// remove some recipes from emi
	function removeFromEMI(item){
		event.add('c:hidden_from_recipe_viewers', item)
	}
	const farmingForBlockheadsList = [
		"farmingforblockheads:chicken_nest",
		"farmingforblockheads:feeding_trough",
		"farmingforblockheads:fertilized_farmland_rich",
		"farmingforblockheads:fertilized_farmland_rich_stable",
		"farmingforblockheads:fertilized_farmland_healthy_stable",
		"farmingforblockheads:fertilized_farmland_stable",
		"farmingforblockheads:green_fertilizer",
		"farmingforblockheads:red_fertilizer",
		"farmingforblockheads:yellow_fertilizer"
	]
	farmingForBlockheadsList.forEach(item => {
		removeFromEMI(item)
	})
})