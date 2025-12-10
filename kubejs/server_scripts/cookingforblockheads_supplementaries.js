ServerEvents.recipes(event => {

	//compat between supplementaries jar & cooking for blockheads

	event.shapeless("supplementaries:jar",["cookingforblockheads:milk_jar"])
	event.shapeless("cookingforblockheads:milk_jar",["supplementaries:jar"])
	
});