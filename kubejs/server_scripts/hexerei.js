ServerEvents.recipes(event => {
	// redundant items
	let hexereiWoods = ["mahagony","willow","witch_hazel"]
	hexereiWoods.forEach(hexereiWood =>{
		let recipeID = "hexerei:" + hexereiWood + "_woodcutter"
		event.remove({id:recipeID})
	})

});