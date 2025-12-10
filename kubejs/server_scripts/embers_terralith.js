ServerEvents.recipes(event => {

	const terralithEmbersReplaceList = [
		"observer",
		"dropper",
		"dispenser",
		"piston",
		"lever",
		"sticky_piston",
		"lead"
	]

	// more general recipe added by terralith & embers
	terralithEmbersReplaceList.forEach(item =>{
		let itemID = "minecraft:" + item
		event.remove({id:itemID})
	})

});