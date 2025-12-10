ServerEvents.recipes(event => {

	// unify conflicting dough recipes
	event.remove({output:"farmersdelight:wheat_dough"})

});