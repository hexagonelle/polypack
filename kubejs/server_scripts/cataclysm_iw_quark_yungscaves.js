ServerEvents.recipes(event => {
	
	event.remove({id:"cataclysm:new/pointed_icicle"})
	event.shapeless("immersive_weathering:icicle",["yungscavebiomes:icicle"])
	event.shapeless("yungscavebiomes:icicle",["cataclysm:pointed_icicle"])
	event.shapeless("cataclysm:pointed_icicle",["immersive_weathering:icicle"])

});