ServerEvents.recipes(event => {
	
	event.remove({id:"waystones:waystone"})
	event.remove({id:"waystones:mossy_waystone"})
	event.remove({id:"waystones:sandy_waystone"})

	event.remove({id:"waystones:sharestone"})

	event.remove({id:"waystones:warp_plate"})
	event.remove({id:"waystones:portstone"})

	event.remove({id:"waystones:return_scroll"})
	event.remove({id:"waystones:bound_scroll"})
	event.remove({id:"waystones:warp_scroll"})

	event.remove({id:"waystones:warp_stone"})
	event.remove({id:"waystones:warp_dust"})

});