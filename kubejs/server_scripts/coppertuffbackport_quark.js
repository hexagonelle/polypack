ServerEvents.recipes(event => {

0	// redundant with quark

	const namespace = "copperandtuffbackport:"
	event.remove({output: `${namespace}tuff_stairs`})
	event.remove({output: `${namespace}tuff_slab`})
	event.remove({output: `${namespace}tuff_wall`})
	event.remove({output: `${namespace}chiseled_tuff`})
	event.remove({output: `${namespace}polished_tuff`})
	event.remove({output: `${namespace}polished_tuff_slab`})
	event.remove({output: `${namespace}polished_tuff_stairs`})
	event.remove({output: `${namespace}polished_tuff_wall`})
	event.remove({output: `${namespace}tuff_bricks`})
	event.remove({output: `${namespace}tuff_brick_slab`})
	event.remove({output: `${namespace}tuff_brick_stairs`})
	event.remove({output: `${namespace}tuff_brick_wall`})
	event.remove({output: `${namespace}chiseled_tuff_bricks`})

})