ServerEvents.tags('item', event => {
	// Add silent gear tools to the vanilla tags lists
	// Lets them perform vanilla functions

	const knivesList = [
		"knife"
	];

	var toolID = "";
	function addToolToTag(tool,tag,event){
		toolID = "silentgear:" + tool
		event.add(tag, toolID)
	};

	knivesList.forEach(knife => {
		addToolToTag(knife,"farmersdelight:tools/knives",event)
	});
	
})