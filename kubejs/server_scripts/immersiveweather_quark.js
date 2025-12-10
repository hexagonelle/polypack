ServerEvents.recipes(event => {

	//////// IMMERSIVE WEATHERING x QUARK /////////

	// Allow crafting between different permafrosts:
	event.shapeless("immersive_weathering:permafrost",["quark:permafrost"])
	event.shapeless("quark:permafrost",["immersive_weathering:permafrost"])

})