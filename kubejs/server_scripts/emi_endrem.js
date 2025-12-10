ServerEvents.tags('item', event => {
	// remove some recipes from emi
	function removeFromEMI(item){
		event.add('c:hidden_from_recipe_viewers', item)
	}

	const endremRemoveList = [
		"endrem:witch_pupil",
		"endrem:undead_soul",
		"endrem:cryptic_eye",
		"endrem:witch_eye",
		"endrem:undead_eye",
		"endrem:exotic_eye"
	]

	endremRemoveList.forEach(item => {
		removeFromEMI(item)
	})
})