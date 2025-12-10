ServerEvents.recipes(event => {

	//////// CREATE x QUARK /////////

	// Allow crafting between different limestones:
	event.shapeless("create:limestone",["quark:limestone"])
	event.shapeless("quark:limestone",["create:limestone"])
	
})