ServerEvents.recipes(event => {

	// conflict with handcrafted plate
	event.remove({id:"supplementaries:item_shelf"})
	event.shapeless("supplementaries:item_shelf",["quark:stripped_oak_post"])

});