ServerEvents.recipes(event => {

	// remove create tuff crushing
	event.remove({ output:"malum:coal_fragment" })
	event.remove({ output:"malum:charcoal_fragment" })

})