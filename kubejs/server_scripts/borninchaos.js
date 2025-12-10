ServerEvents.recipes(event => {
	
	event.remove({id:"born_in_chaos_v1:bundleof_bones_l"});
	event.remove({id:"born_in_chaos_v1:bundleof_bones_k"});

	event.shapeless(
				"born_in_chaos_v1:bundle_of_bones",
				[Item.of("minecraft:bone", 9)]
			)
	event.shapeless(
				Item.of("minecraft:bone", 9),
				"born_in_chaos_v1:bundle_of_bones"
			)


});