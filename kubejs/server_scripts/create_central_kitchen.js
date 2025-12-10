//////// CREATE RECIPES /////////

ServerEvents.recipes(event => {
	
	for(let i=1; i<5; i++){
		let recipeID = "create_central_kitchen:crafting/dough_" + i
		event.remove({id:recipeID})
	}
})